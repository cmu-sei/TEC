# TEC - Automated Mismatch Detection Tool
# Copyright 2023 Carnegie Mellon University.
# NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.
# Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.
# [DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.
# This Software was created using the SEI Design System and includes and/or makes use of Third-Party Software subject to its own license.
# DM23-0003

import requests
import os
from jsonschema import Draft7Validator
from flask import current_app

from database_helpers.documents import *
from database_helpers.db_lists import *

def validate_document_against_schema(descriptor_name, document):
    """
    Validate a document against its schema

    :param descriptor_name: Schema being validated against
    :param document: Document being validated

    :return: A list containing validation error messages as strings
    """
    dir_path = os.path.dirname(os.path.realpath(__file__))
    dir_path = dir_path + '/../ml-mismatch-descriptors/schemas/' + descriptor_name + '_schema.json'
    schema_file = open(dir_path)
    schema = json.load(schema_file)

    v = Draft7Validator(schema)
    validation_errors = sorted(v.iter_errors(document), key=str)

    schema_errors = []
    for error in validation_errors:
        # This gives much more explicit errors but missing a required field prints out the entire schema
        # error_list.append(str(error))
        schema_errors.append(error.message)
    
    return schema_errors


def validate_document_linked_fields(database, project_name, descriptor_name, document):
    """
    :param database: Database that will be used (pulled from the global app config)
    :param project_name: name of the project that contains the documents being validated
    :param descriptor_name: name of the descriptor being evaluated
    :param system_context_document: System Context document being evaluated for submission
    """
    error_list = []
    if(descriptor_name == 'system_context'):
        error_list = validate_system_context(database, project_name, document)
    elif(descriptor_name == 'data_pipeline'):
        error_list = validate_data_pipeline(database, project_name, document)
    elif(descriptor_name == 'training_data'):
        error_list = validate_training_data(database, project_name, document)
    elif(descriptor_name == 'trained_model'):
        error_list = validate_trained_model(database, project_name, document)
    elif(descriptor_name == 'development_environment'):
        error_list = validate_development_environment(database, project_name, document)
    elif(descriptor_name == 'production_environment'):
        error_list = validate_production_environment(database, project_name, document)
    elif(descriptor_name == 'production_data'):
        error_list = validate_production_data(database, project_name, document)

    return error_list


def validate_system_context(database, project_name, system_context_document):
    """
    Validate that the linked fields being submitted are still valid
    - business_goals map to business_goal_mapping in Trained Model

    :param database: Database that will be used (pulled from the global app config)
    :param project_name: name of the project that contains the documents being validated
    :param system_context_document: System Context document being evaluated for submission
    """
    error_list = []

    db_trained_model_reponse = db_get_document(database, project_name, 'trained_model')

    if(db_trained_model_reponse):
        trained_model_document = db_trained_model_reponse['document']

        system_context_business_goals_ids = [item['id'] for item in system_context_document['business_goals']]

        for business_metric in trained_model_document['business_metrics']:
            if(business_metric['business_goal_mapping'] not in system_context_business_goals_ids and business_metric['business_goal_mapping'] != ''):
                error_list.append('The Business Goal ID: ' + business_metric['business_goal_mapping'] + ' is currently in use in Trained Model and cannot be deleted.')

    return error_list


def validate_data_pipeline(database, project_name, data_pipeline_document):
    """
    Validate that the linked fields being submitted are still valid and then checks db_lists for new entries
    - component and data_item in input_spec are pulled from upstream_components in Development Environment

    :param database: Database that will be used (pulled from the global app config)
    :param project_name: name of the project that contains the documents being validated
    :param data_pipeline_document: Data Pipeline document being evaluated for submission

    :return: A list containing error messages as strings
    """
    error_list = []

    db_response = db_get_document(database, project_name, 'development_environment')

    if(db_response):
        development_environment_document = db_response
        upstream_component_names = [component['component_name'] for component in development_environment_document['upstream_components']]

        for input_spec in data_pipeline_document['input_spec']:
            # if('component' not in input_spec or 'data_item' not in input_spec):
                

            if(input_spec['component_mapping']['component'] == ''):
                pass
            elif(input_spec['component_mapping']['component'] not in upstream_component_names):
                error_list.append("The Upstream Component: " + input_spec['component_mapping']['component'] + " is no longer available in Development Environment.")
            else:
                selected_upstream_component = next( component for component in development_environment_document['upstream_components'] if(component['component_name'] == input_spec['component_mapping']['component']))
                selected_upstream_component_data_items = [ item['item_name'] for item in selected_upstream_component['output_spec']]

                if(input_spec['component_mapping']['data_item'] not in selected_upstream_component_data_items and input_spec['component_mapping']['data_item'] != ''):
                    error_list.append("The Data Item: " + input_spec['component_mapping']['data_item'] + ' is no longer available in the component: ' + input_spec['component_mapping']['component'] + ' in Development Environment.')

    # If there are no errors, check the database to see if any of the item types submitted are new and need to be added
    if(error_list == []):
        submitted_item_type_list = [spec['item_type'] for spec in data_pipeline_document['input_spec']]
        validate_item_type_submission(database, submitted_item_type_list)

    return error_list


def validate_training_data(database, project_name, training_data_document):
    """
    Validate that all the fields in the document being submitted are valid and then checks db_lists for new entries
    - raw_data_identifer is pulled from dataset_identifier in Raw Data

    :param database: Database that will be used (pulled from the global app config)
    :param project_name: name of the project that contains the documents being validated
    :param training_data_document: Training Data document being evaluated for submission

    :return: A list containing error messages as strings
    """
    error_list = []

    schema_field_name_list = [schema['field_name'] for schema in training_data_document['schema']]

    for statistic in training_data_document['statistics']:
        if(statistic['field'] not in schema_field_name_list and statistic['field'] != ''):
            error_list.append('The field: ' + statistic['field'] + ' that you selected is no longer in the list of schema. Please fix and resubmit.')

    db_raw_data_response = db_get_document(database, project_name, 'raw_data')
    
    if(db_raw_data_response):
        raw_data_document = db_raw_data_response
        if(training_data_document['raw_data_identifier'] != raw_data_document['dataset_identifier']):
            error_list.append('Dataset Identifier in Raw Data was updated and this submission does not reflect that change. Reload page and resubmit to get updated field.')

    # If there are no errors, check the database to see if any of the statistics submitted are new and need to be added
    if(error_list == []):
        statistic_property_list = [statistic['property'] for statistic in training_data_document['statistics']]
        validate_statistic_submission(database, statistic_property_list)

    return error_list


def validate_trained_model(database, project_name, trained_model_document):
    """
    Validate that the linked fields being submitted are still valid and then checks db_lists for new entries
    - data_pipeline_identifier is pulled from pipeline_identifier in Data Pipeline
    - training_data_identifier is pulled from dataset_identifier in Training Data
    - component and data_item in output_spec and final_output_spec are pulled from downstream_components in Development Environment
    - metric in algorithm_metrics maps to algorithm_metrics in Production Environment
    - metric in business_metrics maps to business_metrics in Production Environment
    - log in log_data maps to model_logs in Production Environment
    - short_name in user_system_feedback maps to user_system_feedback in Production Environment
    - business_goal_mapping in business metrics is pulled from business_goals in Systen Context


    :param database: Database that will be used (pulled from the global app config)
    :param project_name: name of the project that contains the documents being validated
    :param trained_model_document: Trained Model document being evaluated for submission

    :return: A list containing error messages as strings
    """
    error_list = []

    db_data_pipeline_response = db_get_document(database, project_name, 'data_pipeline')

    if(db_data_pipeline_response):
        data_pipeline_document = db_data_pipeline_response
        if(trained_model_document['data_pipeline_identifier'] != data_pipeline_document['pipeline_identifier']):
            error_list.append('Pipeline Identifier in Data Pipeline was updated and this submission does not reflect that change. Reload page and resubmit to get updated field.')

    db_training_data_response = db_get_document(database, project_name, 'training_data')

    if(db_training_data_response):
        training_data_document = db_training_data_response
        if(trained_model_document['training_data_identifier'] != training_data_document['dataset_identifier']):
            error_list.append('Dataset Identifier in Training Data was updated and this submission does not reflect that change. Reload page and resubmit to get updated field.')

    db_development_environment_response = db_get_document(database, project_name, 'development_environment')

    if(db_development_environment_response):
        development_environment_document = db_development_environment_response
        development_environment_downstream_component_names = [component['component_name'] for component in development_environment_document['downstream_components']]

        # Ensuring that no components selected in Output Specification of Trained Model have been deleted
        for output_spec in trained_model_document['output_spec']:
            if(output_spec['component_mapping']['component'] == ''):
                pass
            # Specifically checking the component
            elif(output_spec['component_mapping']['component'] not in development_environment_downstream_component_names):
                error_list.append('The Downstream Component: ' + output_spec['component_mapping']['component'] + ' is no longer available in Development Environment.')
            # Checking that the data item selected under that component is also still available
            else:
                selected_downstream_component = next(component for component in development_environment_document['downstream_components'] if (component['component_name'] == output_spec['component_mapping']['component']))
                selected_downstream_component_data_items = [item['item_name'] for item in selected_downstream_component['input_spec']]

                if(output_spec['component_mapping']['data_item'] != '' and output_spec['component_mapping']['data_item'] not in selected_downstream_component_data_items):
                    error_list.append('The Data Item: ' + output_spec['component_mapping']['data_item'] + ' in the Downstream Component: ' + output_spec['component_mapping']['component'] + ' is no longer available in Development Environment.')

        # Ensuring that no components selected in Final Output Specification of Trained Model have been deleted
        for final_output_spec in trained_model_document['final_output_spec']:
            if(final_output_spec['component_mapping']['component'] == ''):
                pass
            # Specifically checking the component
            elif(final_output_spec['component_mapping']['component'] not in development_environment_downstream_component_names):
                error_list.append('The Downstream Component: ' + final_output_spec['component_mapping']['component'] + ' is no longer available in Development Environment.')
            # Checking that the data item selected under that component is also still available
            else:
                selected_downstream_component = next(component for component in development_environment_document['downstream_components'] if (component['component_name'] == final_output_spec['component_mapping']['component']))
                selected_downstream_component_data_items = [item['item_name'] for item in selected_downstream_component['input_spec']]

                if(final_output_spec['component_mapping']['data_item'] != '' and final_output_spec['component_mapping']['data_item'] not in selected_downstream_component_data_items):
                    error_list.append('The Data Item: ' + final_output_spec['component_mapping']['data_item'] + ' in the Downstream Component: ' + final_output_spec['component_mapping']['component'] + ' is no longer available in Development Environment.')    

    db_production_environment_response = db_get_document(database, project_name, 'production_environment')

    if(db_production_environment_response):
        production_environment_document = db_production_environment_response

        production_environment_algorithm_metrics = [item['metric'] for item in production_environment_document['algorithm_metrics']]
        trained_model_algorithm_metrics = [item['metric'] for item in trained_model_document['algorithm_metrics']]
        
        for algorithm_metric in production_environment_algorithm_metrics:
            if(algorithm_metric not in trained_model_algorithm_metrics and algorithm_metric != ''):
                error_list.append('The Algorithm Metric: ' + algorithm_metric + ' is currently in use in Production Environment and cannot be deleted.')

        production_environment_business_metrics = [item['metric'] for item in production_environment_document['business_metrics']]
        trained_model_business_metrics = [item['metric'] for item in trained_model_document['business_metrics']]

        for business_metric in production_environment_business_metrics:
            if(business_metric not in trained_model_business_metrics and business_metric != ''):
                error_list.append('The Business Metric: ' + business_metric + ' is currently in use in Production Environment and cannot be deleted.')

        production_environment_model_logs = [item['log'] for item in production_environment_document['model_logs']]
        trained_model_log_data = [item['log'] for item in trained_model_document['log_data']]

        for model_log in production_environment_model_logs:
            if(model_log not in trained_model_log_data and model_log != ''):
                error_list.append('The Model Log: ' + model_log + ' is currently in use in Production Environment and cannot be deleted.')

        production_environment_user_system_feedback = [item['feedback'] for item in production_environment_document['user_system_feedback']]
        trained_model_user_system_feedback = [item['short_name'] for item in trained_model_document['user_system_feedback']]

        for feedback in production_environment_user_system_feedback:
            if(feedback not in trained_model_user_system_feedback and feedback != ''):
                error_list.append('The User System Feedback: ' + feedback + ' is currently in use in Production Environment and cannot be deleted.')

    db_system_context_response = db_get_document(database, project_name, 'system_context')

    if(db_system_context_response):
        system_context_document = db_system_context_response

        system_context_business_goals_ids = [item['id'] for item in system_context_document['business_goals']]

        for business_metric in trained_model_document['business_metrics']:
            if(business_metric['business_goal_mapping'] not in system_context_business_goals_ids and business_metric['business_goal_mapping'] != ''):
                error_list.append('The Business Goal ID: ' + business_metric['business_goal_mapping'] + ' is no longer available in System Context.')
            
    # If there are no errors, check the database to see if any of the item types or programming languages being submitted are new and need to be added
    if(error_list == []):
        submitted_programming_language_list = []
        for component in trained_model_document['model_components']:
            for language in component['programming_languages']:
                submitted_programming_language_list.append(language)
        
        validate_programming_language_submission(database, submitted_programming_language_list)

        submitted_ml_framework_list = trained_model_document['ml_frameworks']
        validate_ml_framework_submission(database, submitted_ml_framework_list)

        submitted_item_type_list = []
        for output_spec in trained_model_document['output_spec']:
            submitted_item_type_list.append(output_spec['item_type'])
        
        for final_output_spec in trained_model_document['final_output_spec']:
            submitted_item_type_list.append(final_output_spec['item_type'])

        validate_item_type_submission(database, submitted_item_type_list)


    return error_list


def validate_development_environment(database, project_name, development_environment_document):
    """
    Validate that the linked fields being submitted are still valid and then checks db_lists for new entries
    - component_name and data_item in upstream_components map to input_spec in Data Pipeline
    - component_name and data_item in downstream_components map to output_spec and final_output_spec in Trained Model

    :param database: Database that will be used (pulled from the global app config)
    :param project_name: name of the project that contains the documents being validated
    :param development_environment_document: Development Environment document being evaluated for submission

    :return: A list containing error messages as strings
    """
    error_list = []

    db_data_pipeline_response = db_get_document(database, project_name, 'data_pipeline')

    if(db_data_pipeline_response):
        data_pipeline_document = db_data_pipeline_response
        development_environment_upstream_component_names = [component['component_name'] for component in development_environment_document['upstream_components']]

        # Ensuring that no components selected in the input specification of Data Pipeline have been deleted
        for input_spec in data_pipeline_document['input_spec']:
            if(input_spec['component_mapping']['component'] == ''):
                pass
            # Specifically checking the component
            elif(input_spec['component_mapping']['component'] not in development_environment_upstream_component_names):
                error_list.append('The Upstream Component: ' + input_spec['component_mapping']['component'] + ' is in use in Data Pipeline and cannot be deleted.')
            # Checking that the data item selected under that component is also still available
            else:
                selected_upstream_component = next(component for component in development_environment_document['upstream_components'] if(component['component_name'] == input_spec['component_mapping']['component']))
                selected_upstream_component_data_items = [item['item_name'] for item in selected_upstream_component['output_spec']]

                if(input_spec['component_mapping']['data_item'] != '' and input_spec['component_mapping']['data_item'] not in selected_upstream_component_data_items):
                    error_list.append('The Data Item: ' + input_spec['component_mapping']['data_item'] + ' in the Upstream Component: ' + input_spec['component_mapping']['component'] + ' is in use in Data Pipeline and cannot be deleted.')

    db_trained_model_response = db_get_document(database, project_name, 'trained_model')

    if(db_trained_model_response):
        trained_model_document = db_trained_model_response
        development_environment_downstream_component_names = [component['component_name'] for component in development_environment_document['downstream_components']]

        # Ensuring that no components selected in Output Specification of Trained Model have been deleted
        for output_spec in trained_model_document['output_spec']:
            if(output_spec['component_mapping']['component'] == ''):
                pass
            # Specifically checking the component
            elif(output_spec['component_mapping']['component'] not in development_environment_downstream_component_names):
                error_list.append('The Downstream Component: ' + output_spec['component_mapping']['component'] + ' is in use in Trained Model and cannot be deleted.')
            # Checking that the data item selected under that component is also still available
            else:
                selected_downstream_component = next(component for component in development_environment_document['downstream_components'] if (component['component_name'] == output_spec['component_mapping']['component']))
                selected_downstream_component_data_items = [item['item_name'] for item in selected_downstream_component['input_spec']]

                if(output_spec['component_mapping']['data_item'] != '' and output_spec['component_mapping']['data_item'] not in selected_downstream_component_data_items):
                    error_list.append('The Data Item: ' + output_spec['component_mapping']['data_item'] + ' in the Downstream Component: ' + output_spec['component_mapping']['component'] + ' is in use in Trained Model and cannot be deleted.')

        # Ensuring that no components selected in Final Output Specification of Trained Model have been deleted
        for final_output_spec in trained_model_document['final_output_spec']:
            if(final_output_spec['component_mapping']['component'] == ''):
                pass
            # Specifically checking the component
            elif(final_output_spec['component_mapping']['component'] not in development_environment_downstream_component_names):
                error_list.append('The Downstream Component: ' + final_output_spec['component_mapping']['component'] + ' is in use in Trained Model and cannot be deleted.')
            # Checking that the data item selected under that component is also still available
            else:
                selected_downstream_component = next(component for component in development_environment_document['downstream_components'] if (component['component_name'] == final_output_spec['component_mapping']['component']))
                selected_downstream_component_data_items = [ item['item_name'] for item in selected_downstream_component['input_spec']]

                if(final_output_spec['component_mapping']['data_item'] not in selected_downstream_component_data_items):
                    error_list.append('The Data Item: ' + final_output_spec['component_mapping']['data_item'] + ' in the Downstream Component: ' + final_output_spec['component_mapping']['component'] + ' is in use in Trained Model and cannot be deleted.')

    # If there are no errors, check the database to see if any of the item types submitted are new and need to be added
    if(error_list == []):
        submitted_item_type_list = []
        for component in development_environment_document['upstream_components']:
            for output_spec in component['output_spec']:
                submitted_item_type_list.append(output_spec['item_type'])
        
        for component in development_environment_document['downstream_components']:
            for input_spec in component['input_spec']:
                submitted_item_type_list.append(input_spec['item_type'])

        validate_item_type_submission(database, submitted_item_type_list)

    return error_list


def validate_production_environment(database, project_name, production_environment_document):
    """
    Validate that the linked fields being submitted are still valid
    - metric in algorithm_metrics pulls from algorithm_metrics in Trained Model
    - metric in business_metrics pulls from business_metrics in Trained Model
    - log in model_logs pulls from log_data in Trained Model
    - feedback in user_system_feedback pulls from user_system_feedback in Trained Model

    :param database: Database that will be used (pulled from the global app config)
    :param project_name: name of the project that contains the documents being validated
    :param production_environment_document: Production Environment document being evaluated for submission

    :return: A list containing error messages as strings
    """
    error_list = []

    db_trained_model_response = db_get_document(database, project_name, 'trained_model')

    if(db_trained_model_response):
        trained_model_document = db_trained_model_response

        production_environment_algorithm_metrics = [item['metric'] for item in production_environment_document['algorithm_metrics']]
        trained_model_algorithm_metrics = [item['metric'] for item in trained_model_document['algorithm_metrics']]
        
        for algorithm_metric in production_environment_algorithm_metrics:
            if(algorithm_metric not in trained_model_algorithm_metrics and algorithm_metric != ''):
                error_list.append('The Algorithm Metric: ' + algorithm_metric + ' is no longer available in Trained Model.')
        
        production_environment_business_metrics = [item['metric'] for item in production_environment_document['business_metrics']]
        trained_model_business_metrics = [item['metric'] for item in trained_model_document['business_metrics']]

        for business_metric in production_environment_business_metrics:
            if(business_metric not in trained_model_business_metrics and business_metric != ''):
                error_list.append('The Business Metric: ' + business_metric + ' is no longer available in Trained Model.')

        production_environment_model_logs = [item['log'] for item in production_environment_document['model_logs']]
        trained_model_log_data = [item['log'] for item in trained_model_document['log_data']]

        for model_log in production_environment_model_logs:
            if(model_log not in trained_model_log_data and model_log != ''):
                error_list.append('The Model Log: ' + model_log + ' is no longer available in Trained Model.')

        production_environment_user_system_feedback = [item['feedback'] for item in production_environment_document['user_system_feedback']]
        trained_model_user_system_feedback = [item['short_name'] for item in trained_model_document['user_system_feedback']]

        for feedback in production_environment_user_system_feedback:
            if(feedback not in trained_model_user_system_feedback and feedback != ''):
                error_list.append('The User System Feedback: ' + feedback + ' is no longer available in Trained Model.')

    # If there are no errors, check the database to see if the deployment platform or mechanism are new and need to be added
    if(error_list == []):
        deployment_platform_list = [production_environment_document['deployment_platform']]
        validate_deployment_platform_submission(database, deployment_platform_list)

        deployment_mechanism_list = [production_environment_document['deployment_mechanism']]
        validate_deployment_mechanism_submission(database, deployment_mechanism_list)

    return error_list


def validate_production_data(database, project_name, production_data_document):
    """
    Checks the database statistic list to see if any submitted properties need to be added

    :param database: Database that will be used (pulled from the global app config)
    :param project_name: name of the project that contains the documents being validated
    :param production_environment_document: Production Environment document being evaluated for submission

    :return: A list containing error messages as strings
    """
    error_list = []

    # If there are no errors, check the database to see if any of the statistics submitted are new and need to be added
    if(error_list == []):
        statistic_property_list = [statistic['property'] for statistic in production_data_document['statistics']]
        validate_statistic_submission(database, statistic_property_list)

    return error_list


"""
Collection of methods to check submissions in fields that are populated by database lists.
Each method will check its corresponding list, and if one of the submitted items is not currently in the
database, it will add it in to make that new entry available to future users.
"""
def validate_deployment_mechanism_submission(database, submitted_deployment_mechanism_list):
    """
    """
    db_deployment_mechanism_list = [entry['deployment_mechanism'] for entry in db_get_deployment_mechanisms(database)]

    for deployment_mechanism in submitted_deployment_mechanism_list:
        if(deployment_mechanism not in db_deployment_mechanism_list and deployment_mechanism != ''):
            db_add_deployment_mechanism(database, deployment_mechanism)


def validate_deployment_platform_submission(database, submitted_deployment_platform_list):
    """
    """
    db_deployment_platform_list = [entry['deployment_platform'] for entry in db_get_deployment_platforms(database)]

    for deployment_platform in submitted_deployment_platform_list:
        if(deployment_platform not in db_deployment_platform_list and deployment_platform != ''):
            db_add_deployment_platform(database, deployment_platform)


def validate_item_type_submission(database, submitted_item_type_list):
    """
    """
    db_item_type_list = [entry['item_type'] for entry in db_get_item_types(database)]

    for item_type in submitted_item_type_list:
        if(item_type not in db_item_type_list and item_type != ''):
            db_add_item_type(database, item_type)


def validate_ml_framework_submission(database, submitted_ml_framework_list):
    """
    """
    db_ml_framework_list = [entry['framework_name'] for entry in db_get_ml_frameworks(database)]

    for framework in submitted_ml_framework_list:
        if(framework not in db_ml_framework_list and framework != ''):
            db_add_ml_framework(database, framework)


def validate_programming_language_submission(database, submitted_programming_language_list):
    """
    """
    db_programming_language_list = [entry['language_name'] for entry in db_get_programming_languages(database)]

    for language in submitted_programming_language_list:
        if(language not in db_programming_language_list and language != ''):
            db_add_programming_language(database, language)


def validate_statistic_submission(database, submitted_property_list):
    """
    """
    db_statistic_list = [entry['statistic_name'] for entry in db_get_statistics(database)]

    for property in submitted_property_list:
        if(property not in db_statistic_list and property != ''):
            db_add_statistic(database, property)