# TEC - Automated Mismatch Detection Tool
# Copyright 2023 Carnegie Mellon University.
# NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.
# Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.
# [DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.
# This Software was created using the SEI Design System and includes and/or makes use of Third-Party Software subject to its own license.
# DM23-0003


def project_mismatches_and_missing_fields(project_json):
    """
    Main function for the file, it calls the function to detect mismatches and each of the missing fields functions then returns them combined in JSON

    :param project_json: JSON containing an entry for each descriptor and those contain each saved document for the project

    :return: JSON containing a list of mismatches and a list of missing fields
    """
    mismatches = all_document_mismatches(project_json)

    missing_fields = []
    missing_fields.extend(system_context_missing_fields(project_json['system_context']))
    missing_fields.extend(raw_data_missing_fields(project_json['raw_data']))
    missing_fields.extend(data_pipeline_missing_fields(project_json['data_pipeline']))
    missing_fields.extend(training_data_missing_fields(project_json['training_data']))
    missing_fields.extend(trained_model_missing_fields(project_json['trained_model']))
    missing_fields.extend(development_environment_missing_fields(project_json['development_environment']))
    missing_fields.extend(production_environment_missing_fields(project_json['production_environment']))
    missing_fields.extend(production_data_missing_fields(project_json['production_data']))

    return {'mismatches': mismatches, 'missing_fields': missing_fields}


def all_document_mismatches(project_json):
    """
    Checks the project for mismatches according to the mismatch rules

    :param project_json: JSON containing an entry for each descriptor and those contain each saved document for the project

    :return: JSON containing a list of mismatches
    """
    mismatches = []
    sc_doc = project_json['system_context']
    rd_doc = project_json['raw_data']
    dp_doc = project_json['data_pipeline']
    td_doc = project_json['training_data']
    tm_doc = project_json['trained_model']
    de_doc = project_json['development_environment']
    pe_doc = project_json['production_environment']
    pd_doc = project_json['production_data']

    # Rule 1
    if sc_doc:
        tm_doc_algorithm_metric_goal_mappings = [metric['goal_mapping'] for metric in tm_doc['algorithm_metrics']] if tm_doc else []
        tm_doc_business_metric_goal_mappings = [metric['goal_mapping'] for metric in tm_doc['business_metrics']] if tm_doc else []
        tm_doc_combined_goal_mappings = tm_doc_algorithm_metric_goal_mappings + tm_doc_business_metric_goal_mappings

        for goal in sc_doc['goals']:
            if goal['id'] not in tm_doc_combined_goal_mappings:
                mismatches.append(
                    {
                        'conditions': ['There is no mapping between  goal \'' + goal['id'] + ' ' + goal['goal'] + '\' defined in the System Context and a business or algorithm metric defined for the Trained Model.'],
                        'message': 'Not all goals defined for the trained model have a corresponding metric to determine if they are being met.',
                        'rationale': 'If there is not a business or algorithm metric(s) associated to the trained model to be calculated based on information collected when the model is in production, there is not a way to verify that goals defined for the model are being met.'
                    })

    # Rule 2
    if tm_doc:
        de_doc_programming_languages = de_doc['programming_languages'] if de_doc else []
        for component_language in sum([component['programming_languages'] for component in tm_doc['model_components']], []):
            if component_language not in de_doc_programming_languages:
                mismatches.append(
                    {
                        'conditions': ['The programming language \'' + component_language + '\', is used by the Trained Model but is not supported by the Development Environment.'],
                        'message': 'The development environment does not support at least one programming language used by the trained model.',
                        'rationale': 'If the development environment does not support the programming language(s) for the trained model, it might not be possible to integrate the model into the system, or it will have to be rewritten prior to integration which is both a time-consuming and error-prone activity.'
                    })

    # Rule 3A
    if tm_doc and de_doc and not tm_doc['post_processing']:
        rule_3a_conditions = []
        for output_spec in tm_doc['output_spec']:
            matched_data_item = None

            if output_spec['item_name'].strip() != '' and output_spec['item_type'] != '' and output_spec['component_mapping']['component'].strip() != '' and output_spec['component_mapping']['data_item'].strip() != '':
                if output_spec['component_mapping']['component'] in [component['component_name'] for component in de_doc['downstream_components']]:
                    matched_component = next((component for (index, component) in enumerate(de_doc['downstream_components']) if component['component_name'] == output_spec['component_mapping']['component']), None)
                    if matched_component != None and output_spec['component_mapping']['data_item'] in [input_spec['item_name'] for input_spec in matched_component['input_spec']]:
                        matched_data_item = next((item for (index, item) in enumerate(matched_component['input_spec']) if item['item_name'] == output_spec['component_mapping']['data_item']), None)
                        if matched_data_item != None and matched_data_item['item_type'] != '' and output_spec['item_type'] != matched_data_item['item_type']:
                            rule_3a_conditions.append('The output \'' + output_spec['item_name'] + '\' of type \'' + output_spec['item_type'] + '\' for the Trained Model does not match the input of the mapped downstream component \'' + matched_data_item['item_name'] + '\' of type \'' + matched_data_item['item_type'] + '\' in the Development Environment.')

        if rule_3a_conditions != []:
            mismatches.append(
                {
                    'conditions': rule_3a_conditions,
                    'message': 'There is at least one ML component output that does not match the corresponding input in the downstream component in the ML-enabled system.',
                    'rationale': 'If output from the ML component does not match the required input from downstream components in development and production, there will be a need to create a wrapper or transformation component to address the mismatch between APIs.'
                })

    # Rule 3B
    if tm_doc and not tm_doc['post_processing']:
        rule_3b_conditions = []
        for output_spec in tm_doc['output_spec']:
            if output_spec['item_name'].strip() != '' and (output_spec['component_mapping']['component'].strip() == '' or output_spec['component_mapping']['data_item'].strip() == ''):
                rule_3b_conditions.append('The output \'' + output_spec['item_name'] + '\' for the Trained Model does not map to any input of the mapped downstream component in the Development Environment.')

        if rule_3b_conditions != []:
            mismatches.append(
                {
                    'conditions': rule_3b_conditions,
                    'message': 'There is at least one ML component output that is not mapped to an input in the dowstream component in the ML-enabled system.',
                    'rationale': 'If the output from the ML component does not fully map to the downstream components in development and production, there will be a need to create a wrapper or transformation component to address the mismatch between APIs.'
                })
    
    # Rule 3C
    if de_doc and tm_doc and not tm_doc['post_processing']:
        rule_3c_conditions = []
        all_mappings = {}
        for output_spec in tm_doc['output_spec']:
            if output_spec['component_mapping']['component'] not in all_mappings:
                all_mappings[output_spec['component_mapping']['component']] = [output_spec['component_mapping']['data_item']]
            else:
                all_mappings[output_spec['component_mapping']['component']].append(output_spec['component_mapping']['data_item'])

        for downstream_component in de_doc['downstream_components']:
            for data_item in downstream_component['input_spec']:
                if (downstream_component['component_name'].strip() != '' and data_item['item_name'].strip() != '') and (downstream_component['component_name'] not in all_mappings or data_item['item_name'] not in all_mappings[downstream_component['component_name']]):
                    rule_3c_conditions.append('The input \'' + data_item['item_name'] + '\' for the downstream component in the Development Environment does not map to any outputs of the Trained Model.')
        
        if rule_3c_conditions != []:
            mismatches.append(
                {
                    'conditions': rule_3c_conditions,
                    'message': 'There is at least one input of the downstream component in the ML-enabled system that is not mapped to an output of the ML component.',
                    'rationale': 'If the input for downstream components in development and production does not fully map to the output from the ML component, there will be a need to create a wrapper or transformation component to address the mismatch between APIs.'
                })

    # Rule 3C/4C addition
    # This rule covers the case for 3C and 4C if there is a DE document, but no TM document. This is the rule that will add mismatches in that case instead of getting repeats with both 3C and 4C
    if de_doc and not tm_doc:
        rule_3c_4c_conditions = []
        for downstream_component in de_doc['downstream_components']:
            for data_item in downstream_component['input_spec']:
                if downstream_component['component_name'].strip() != '' and data_item['item_name'].strip() != '':
                    rule_3c_4c_conditions.append('The input \'' + data_item['item_name'] + '\' for the downstream component in the Development Environment does not map to any outputs of the Trained Model.')

        if rule_3c_4c_conditions != []:
            mismatches.append(
                {
                    'conditions': rule_3c_4c_conditions,
                    'message': 'There is at least one input of the downstream component in the ML-enabled system that is not mapped to an output of the ML component.',
                    'rationale': 'If the input for downstream components in development and production does not fully map to the output from the ML component, there will be a need to create a wrapper or transformation component to address the mismatch between APIs.'
                })

    # Rule 4A
    if tm_doc and tm_doc['post_processing'] and de_doc:
        rule_4a_conditions = []
        for final_output_spec in tm_doc['final_output_spec']:
            matched_data_item = None
            
            if final_output_spec['item_name'].strip() != '' and final_output_spec['component_mapping']['component'].strip() != '' and final_output_spec['component_mapping']['data_item'].strip() != '':
                if final_output_spec['component_mapping']['component'] in [component['component_name'] for component in de_doc['downstream_components']]:
                    matched_component = next((component for (index, component) in enumerate(de_doc['downstream_components']) if component['component_name'] == final_output_spec['component_mapping']['component']), None)
                    if matched_component != None and final_output_spec['component_mapping']['data_item'] in [input_spec['item_name'] for input_spec in matched_component['input_spec']]:
                        matched_data_item = next((item for (index, item) in enumerate(matched_component['input_spec']) if item['item_name'] == final_output_spec['component_mapping']['data_item']), None)
                        if matched_data_item != None and final_output_spec['item_type'] != matched_data_item['item_type']:
                            rule_4a_conditions.append('The final output \'' + final_output_spec['item_name'] + '\' of type \'' + final_output_spec['item_type'] + '\' for the Trained Model does not match the input of the mapped downstream component \'' + matched_data_item['item_name'] + '\' of type \'' + matched_data_item['item_type'] + '\' in the Development Environment.')

        if rule_4a_conditions != []:
            mismatches.append(
                {
                    'conditions': rule_4a_conditions,
                    'message': 'There is at least one ML component output that does not match the corresponding input in the downstream component in the ML-enabled system.',
                    'rationale': 'If output from the ML component does not match the required input from downstream components in development and production, there will be a need to create a wrapper or transformation component to address the mismatch between APIs.'
                })

    # Rule 4B
    if tm_doc and tm_doc['post_processing']:
        rule_4b_conditions = []
        for final_output_spec in tm_doc['final_output_spec']:
            if final_output_spec['item_name'].strip() != '' and final_output_spec['component_mapping']['component'].strip() == '' or final_output_spec['component_mapping']['data_item'].strip() == '':
                rule_4b_conditions.append('The final output \'' + final_output_spec['item_name'] + '\' for the Trained Model does not map to any input of the mapped downstream component in the Development Environment.')

        if rule_4b_conditions != []:
            mismatches.append(
                {
                    'conditions': rule_4b_conditions,
                    'message': 'There is at least one ML component output that is not mapped to an input in the dowstream component in the ML-enabled system.',
                    'rationale': 'If the output from the ML component does not fully map to the downstream components in development and production, there will be a need to create a wrapper or transformation component to address the mismatch between APIs.'
                })
                
    # Rule 4C
    if de_doc and tm_doc and tm_doc['post_processing']:
        rule_4c_conditions = []
        all_mappings = {}
        for final_output_spec in tm_doc['final_output_spec']:
            if final_output_spec['component_mapping']['component'] not in all_mappings:
                all_mappings[final_output_spec['component_mapping']['component']] = [final_output_spec['component_mapping']['data_item']]
            else:
                all_mappings[final_output_spec['component_mapping']['component']].append(final_output_spec['component_mapping']['data_item'])

        for downstream_component in de_doc['downstream_components']:
            for data_item in downstream_component['input_spec']:
                if (downstream_component['component_name'].strip() != '' and data_item['item_name'].strip() != '') and (downstream_component['component_name'] not in all_mappings or data_item['item_name'] not in all_mappings[downstream_component['component_name']]):
                    rule_4c_conditions.append('The input \'' + data_item['item_name'] + '\' for the downstream component in the Development Environment does not map to any outputs of the Trained Model.')

        if rule_4c_conditions != []:
            mismatches.append(
                {
                    'conditions': rule_4c_conditions,
                    'message': 'There is at least one input of the downstream component in the ML-enabled system that is not mapped to an output of the ML component.',
                    'rationale': 'If the input for downstream components in development and production does not fully map to the output from the ML component, there will be a need to create a wrapper or transformation component to address the mismatch between APIs.'
                })
    
    # Rule 5A
    if dp_doc:
        rule_5a_conditions = []
        for input_spec in dp_doc['input_spec']:
            matched_data_item = None

            if input_spec['item_name'].strip() != '' and input_spec['component_mapping']['component'].strip() != '' and input_spec['component_mapping']['data_item'].strip() != '':
                if de_doc and input_spec['component_mapping']['component'] in [component['component_name'] for component in de_doc['upstream_components']]:
                    matched_component = next((component for (index, component) in enumerate(de_doc['upstream_components']) if component['component_name'] == input_spec['component_mapping']['component']), None)
                    if matched_component != None and input_spec['component_mapping']['data_item'] in [output_spec['item_name'] for output_spec in matched_component['output_spec']]:
                        matched_data_item = next((item for (index, item) in enumerate(matched_component['output_spec']) if item['item_name'] == input_spec['component_mapping']['data_item']), None)
                        if matched_data_item != None and input_spec['item_type'].strip() != '' and input_spec['item_type'] != matched_data_item['item_type']:
                            rule_5a_conditions.append('The input \'' + input_spec['item_name'] + '\' of type \'' + input_spec['item_type'] + '\' for the Data Pipeline does not match the output of the mapped upstream component \'' + matched_data_item['item_name'] + '\' of type \'' + matched_data_item['item_type'] + '\' in the Development Environment.')
        
        if rule_5a_conditions != []:
            mismatches.append(
                {
                    'conditions': rule_5a_conditions,
                    'message': 'There is at least one ML component input that does not match the corresponding output in the upstream component in the ML-enabled system.',
                    'rationale': 'If input to the ML component does not match the specified output from upstream components in development and production, there will be a need to create a wrapper or transformation component to address the mismatch between APIs.'
                })
    
    # Rule 5B
    if dp_doc:
        rule_5b_conditions = []
        for input_spec in dp_doc['input_spec']:
            if input_spec['item_name'].strip() != '' and (input_spec['component_mapping']['component'].strip() == '' or input_spec['component_mapping']['data_item'].strip() == ''):
                rule_5b_conditions.append('The input \'' + input_spec['item_name'] + '\' for the Data Pipeline does not map to any output of the mapped upstream component in the Development Environment.')

        if rule_5b_conditions != []:
            mismatches.append(
                {
                    'conditions': rule_5b_conditions,
                    'message': 'There is at least one ML component input that is not mapped to an output in the upstream component in the ML-enabled system.',
                    'rationale': 'If the input to the ML component does not fully map to the upstream components in development and production, there will be a need to create a wrapper or transformation component to address the mismatch between APIs.',
                })
    
    # Rule 5C
    if de_doc:
        rule_5c_conditions = []
        all_mappings = {}
        if dp_doc:
            for input_spec in dp_doc['input_spec']:
                if input_spec['component_mapping']['component'] not in all_mappings:
                    all_mappings[input_spec['component_mapping']['component']] = [input_spec['component_mapping']['data_item']]
                else:
                    all_mappings[input_spec['component_mapping']['component']].append(input_spec['component_mapping']['data_item'])

        for upstream_component in de_doc['upstream_components']:
            for data_item in upstream_component['output_spec']:
                if (upstream_component['component_name'].strip() != '' and data_item['item_name'].strip() != '') and (upstream_component['component_name'] not in all_mappings or data_item['item_name'] not in all_mappings[upstream_component['component_name']]):
                    rule_5c_conditions.append('The output \'' + data_item['item_name'] + '\' of the upstream component in the Development Environment does not map to any inputs of the Data Pipeline.')
        
        if rule_5c_conditions != []:
            mismatches.append(
                {
                    'conditions': rule_5c_conditions,
                    'message': 'There is at least one output of the upsteam component in the ML-enabled system that is not mapped to an input of the ML component.',
                    'rationale': 'If the output for upstream components in development and production does not fully map to the input to the ML component, there will be a need to create a wrapper or transformation component to address the mismatch between APIs.'
                })

    # Rule 6
    if tm_doc:
        rule_6_conditions = []

        if not de_doc:
            rule_6_conditions.append('Trained Model execution requires ' + str(tm_doc['computing_resource_reqs']['gpu']) + ' GPUs but the amount of GPUs in the Development Environment has not been specified.')
        elif tm_doc['computing_resource_reqs']['gpu'] > de_doc['computing_resources']['gpu']:
            rule_6_conditions.append('Trained Model execution requires ' + str(tm_doc['computing_resource_reqs']['gpu']) + ' GPUs but there are only ' + str(de_doc['computing_resources']['gpu']) + ' GPUs in the Development Environment.')
        
        if not de_doc:
            rule_6_conditions.append('Trained Model execution requires ' + str(tm_doc['computing_resource_reqs']['cpu']) + ' CPUs but the amount of CPUs in the Development Environment has not been specified.')
        elif tm_doc['computing_resource_reqs']['cpu'] > de_doc['computing_resources']['cpu']:
            rule_6_conditions.append('Trained Model execution requires ' + str(tm_doc['computing_resource_reqs']['cpu']) + ' CPUs but there are only ' + str(de_doc['computing_resources']['cpu']) + ' CPUs in the Development Environment.')
        
        if not de_doc:
            rule_6_conditions.append('Trained Model execution requires ' + str(tm_doc['computing_resource_reqs']['memory']) + ' GB of memory but the amount of memory in the Development Environment has not been specified.')
        elif tm_doc['computing_resource_reqs']['memory'] > de_doc['computing_resources']['memory']:
            rule_6_conditions.append('Trained Model execution requires ' + str(tm_doc['computing_resource_reqs']['memory']) + ' GB of memory but there are only ' + str(de_doc['computing_resources']['memory']) + ' GB of memory in the Development Environment.')
        
        if not de_doc:
            rule_6_conditions.append('Trained Model execution requires ' + str(tm_doc['computing_resource_reqs']['storage']) + ' GB of storage but the amount of storage in the Development Environment has not been specified.')
        elif tm_doc['computing_resource_reqs']['storage'] > de_doc['computing_resources']['storage']:
            rule_6_conditions.append('Trained Model execution requires ' + str(tm_doc['computing_resource_reqs']['storage']) + ' GB of storage but there are only ' + str(de_doc['computing_resources']['storage']) + ' GB of storage in the Development Environment.')

        if rule_6_conditions != []:
            mismatches.append(
                {
                    'conditions': rule_6_conditions,
                    'message': 'Computing resources required for trained model inference are larger than the computing resources available in the development environment that will be used for trained model integration and testing.',
                    'rationale': 'If the trained model requires greater computing resources than what is available in the development environment it will not be possible to properly integrate and test the model, including potentially affecting inference time.'
                })
    
    # Rule 7
    if tm_doc:
        rule_7_conditions = []

        if not pe_doc:
            rule_7_conditions.append('Trained Model execution requires ' + str(tm_doc['computing_resource_reqs']['gpu']) + ' GPUs but the amount of GPUs in the Production Environment has not been specified.')
        elif tm_doc['computing_resource_reqs']['gpu'] > pe_doc['computing_resources']['gpu']:
                    rule_7_conditions.append('Trained Model execution requires ' + str(tm_doc['computing_resource_reqs']['gpu']) + ' GPUs but there are only ' + str(pe_doc['computing_resources']['gpu']) + ' GPUs in the Production Environment.')
        
        if not pe_doc:
                    rule_7_conditions.append('Trained Model execution requires ' + str(tm_doc['computing_resource_reqs']['cpu']) + ' CPUs but the amount of CPUs in the Production Environment has not been specified.')
        elif tm_doc['computing_resource_reqs']['cpu'] > pe_doc['computing_resources']['cpu']:
                    rule_7_conditions.append('Trained Model execution requires ' + str(tm_doc['computing_resource_reqs']['cpu']) + ' CPUs but there are only ' + str(pe_doc['computing_resources']['cpu']) + ' CPUs in the Production Environment.')
        
        if not pe_doc:
                    rule_7_conditions.append('Trained Model execution requires ' + str(tm_doc['computing_resource_reqs']['memory']) + ' GB of memory but the amount of memory in the Production Environment has not been specified.')
        elif tm_doc['computing_resource_reqs']['memory'] > pe_doc['computing_resources']['memory']:
                    rule_7_conditions.append('Trained Model execution requires ' + str(tm_doc['computing_resource_reqs']['memory']) + ' GB of memory but there are only ' + str(pe_doc['computing_resources']['memory']) + ' GB of memory in the Production Environment.')
        
        if not pe_doc:
                    rule_7_conditions.append('Trained Model execution requires ' + str(tm_doc['computing_resource_reqs']['storage']) + ' GB of storage but the amount of storage in the Production Environment has not been specified.')
        elif tm_doc['computing_resource_reqs']['storage'] > pe_doc['computing_resources']['storage']:
                    rule_7_conditions.append('Trained Model execution requires ' + str(tm_doc['computing_resource_reqs']['storage']) + ' GB of storage but there are only ' + str(pe_doc['computing_resources']['storage']) + ' GB of storage in the Production Environment.')
            
        if rule_7_conditions != []:
            mismatches.append(
                {
                    'conditions': rule_7_conditions,
                    'message': 'Computing resources required for trained model inference are larger than the computing resources available in the production environment.',
                    'rationale': 'If the trained model requires greater computing resources than what is available in the production environment it will not be possible to properly run the model with the potential of poor inference time.'
                })

    # Rule 8
    if tm_doc:
        rule_8_conditions = []
        de_doc_ml_frameworks = de_doc['ml_frameworks'] if de_doc else []
        for ml_framework in tm_doc['ml_frameworks']:
            if ml_framework not in de_doc_ml_frameworks:
                rule_8_conditions.append('The trained model requires the ML Framework, ' + ml_framework + ', which is not available in the Development Environment.')

        if rule_8_conditions != []:
            mismatches.append(
                {
                    'conditions': rule_8_conditions,
                    'message': 'One or more ML frameworks used for model development and training are not available in the development environment for testing and integration of the model into the ML-enabled system.',
                    'rationale': 'It might not be possible to perform testing and integration of the trained model into the ML-enabled system if not all ML frameworks used for model development and training are available in the development environment.'
                })
    
    # Rule 9
    if tm_doc:
        rule_9_conditions = []
        pe_doc_business_metrics = [item['metric'] for item in pe_doc['business_metrics'] if item['metric'].strip() != ''] if pe_doc else []
        for tm_metric in [item['metric'] for item in tm_doc['business_metrics'] if item['metric'].strip() != '']:
            if tm_metric not in pe_doc_business_metrics:
                rule_9_conditions.append('The business metric, \'' + tm_metric + '\', defined for the Trained Model does not have a mapped metric and collection method defined in the Production Environment.')

        if rule_9_conditions != []:
            mismatches.append(
                {
                    'conditions': rule_9_conditions,
                    'message': 'One or more business metrics defined for the trained model do not have a collection mechanism defined in the production environment.',
                    'rationale': 'If business metrics defined for the trained model do not have a collection mechanism defined in the production environment there is not a way to verify that business metrics defined for the model are being met. Business metrics are used for model troubleshooting and retraining, or problem reevaluation.'
                })

    # Rule 10
    if tm_doc:
        rule_10_conditions = []
        pe_doc_algorithm_metrics = [item['metric'] for item in pe_doc['algorithm_metrics'] if item['metric'].strip() != ''] if pe_doc else []
        for tm_metric in [item['metric'] for item in tm_doc['algorithm_metrics'] if item['metric'].strip() != '']:
            if tm_metric not in pe_doc_algorithm_metrics:
                rule_10_conditions.append('The algorithm metric, \'' + tm_metric + '\', defined for the Trained Model does not have a mapped metric and collection method defined in the Production Environment.')

        if rule_10_conditions != []:
            mismatches.append(
                {
                    'conditions': rule_10_conditions,
                    'message': 'One or more algorithm metrics defined for the trained model do not have a collection mechanism defined in the production environment.',
                    'rationale': 'If algorithm metrics defined for the trained model do not have a collection mechanism defined in the production environment there is not a way to determine if the model is functioning properly. Algorithm metrics are used to detect changes in prediction behavior and inform model troubleshooting and retraining.'
                })
    
    # Rule 11
    if tm_doc:
        rule_11_conditions = []
        pe_doc_model_logs = [item['log'] for item in pe_doc['model_logs'] if item['log'].strip() != ''] if pe_doc else []
        for tm_model_log in [item['log'] for item in tm_doc['log_data'] if item['log'].strip() != '']:
            if tm_model_log not in pe_doc_model_logs:
                rule_11_conditions.append('The log, \'' + tm_model_log + '\', defined in the Trained Model does not have a mapped log and implementation in the Production Environment.')

        if rule_11_conditions != []:    
            mismatches.append(
                {
                    'conditions': rule_11_conditions,
                    'message': 'Not all log data required by the trained model is being captured in the production environment.',
                    'rationale': 'If not all log data defined by the trained model is being captured there will not be sufficient information available for model troubleshooting or retraining.'
                })

    # Rule 12
    if tm_doc and pe_doc:
        tm_converted_inference_time = 0
        pe_converted_required_inference_time = 0

        if tm_doc['inference_time']['unit'] == 'Hours':
            tm_converted_inference_time = tm_doc['inference_time']['time'] * 60 * 60 * 1000
        elif tm_doc['inference_time']['unit'] == 'Minutes':
            tm_converted_inference_time = tm_doc['inference_time']['time'] * 60 * 1000
        elif tm_doc['inference_time']['unit'] == 'Seconds':
            tm_converted_inference_time = tm_doc['inference_time']['time'] * 1000
        else:
            tm_converted_inference_time = tm_doc['inference_time']['time']

        if pe_doc['required_inference_time']['unit'] == 'Hours':
            pe_converted_required_inference_time = pe_doc['required_inference_time']['time'] * 60 * 60 * 1000
        elif pe_doc['required_inference_time']['unit'] == 'Minutes':
            pe_converted_required_inference_time = pe_doc['required_inference_time']['time'] * 60 * 1000
        elif pe_doc['required_inference_time']['unit'] == 'Seconds':
            pe_converted_required_inference_time = pe_doc['required_inference_time']['time'] * 1000
        else:
            pe_converted_required_inference_time = pe_doc['required_inference_time']['time']

        if tm_converted_inference_time > pe_converted_required_inference_time:
            mismatches.append(
                {
                    'conditions': ['The observed inference time of ' + str(tm_doc['inference_time']['time']) + ' ' + tm_doc['inference_time']['unit'] + ' defined for the Trained Model is higher than the required inference time of ' + str(pe_doc['required_inference_time']['time']) + ' ' + pe_doc['required_inference_time']['unit'] + ' defined in the Production Environment.'],
                    'message': 'Observed inference time for the trained model (based on computing resource requirements) is higher than the inference time required by the production system.',
                    'rationale': 'The production system will not be able to meet its performance/throughput goals if observed model inference time is greater than what is required by the production system.'
                })
    
    # Rule 13
    if tm_doc:
        rule_13_conditions = []
        pe_doc_user_system_feedback = [item['feedback'] for item in pe_doc['user_system_feedback'] if item['feedback'].strip() != '']  if pe_doc else []
        for tm_user_system_feedback in [item['short_name'] for item in tm_doc['user_system_feedback'] if item['short_name'].strip() != '']:
            if tm_user_system_feedback not in pe_doc_user_system_feedback:
                rule_13_conditions.append('The user or system feedback \'' + tm_user_system_feedback + '\', required by the Trained Model does not have a mapped feedback and implementation in the Production Environment.')

        if rule_13_conditions != []:
            mismatches.append(
                {
                    'conditions': rule_13_conditions,
                    'message': 'Not all user or system feedback required by the trained model is being captured in the production environment.',
                    'rationale': 'If not all user or system feedback defined by the trained model is being captured there will not be sufficient information available for model troubleshooting or retraining.'
                })

    # Rule 14A
    if td_doc and pd_doc:
        rule_14a_conditions = []
        for td_schema in td_doc['schema']:
            if td_schema['field_name'].strip() != '' and td_schema['label_field'] == False and td_schema['mapping_production_data'].strip() != '':
                matched_schema_index = next((index for (index, pd_schema) in enumerate(pd_doc['schema']) if pd_schema['field_name'] == td_schema['mapping_production_data']), None)
                if matched_schema_index != None and td_schema['field_type'] != pd_doc['schema'][matched_schema_index]['field_type']:
                    rule_14a_conditions.append('The field \'' + td_schema['field_name'] + '\' of type \'' + td_schema['field_type'] + '\' in the Training Data does not match the data type of its corresponding field \'' + pd_doc['schema'][matched_schema_index]['field_name'] + '\' of type \'' + pd_doc['schema'][matched_schema_index]['field_type'] + '\' in the Production Data.')

        if rule_14a_conditions != []:
            mismatches.append(
                {
                    'conditions': rule_14a_conditions,
                    'message': 'Not all data types for non-label fields in the training data match the data types for their corresponding fields in the production data.',
                    'rationale': 'If the data types of corresponding fields in the training data and the production data do not match, the trained model could fail when deployed in production. An alignment of data types needs to happen, or the responsibility of performing transformations between data types needs to be assigned to a component in the ML-enabled system before the data is passed to the ML component.'
                })

    # Rule 14B
    if td_doc:
        rule_14b_conditions = []
        for td_schema in td_doc['schema']:
            if td_schema['field_name'].strip() != '' and td_schema['label_field'] == False and td_schema['mapping_production_data'] == '':
                rule_14b_conditions.append('The field \'' + td_schema['field_name'] + '\' in the Training Data does not map to any field in the Production Data.')

        if rule_14b_conditions != []:
            mismatches.append(
                {
                    'conditions': rule_14b_conditions,
                    'message': 'Not all non-label fields in the training data are mapped to fields in the producton data.',
                    'rationale': 'If non-label fields in the training data are not mapped to production data, the trained model could fail when deployed in production. An alignment of data fields, or the responsibility of data augmentation or transformation needs to be assigned to a component in the ML-enabled system before the data is passed to the ML component.'
                })
    
    # Rule 14C
    if pd_doc:
        rule_14c_conditions = []
        all_mappings = []
        if td_doc:
            all_mappings = [schema['mapping_production_data'] for schema in td_doc['schema']]

        for schema in pd_doc['schema']:
            if schema['field_name'] not in all_mappings:
                rule_14c_conditions.append('The field \'' + schema['field_name'] + '\' in the Production Data does not map to any field in the Training Data.')

        if rule_14c_conditions != []:
            mismatches.append(
                {
                    'conditions': rule_14c_conditions,
                    'message': 'Not all fields in the production data are mapped to fields in the training data.',
                    'rationale': 'If fields in the production data are not mapped to training data, the trained model could fail when deployed in production. An alignment of data fields, or the responsibility of data augmentation or transformation needs to be assigned to a component in the ML-enabled system before the data is passed to the ML component.'
                })



    # Rule 15
    if td_doc and pd_doc:
        rule_15_conditions = []
        for td_statistic in td_doc['statistics']:
            matched_pd_statistic = next((pd_statistic for (index, pd_statistic) in enumerate(pd_doc['statistics']) if pd_statistic['property'] == td_statistic['property']), None)
            if matched_pd_statistic:
                matched_td_schema = next((td_schema for (index, td_schema) in enumerate(td_doc['schema']) if td_schema['field_name'] == td_statistic['field']), None)
                if matched_td_schema and matched_td_schema['mapping_production_data'] == matched_pd_statistic['field'] and td_statistic['value'] != matched_pd_statistic['value']:
                    rule_15_conditions.append('The property \'' + td_statistic['property'] + '\' associated to field \'' + td_statistic['field'] + '\' with value \'' + str(td_statistic['value']) +'\' in the Training Data does not match the mapped property \'' + matched_pd_statistic['property'] + '\' associated to field \'' + matched_pd_statistic['field'] + '\' with value \'' + str(matched_pd_statistic['value']) + '\' in the Production Data.')

        if rule_15_conditions != []:
            mismatches.append(
                {
                    'conditions': rule_15_conditions,
                    'message': 'All statistics for training data do not match statistics for production data.',
                    'rationale': 'The training data might not be representative of the production data if their statistics do not match.'
                })
                    
    # Rule 16
    if td_doc and pd_doc:
        rule_16_conditions = []
        for td_distribution in td_doc['distribution']:
            matched_pd_distribution = next((pd_distribution for (index, pd_distribution) in enumerate(pd_doc['distribution']) if pd_distribution['label'] == td_distribution['mapping_production_data']), None)
            if matched_pd_distribution and td_distribution['mapping_production_data'].strip() != '' and td_distribution['percentage'] != matched_pd_distribution['percentage']:
                rule_16_conditions.append('The distribution of the field label \'' + td_distribution['label'] + '\' of ' + str(td_distribution['percentage']) + '% in the Training Data does not match the distribution of its mapped label \'' + matched_pd_distribution['label'] + '\' of ' + str(matched_pd_distribution['percentage']) + '% in the Production Data.')
        
        if rule_16_conditions != []:
            mismatches.append(
                {
                    'conditions': rule_16_conditions,
                    'message': 'The distribution for one or more labels in the training data does not match the distribution of the production data.',
                    'rationale': 'The training data might not be representative of the production data if their distributions do not match.'
                })

    return mismatches


def system_context_missing_fields(system_context_json):
    """
    Checks a System Context document for missing required fields according to the rules

    :param system_context_json: JSON of a System Context document

    :return: List of missing required fields
    """
    missing_fields = []

    if(not system_context_json or system_context_json['task'].strip() == ''):
        missing_fields.append(
            {
                'descriptor': 'System Context',
                'field': 'Task', 
                'rationale': 'Model developers are often given no model requirements or given data  without further information. If model developers do not have a good understanding of the task that the model is expected to perform, or the problem that the model is expected to solve, they will likely develop a model that does not meet stakeholder or system requirements.'
            })
    
    if(not system_context_json
        or system_context_json['ml_problem_type']['ml_problem'].strip() == ''
        or (system_context_json['ml_problem_type']['ml_problem'] == 'Other' and system_context_json['ml_problem_type']['other_problem'].strip() == '')
    ):
        missing_fields.append(
            {
                'descriptor': 'System Context',
                'field': 'ML Problem Type', 
                'rationale': 'Having the type of ML problem that the model is intended to solve explcitly stated constitutes a common underdtanding between model developers and system owners.'
            })
    
    if(not system_context_json or any(item['goal'].strip() == '' for item in system_context_json['goals'])):
        missing_fields.append(
            {
                'descriptor': 'System Context',
                'field': 'Goals', 
                'rationale': 'Understanding the goals or objectives that the model is going to help satisfy is important for model development and evaluation, but also for establishing metrics to be collected once the model is deployed to understand if it meeting its goals and objectives.'
            })

    if(not system_context_json or system_context_json['available_data'].strip() == ''):
        missing_fields.append(
            {
                'descriptor': 'System Context',
                'field': 'Available Data', 
                'rationale': 'Knowing what data is already available to solve the problems helps model developers better understand the suitability of the data, whether additional data collection is needed, and what algorithms may be appropriate.'
            })
    
    if(not system_context_json or system_context_json['usage_context'].strip() == ''):
        missing_fields.append(
            {
                'descriptor': 'System Context',
                'field': 'Usage Context', 
                'rationale': 'Understanding how the results of the model are going to be used by end users or in the context of a larger system are useful for determining the syntax and semantics of model outputs.'
            })
    
    if(not system_context_json or system_context_json['data_rights_policies'].strip() == ''):
        missing_fields.append(
            {
                'descriptor': 'System Context',
                'field': 'Data Rights and Policies', 
                'rationale': 'Having knowledge of data rights, legal, privacy, and other policies that need to be met by model and data is important in defining where and how data can be stored, where model training can be performed (e.g., local vs. cloud), and what models can be used.'
            })

    if(not system_context_json or system_context_json['risks']['risk_fp'].strip() == ''):
        missing_fields.append(
            {
                'descriptor': 'System Context',
                'field': 'Risk False Positive', 
                'rationale': 'Understanding the risk of the model producing a false positive helps  model developers architect the model, and establish evaluation criteria and realistic expectations about model capabilities based on the consequences.'
            })

    if(not system_context_json or system_context_json['risks']['risk_fn'].strip() == ''):
        missing_fields.append(
            {
                'descriptor': 'System Context',
                'field': 'Risk False Negative', 
                'rationale': 'Understanding the risk of the model producing a false negative helps  model developers architect the model, and establish evaluation criteria and realistic expectations about model capabilities based on the consequences.'
            })

    return missing_fields


def raw_data_missing_fields(raw_data_json):
    """
    Checks a Raw Data document for missing required fields according to the rules

    :param raw_data_json: JSON of a Raw Data document

    :return: List of missing required fields
    """
    missing_fields = []

    if(not raw_data_json or raw_data_json['dataset_identifier'].strip() == ''):
        missing_fields.append(
            {
                'descriptor': 'Raw Data',
                'field': 'Dataset Identifier', 
                'rationale': 'A unique identifier is important for traceability and troubleshooting.'
            })

    if(not raw_data_json or raw_data_json['dataset_version'].strip() == ''):
        missing_fields.append(
            {
                'descriptor': 'Raw Data',
                'field': 'Dataset Version', 
                'rationale': 'Knowing what version of raw data was used to extract training data is  important for traceability and troubleshooting.'
            })

    if(not raw_data_json or raw_data_json['dataset_name'].strip != ''):
        missing_fields.append(
            {
                'descriptor': 'Raw Data',
                'field': 'Dataset Name', 
                'rationale': 'Providing a name for the dataset is important for traceability and troubleshooting.'
            })

    if(not raw_data_json or raw_data_json['dataset_description'].strip != ''):
        missing_fields.append(
            {
                'descriptor': 'Raw Data',
                'field': 'Dataset Description', 
                'rationale': 'A description of the raw data is useful for model developers to get a general understanding of the data and identify potential for reuse across projects.'
            })

    if(not raw_data_json
        or all(
            [(source['data_source'] != 'Other' and source['data_source'].strip() == '')
            or (source['data_source'] == 'Other' and source['other_source'].strip() == '')
            for source in raw_data_json['data_sources']]
        )
    ):
            
        missing_fields.append(
            {
                'descriptor': 'Raw Data',
                'field': 'Data sources', 
                'rationale': 'Having knowledge of where the raw data comes from, such as enterprise, public, simulated, or synthetic, is important for model developers in understanding how close the data is to operational data and therefore guide decisions about data pipeline and model development.'
            })

    if(not raw_data_json or raw_data_json['instance_type'].strip() == ''):
        missing_fields.append(
            {
                'descriptor': 'Raw Data',
                'field': 'Instance Type', 
                'rationale': 'An understanding of the types each instance included in the dataset (e.g., image, temperature reading, customer record) is important for model developers to make development decisions as well as software engineers implementing upstream and downstream components from the model in production.'
            })
    
    if(not raw_data_json or raw_data_json['number_of_instances'] == 0):
        missing_fields.append(
            {
                'descriptor': 'Raw Data',
                'field': 'Number of Instances', 
                'rationale': 'Having knowledge of the number of instances in the dataset is important for model developers and evaluators/testers to determine adequacy of data for training.'
            })
    
    if(not raw_data_json or any([distribution['label'].strip() == '' for distribution in raw_data_json['labels_distribution']])):
        missing_fields.append(
            {
                'descriptor': 'Raw Data',
                'field': 'Labels Distribution.Label', 
                'rationale': 'Label name is necessary for data understanding and mapping to production data.'
            })
    
    if(not raw_data_json or any([distribution['percentage'] == 0 for distribution in raw_data_json['labels_distribution']])):
        missing_fields.append(
            {
                'descriptor': 'Raw Data',
                'field': 'Labels Distribution.Percentage', 
                'rationale': 'Label percentage is necessary for data understanding and mapping to production data.'
            })
    
    if(not raw_data_json 
        or all([schema['field_name'].strip() == '' and schema['field_description'].strip() == ''
        and schema['field_type'].strip() == '' and schema['expected_values'].strip() == ''
        and schema['interpret_missing'].strip() == '' and schema['interpret_special'].strip() == '' 
        for schema in raw_data_json['schema']])
    ):

        missing_fields.append(
            {
                'descriptor': 'Raw Data',
                'field': 'Schema', 
                'rationale': 'A description of data elements within each data instance, including field names, description, values, and meaning of missing values, is necessary to understand the data and make informed model development decisions.'
            })
    else:
        if(any(schema['field_name'].strip() == '' for schema in raw_data_json['schema'])):
            missing_fields.append(
            {
                'descriptor': 'Raw Data',
                'field': 'Schema.Field Name', 
                'rationale': 'Understanding  if there are special values in the data that must be interpreted in a specific manner is important information for building the data pipeline.'
            })

        if(any(schema['field_description'].strip() == '' for schema in raw_data_json['schema'])):
            missing_fields.append(
            {
                'descriptor': 'Raw Data',
                'field': 'Schema.Field Description', 
                'rationale': 'Field description is important information for building the data pipeline.'
            })

        if(any(schema['field_type'].strip() == '' for schema in raw_data_json['schema'])):
            missing_fields.append(
            {
                'descriptor': 'Raw Data',
                'field': 'Schema.Field Type', 
                'rationale': 'Field type is important information for building the data pipeline.'
            })

        if(any(schema['expected_values'].strip() == '' for schema in raw_data_json['schema'])):
            missing_fields.append(
            {
                'descriptor': 'Raw Data',
                'field': 'Schema.Expected Values', 
                'rationale': 'Understanding of expected values for a field is important information for building the data pipeline and determining errors in raw data.'
            })

        if(any(schema['interpret_missing'].strip() == '' for schema in raw_data_json['schema'])):
            missing_fields.append(
            {
                'descriptor': 'Raw Data',
                'field': 'Schema.Interpret Missing', 
                'rationale': 'Understanding  how to interpret missing values for a field is important information for building the data pipeline and potential data augmentation and normalization.'
            })

        if(any(schema['interpret_special'].strip() == '' for schema in raw_data_json['schema'])):
            missing_fields.append(
            {
                'descriptor': 'Raw Data',
                'field': 'Schema.Special Values', 
                'rationale': 'Understanding  if there are special values in the data that must be interpreted in a specific manner is important information for building the data pipeline.'
            })

    if(not raw_data_json or raw_data_json['metadata']['collection_date'].strip() == ''):
        missing_fields.append(
            {
                'descriptor': 'Raw Data',
                'field': 'Metadata.Collection Date', 
                'rationale': 'Metadata about raw data, such as when it was collected, where it was collected, and any known issues, is useful for model developers to better understand adequacy of raw data and make informed decisions during data pipeline and model development.'
            })
    
    return missing_fields


def data_pipeline_missing_fields(data_pipeline_json):
    """
    Checks a Data Pipeline document for missing required fields according to the rules

    :param data_pipeline_json: JSON of a Data Pipeline document

    :return: List of missing required fields
    """
    missing_fields = []

    if(not data_pipeline_json or data_pipeline_json['pipeline_version'].strip() == ''):
        missing_fields.append(
            {
                'descriptor': 'Data Pipeline',
                'field': 'Pipeline Version', 
                'rationale': 'Knowing what version of the data pipline if being used for data processing s important for traceability and troubleshooting.'
            })    

    if(not data_pipeline_json or data_pipeline_json['pipeline_description'].strip() == ''):
        missing_fields.append(
            {
                'descriptor': 'Data Pipeline',
                'field': 'Pipeline Description', 
                'rationale': 'A description of the data pipeline is useful for model developers to get a general understanding of how data is transformed before it reaches the model and identify potential for reuse across projects. '
            })    
    
    if(not data_pipeline_json 
        or all(
            spec['item_name'].strip() == '' and spec['item_description'].strip() == ''
            and spec['item_type'].strip() == ''
            # expected_values removed, do we want a check like this?
            # and item_spec_missing_fields(trained_model_json['final_output_spec'])
            and spec['component_mapping']['component'].strip() == ''
            and spec['component_mapping']['data_item'].strip() == ''
            for spec in data_pipeline_json['input_spec']
        )
    ):
        missing_fields.append(
            {
                'descriptor': 'Data Pipeline',
                'field': 'Input Specification', 
                'rationale': 'Having a specification for input coming from upstream component into the data pipeline will contribute to developing an ML component that can be easily integrated into the ML system.'
            })   
    else:
        if(any(spec['item_name'].strip() == '' for spec in data_pipeline_json['input_spec'])):
            missing_fields.append(
            {
                'descriptor': 'Data Pipeline',
                'field': 'Input Specification.Item Name', 
                'rationale': 'Field name, if meaningful, provides a high level understanding of the input coming from the upstream component.'
            })

        if(any(spec['item_description'].strip() == '' for spec in data_pipeline_json['input_spec'])):
            missing_fields.append(
            {
                'descriptor': 'Data Pipeline',
                'field': 'Input Specification.Item Description', 
                'rationale': 'Field description is important information for building the data pipeline.'
            })

        if(any(spec['item_type'].strip() == '' for spec in data_pipeline_json['input_spec'])):
            missing_fields.append(
            {
                'descriptor': 'Data Pipeline',
                'field': 'Input Specification.Item Type', 
                'rationale': 'Field type is important information for building the data pipeline.'
            })

        if(item_spec_missing_fields(data_pipeline_json['input_spec'])):
            missing_fields.append(
            {
                'descriptor': 'Data Pipeline',
                'field': 'Input Specification.Item Specification', 
                'rationale': 'Understanding of expected values for a field is important information for building the data pipeline and determining errors in input data.'
            })
        
        if(any(spec['component_mapping']['component'].strip() == '' and spec['component_mapping']['data_item'].strip() == '' for spec in data_pipeline_json['input_spec'])):
            missing_fields.append(
            {
                'descriptor': 'Data Pipeline',
                'field': 'Input Specification.Component Mapping', 
                'rationale': 'Having a mapping to the upstream component in the production system ensures that inputs will match once deployed.'
            })
    
    if(not data_pipeline_json
        or all(step['data_processing_step'].strip() == '' and step['data_processing_detail'].strip() == '' for step in data_pipeline_json['pipeline_steps'])
    ):
        missing_fields.append(
            {
                'descriptor': 'Data Pipeline',
                'field': 'Pipeline Steps', 
                'rationale': 'An understanding of the data pipeline processing steps can be used for troubleshooting, and can also be used as requirements if the data pipeline needs to be ported or redeveloped to fit in the system development and production environments. '
            })    
    
    if(not data_pipeline_json or data_pipeline_json['pipeline_code'].strip() == ''):
        missing_fields.append(
            {
                'descriptor': 'Data Pipeline',
                'field': 'Pipeline Code', 
                'rationale': 'Access to pipeline code is necessary as this code is reused in both the development and production environments as part of the ML component. '
            })    

    return missing_fields


def training_data_missing_fields(training_data_json):
    """
    Checks a Training Data document for missing required fields according to the rules

    :param training_data_json: JSON of a Training Data document

    :return: List of missing required fields
    """
    missing_fields = []

    if( not training_data_json or training_data_json['dataset_version'].strip() == ''):
        missing_fields.append(
        {
            'descriptor': 'Training Data',
            'field': 'Dataset Version',
            'rationale': 'Knowing what version of the training data is used for model training is important for traceability and troubleshooting.'
        })

    if( not training_data_json or training_data_json['dataset_name'].strip() == ''):
        missing_fields.append(
        {
            'descriptor': 'Training Data',
            'field': 'Dataset Name',
            'rationale': 'Providing a meaningful name for the training dataset is important for traceability and troubleshooting.'
        })

    if(not training_data_json or training_data_json['dataset_description'].strip() == ''):
        missing_fields.append(
            {
                'descriptor': 'Training Data',
                'field': 'Dataset Description', 
                'rationale': 'A description of the training data is useful for model developers to get a general understanding of the data and identify potential for reuse across projects.'
            })

    if(not training_data_json
        or all(
            schema['field_name'].strip() == '' 
            and schema['field_description'].strip() == ''
            and schema['field_type'].strip() == ''
            and schema['expected_values'].strip() == ''
            and schema['missing_values'].strip() == ''
            and schema['mapping_production_data'].strip() == ''
            for schema in training_data_json['schema']
        )
    ):
        missing_fields.append({
                'descriptor': 'Training Data',
                'field': 'Schema', 
                'rationale': 'A schema that defines data elements (rows) within each data instance of the training data, including field (column) names, description, values, and meaning of missing values, is crucial for the model development process as it contributes to development decisions as well as easier integration into the ML system.'
            })
    else:
        if(any(schema['field_name'].strip() == '' for schema in training_data_json['schema'])):
            missing_fields.append(
            {
                'descriptor': 'Training Data',
                'field': 'Schema.Field Name', 
                'rationale': 'Field name, if meaningful, provides a high level understanding of the input coming from the upstream component.'
            })

        if(any(schema['field_description'].strip() == '' for schema in training_data_json['schema'])):
            missing_fields.append(
            {
                'descriptor': 'Training Data',
                'field': 'Schema.Field Description', 
                'rationale': 'Field description is important information for model training and troubleshooting.'
            })

        if(any(schema['field_type'].strip() == '' for schema in training_data_json['schema'])):
            missing_fields.append(
            {
                'descriptor': 'Training Data',
                'field': 'Schema.Field Type', 
                'rationale': 'Field type is important information for model training and troubleshooting.'
            })

        if(any(schema['expected_values'].strip() == '' for schema in training_data_json['schema'])):
            missing_fields.append(
            {
                'descriptor': 'Training Data',
                'field': 'Schema.Expected Values', 
                'rationale': 'Understanding of expected values for a field is important information for error handling, especially when the model is in production.'
            })

        if(any(schema['missing_values'].strip() == '' for schema in training_data_json['schema'])):
            missing_fields.append(
            {
                'descriptor': 'Training Data',
                'field': 'Schema.Missing Values', 
                'rationale': 'Understanding of how to interpret missing or null values for a field is important information for error handling, especially when the model is in production.'
            })

        if(any(schema['mapping_production_data'].strip() == '' for schema in training_data_json['schema'])):
            missing_fields.append(
            {
                'descriptor': 'Training Data',
                'field': 'Schema.Mapping Production Data', 
                'rationale': 'Having a mapping to the production data ensures that they will match once deployed.'
            })
        

    if(not training_data_json 
        or all(prep['data_processing_step'].strip() == '' and prep['data_processing_detail'].strip() == '' for prep in training_data_json['preparation_process'])
    ):
        missing_fields.append(
            {
                'descriptor': 'Training Data',
                'field': 'Data Preparation Process', 
                'rationale': 'A description of the data preparation process that transforms raw data into training data can be used for troubleshooting, and can also be used as requirements if the data preparation code needs to be ported to a different language.'
            })

    if(not training_data_json or training_data_json['preparation_code'].strip() == ''):
        missing_fields.append(
            {
                'descriptor': 'Training Data',
                'field': 'Data Preparation Code', 
                'rationale': 'Access to pipeline code is necessary as it is required any time that the model needs to be retrained.'
            })    

    return missing_fields


def trained_model_missing_fields(trained_model_json):
    """
    Checks a Trained Model document for missing required fields according to the rules

    :param trained_model_json: JSON of a Trained Model document

    :return: List of missing required fields
    """
    missing_fields = []

    if(not trained_model_json or trained_model_json['model_version'].strip() == ''):
        missing_fields.append(
            {
                'descriptor': 'Trained Model',
                'field': 'Model Version', 
                'rationale': 'Knowing what version of the trained model is being developed and deployed is important for traceability and troubleshooting.'
            })

    if(not trained_model_json or trained_model_json['model_name'].strip() == ''):
        missing_fields.append(
            {
                'descriptor': 'Trained Model',
                'field': 'Model Name', 
                'rationale': 'Providing a meaningful name for the trained model  is important for traceability and troubleshooting.'
            })

    if(not trained_model_json or trained_model_json['model_description'].strip() == ''):
        missing_fields.append(
            {
                'descriptor': 'Trained Model',
                'field': 'Model Description', 
                'rationale': 'A description of the training model is useful for model developers to get a general understanding of the trained model and identify potential for reuse across projects. It is also useful for model evaluators and software engineers for evaluation, troubleshooting and integration.'
            })
    
    if(not trained_model_json or trained_model_json['training_date'].strip() == ''):
        missing_fields.append(
            {
                'descriptor': 'Trained Model',
                'field': 'Training Date', 
                'rationale': 'Training Date is useful for determining model validity, retraining cadence, and latest trained model.'
            })

    model_component_missing = True
    if(trained_model_json):
        for component in trained_model_json['model_components']:
            learning_algorithm_missing = component['learning_algorithm']['algorithm'].strip() == '' or (component['learning_algorithm']['algorithm'] == 'Other' and component['learning_algorithm']['other_algorithm'].strip() == '')
            hyper_parameters_missing = all(param['parameter_name'].strip() == '' and param['parameter_value'].strip() == '' for param in component['hyper_parameters'])
            programming_languages_missing = component['programming_languages'] == []

            if(not learning_algorithm_missing or not hyper_parameters_missing or not programming_languages_missing):
                model_component_missing = False  

    if(model_component_missing):
        missing_fields.append(
            {
                'descriptor': 'Trained Model',
                'field': 'Model Components', 
                'rationale': 'An understanding of the details of model components can be used for troubleshooting, and can also be used as requirements if the trained model needs to be ported or redeveloped to fit in the system development and production environments.'
            })
    else:
        if(learning_algorithm_missing):
            missing_fields.append(
                {
                    'descriptor': 'Trained Model',
                    'field': 'Model Components.Learning Algorithm', 
                    'rationale': 'Knowledge of the algorithm implemented by the model is important for troubleshooting, and especially if the trained model needs to be ported or redeveloped.'
                })
        
        if(programming_languages_missing):
            missing_fields.append(
                {
                    'descriptor': 'Trained Model',
                    'field': 'Model Components.Programming Languages', 
                    'rationale': 'Knowledge of the programming languages used to implement the model is important for troubleshooting, and especially if the trained model needs to be ported or redeveloped.'
                })

    if(not trained_model_json or 
        (
            trained_model_json['ensemble'] == True 
            and trained_model_json['model_composition_details'].strip() == ''
        )
    ):
        missing_fields.append(
            {
                'descriptor': 'Trained Model',
                'field': 'Model Composition Details', 
                'rationale': 'If the model is an ensemble, an understanding of how the model components are composed can be used for troubleshooting, and can also be used as requirements if the trained model needs to be ported or redeveloped to fit in the system development and production environments.'
            })

    if(not trained_model_json or trained_model_json['ml_frameworks'] == []):
        missing_fields.append(
            {
                'descriptor': 'Trained Model',
                'field': 'ML Frameworks',
                'rationale': 'Knowledge of the ML frameworks used for model development and training is important for ML component integration as these will have to be available in the development environment, or the model will have to be ported if they are not.'
            })

    if(not trained_model_json 
        or (
            trained_model_json['post_processing'] == False 
            and all(
                spec['item_name'].strip() == ''
                and spec['item_description'].strip() == ''
                and spec['item_type'].strip() == ''
                # expected_values removed, do we want a check like this?
                # and item_spec_missing_fields(trained_model_json['final_output_spec'])
                and spec['component_mapping']['component'].strip() == ''
                and spec['component_mapping']['data_item'].strip() == '' 
                for spec in trained_model_json['output_spec']
            )
        )
    ):
        missing_fields.append(
            {
                'descriptor': 'Trained Model',
                'field': 'Output Specification', 
                'rationale': 'Having a specification for output going from the trained model to the downstream component in the ML system will contribute to developing an ML component that can be easily integrated into the ML system.'
            })

    elif trained_model_json['post_processing'] == False:
        if(any(spec['item_name'].strip() == '' for spec in trained_model_json['output_spec'])):
            missing_fields.append(
                {
                    'descriptor': 'Trained Model',
                    'field': 'Output Specification.Item Name', 
                    'rationale': 'Field name, if meaningful, provides a high level understanding of the output going to the downstream component.'
                })

        if(any(spec['item_description'].strip() == '' for spec in trained_model_json['output_spec'])):
            missing_fields.append(
                {
                    'descriptor': 'Trained Model',
                    'field': 'Output Specification.Item Description', 
                    'rationale': 'Field description is important information for integrating the trained model into the ML system.'
                })

        if(any(spec['item_type'].strip() == '' for spec in trained_model_json['output_spec'])):
            missing_fields.append(
                {
                    'descriptor': 'Trained Model',
                    'field': 'Output Specification.Item Type', 
                    'rationale': 'Field type is important information for integrating the trained model into the ML system.'
                }) 

        if(item_spec_missing_fields(trained_model_json['output_spec'])):
            missing_fields.append(
                {
                    'descriptor': 'Trained Model',
                    'field': 'Output Specification.Item Specification', 
                    'rationale': 'Understanding of expected values for a field is important information for integrated the trained model into the ML system and determining errors in model output data.'
                })

        if(any(spec['component_mapping']['component'].strip() == '' for spec in trained_model_json['output_spec'])):
            missing_fields.append(
                {
                    'descriptor': 'Trained Model',
                    'field': 'Output Specification.Component Mapping.Component', 
                    'rationale': 'The name of the mapped downstream component in the production system is important for trained model integration.'
                })
        
        if(any(spec['component_mapping']['data_item'].strip() == '' for spec in trained_model_json['output_spec'])):
            missing_fields.append(
                {
                    'descriptor': 'Trained Model',
                    'field': 'Output Specification.Component Mapping.Data Item', 
                    'rationale': 'The specific data item within the mapped downstream component in the production system is important for trained model integration.'
                })

    if(not trained_model_json or (trained_model_json['post_processing'] and any([step.strip() == '' for step in trained_model_json['post_processing_process']]))):
        missing_fields.append(
            {
                'descriptor': 'Trained Model',
                'field': 'Post-Processing Steps', 
                'rationale': 'If the model output needs to be pre-processed before it is passed on to the downstream component in the ML system, this information is important and can be used as requirements if the trained model needs to be ported or redeveloped to fit in the system development and production environments. '
            })
    
    if(not trained_model_json 
        or  (
            trained_model_json['post_processing'] == True 
            and all(
                spec['item_name'].strip() == ''
                and spec['item_description'].strip() == ''
                and spec['item_type'].strip() == ''
                # expected_values removed, do we want a check like this?
                # and item_spec_missing_fields(trained_model_json['final_output_spec'])
                and spec['component_mapping']['component'].strip() == ''
                and spec['component_mapping']['data_item'].strip() == ''
                for spec in trained_model_json['final_output_spec']
            )
        )
    ):
        missing_fields.append(
            {
                'descriptor': 'Trained Model',
                'field': 'Final Output Specification', 
                'rationale': 'Having a specification for output going from the trained model to the downstream component in the ML system will contribute to developing an ML component that can be easily integrated into the ML system.'
            })

    elif trained_model_json['post_processing'] == True:
        if(any(spec['item_name'].strip() == '' for spec in trained_model_json['final_output_spec'])):
            missing_fields.append(
                {
                    'descriptor': 'Trained Model',
                    'field': 'Final Output Specification.Item Name', 
                    'rationale': 'Field name, if meaningful, provides a high level understanding of the output going to the downstream component.'
                })

        if(any(spec['item_description'].strip() == '' for spec in trained_model_json['final_output_spec'])):
            missing_fields.append(
                {
                    'descriptor': 'Trained Model',
                    'field': 'Final Output Specification.Item Description', 
                    'rationale': 'Field description is important information for integrating the trained model into the ML system.'
                })

        if(any(spec['item_type'].strip() == '' for spec in trained_model_json['final_output_spec'])):
            missing_fields.append(
                {
                    'descriptor': 'Trained Model',
                    'field': 'Final Output Specification.Item Type', 
                    'rationale': 'Field type is important information for integrating the trained model into the ML system.'
                })

        if(item_spec_missing_fields(trained_model_json['final_output_spec'])):
            missing_fields.append(
                {
                    'descriptor': 'Trained Model',
                    'field': 'Final Output Specification.Item Specification', 
                    'rationale': 'Understanding of expected values for a field is important information for integrated the trained model into the ML system and determining errors in model output data.'
                })

        if(any(spec['component_mapping']['component'].strip() == '' for spec in trained_model_json['final_output_spec'])):
            missing_fields.append(
                {
                    'descriptor': 'Trained Model',
                    'field': 'Final Output Specification.Component Mapping.Component', 
                    'rationale': 'The name of the mapped downstream component in the production system is important for trained model integration.'
                })

        if(any(spec['component_mapping']['data_item'].strip() == '' for spec in trained_model_json['final_output_spec'])):
            missing_fields.append(
                {
                    'descriptor': 'Trained Model',
                    'field': 'Final Output Specification.Component Mapping.Data Item', 
                    'rationale': 'The specific data item within the mapped downstream component in the production system is important for trained model integration.'
                })


    if(not trained_model_json
        or (
            trained_model_json['evaluation_dataset']['name'].strip() == '' 
            and trained_model_json['evaluation_dataset']['holdout_percentage'] == 0
            and trained_model_json['evaluation_dataset']['seed'] == 0
            and trained_model_json['evaluation_dataset']['algorithm'] == ''
            and trained_model_json['evaluation_dataset']['file'].strip() == ''
        )
    ):
        missing_fields.append(
            {
                'descriptor': 'Trained Model',
                'field': 'Evaluation Dataset', 
                'rationale': 'Details about the evaluation dataset, as well as access to the evaluation dataset itself is important as it is required any time that the model needs to be retrained.'
            })
    else:
        if(trained_model_json['evaluation_dataset']['name'].strip() == ''):
            missing_fields.append(
                {
                    'descriptor': 'Trained Model',
                    'field': 'Evaluation Dataset.Name', 
                    'rationale': 'Providing a meaningful name for the evaluation dataset is important for traceability and troubleshooting.'
                })

        if(trained_model_json['evaluation_dataset']['holdout_percentage'] == 0):
            missing_fields.append(
                {
                    'descriptor': 'Trained Model',
                    'field': 'Evaluation Dataset.Holdout Percentage', 
                    'rationale': 'Specifying the holdout percentage is important for process validation and troubleshooting.'
                })

        if(trained_model_json['evaluation_dataset']['algorithm'].strip() == ''):
            missing_fields.append(
                {
                    'descriptor': 'Trained Model',
                    'field': 'Evaluation Dataset.Algorithm', 
                    'rationale': 'Specifying the algorithm used for the data split is important for process validation and troubleshooting. '
                })

    if(not trained_model_json 
        or (
            all(
                (
                    eval_metric['metric'].strip() == ''
                    or (
                        eval_metric['metric'] == 'Other' 
                        and eval_metric['other_metric'].strip() == ''
                    )
                )
                and eval_metric['result'] == 0
                for eval_metric in trained_model_json['evaluation_metrics']
            )
        )
    ):
        missing_fields.append(
            {
                'descriptor': 'Trained Model',
                'field': 'Evaluation Metrics', 
                'rationale': 'Results of the trained model on the evaluation dataset are important for model developers to demonstrate results, to compare against  evaluation metrics for future versions of the trained model, and for comparison in case the model needs to be ported to fit into the  ML system.'
            })

    else:
        if(any(metric['metric'].strip() == '' for metric in trained_model_json['evaluation_metrics'])):
            missing_fields.append(
                {
                    'descriptor': 'Trained Model',
                    'field': 'Evaluation Metrics.Metric', 
                    'rationale': 'Specifying the metric used for evaluation is important for process validation and troubleshooting.'
                })

        if(any(metric['result'] == 0 for metric in trained_model_json['evaluation_metrics'])):
            missing_fields.append(
                {
                    'descriptor': 'Trained Model',
                    'field': 'Evaluation Metrics.Result', 
                    'rationale': 'Specifying the result for the metric used for evaluation is important for process validation and troubleshooting.'
                })

    if(not trained_model_json 
        or (
            trained_model_json['test_dataset']['name'].strip() == ''
            and trained_model_json['test_dataset']['test_results'].strip() == ''
            and trained_model_json['test_dataset']['file'].strip() == ''
        )
    ):
        missing_fields.append(
            {
                'descriptor': 'Trained Model',
                'field': 'Test Dataset', 
                'rationale': 'Access to the test dataset is important as it is required any time that the model needs to be retrained. In addition, having test results as well as test data is very useful for software engineers for ML component integration testing.'
            })

    else:
        if(trained_model_json['test_dataset']['name'].strip() == ''):
            missing_fields.append(
                {
                    'descriptor': 'Trained Model',
                    'field': 'Test Dataset.Name', 
                    'rationale': 'Providing a meaningful name for the test dataset is important for traceability, troubleshooting, and model testing and integration.'
                })
        
        if(trained_model_json['test_dataset']['test_results'].strip() == ''):
            missing_fields.append(
                {
                    'descriptor': 'Trained Model',
                    'field': 'Test Dataset.Test Results', 
                    'rationale': 'Providing a description of test results is important for traceability, troubleshooting, and model testing and integration.'
                })
        
        if(trained_model_json['test_dataset']['file'].strip() == ''):
            missing_fields.append(
                {
                    'descriptor': 'Trained Model',
                    'field': 'Test Dataset.File', 
                    'rationale': 'Providing access to the test dataset is important for traceability, troubleshooting, and especially model testing and integration.'
                })

    if(not trained_model_json 
        or(
            trained_model_json['post_processing']
            and (
                trained_model_json['integration_test_dataset']['name'].strip() == ''
                and trained_model_json['integration_test_dataset']['test_results'].strip() == ''
                and trained_model_json['integration_test_dataset']['file'].strip() == ''
            )
        )
    ):
        missing_fields.append(
            {
                'descriptor': 'Trained Model',
                'field': 'Integration Test Dataset', 
                'rationale': 'If the model output needs to be pre-processed before it is passed on to the downstream component in the ML system, access to the test dataset is important as it is required any time that the model needs to be retrained. In addition, having test results as well as test data is very useful for software engineers for ML component integration testing.'
            })

    elif trained_model_json['post_processing']:
        if(trained_model_json['integration_test_dataset']['name'].strip() == ''):
            missing_fields.append(
                {
                    'descriptor': 'Trained Model',
                    'field': 'Integration Test Dataset.Name', 
                    'rationale': 'Providing a meaningful name for the test dataset is important for traceability, troubleshooting, and model testing and integration.'
                })
        
        if(trained_model_json['integration_test_dataset']['test_results'].strip() == ''):
            missing_fields.append(
                {
                    'descriptor': 'Trained Model',
                    'field': 'Integration Test Dataset.Test Results', 
                    'rationale': 'Providing a description of test results is important for traceability, troubleshooting, and model testing and integration.'
                })

        if(trained_model_json['integration_test_dataset']['file'].strip() == ''):
            missing_fields.append(
                {
                    'descriptor': 'Trained Model',
                    'field': 'IntegrationTest Dataset.File', 
                    'rationale': 'Providing access to the test dataset is important for traceability, troubleshooting, and especially model testing and integration.'
                })


    if(not trained_model_json
        or all(
            (
                test_metric['metric'].strip() == ''
                or (
                    test_metric['metric'] == 'Other' 
                    and test_metric['other_metric'].strip() == ''
                )
            )
            and test_metric['result'] == 0
            for test_metric in trained_model_json['test_metrics']
        )
    ):
        missing_fields.append(
            {
                'descriptor': 'Trained Model',
                'field': 'Test Metrics', 
                'rationale': 'Results of the trained model on the test dataset are important for model developers to demonstrate final results, to compare against  test metrics for future versions of the trained model, and for comparison in case the model needs to be ported to fit into the  ML system. Software engineers can also use these metrics during ML component integration testing to see if they obtain similar values.'
            })
    
    else:
        if(
            any(
                test_metric['metric'].strip() == ''
                or (
                    test_metric['metric'] == 'Other' 
                    and test_metric['other_metric'].strip() == ''
                )
                for test_metric in trained_model_json['test_metrics']
            )
        ):
            missing_fields.append(
                {
                    'descriptor': 'Trained Model',
                    'field': 'Test Metrics.Metric', 
                    'rationale': 'Providing a description of test results is important for traceability, troubleshooting, and model testing and integration.'
                })

        if(any(test_metric['result'] == 0 for test_metric in trained_model_json['test_metrics'])):
            missing_fields.append(
                {
                    'descriptor': 'Trained Model',
                    'field': 'Test Metrics.Results', 
                    'rationale': 'Specifying the result for the metric used for testing is important for process validation and troubleshooting.'
                })


    if(not trained_model_json or trained_model_json['model_output_interpretation'].strip() == ''):
        missing_fields.append(
            {
                'descriptor': 'Trained Model',
                'field': 'Model Output Interpretation', 
                'rationale': 'Having knowledge about how to interpret model output is important for making decisions about what needs to be implemented in upstream components so that outputs are relevant and actionable in the ML system.'
            })

    if(not trained_model_json or trained_model_json['default_model_output'].strip() == ''):
        missing_fields.append(
            {
                'descriptor': 'Trained Model',
                'field': 'Default Model Output', 
                'rationale': 'Having knowledge about how to interpret model output is important for making decisions about what needs to be implemented in upstream components so that outputs are relevant and actionable in the ML system.'
            })
    
    if(not trained_model_json 
        or all(
            metric['metric'].strip() == ''
            and metric['operator'].strip() == ''
            and metric['threshold'] == 0
            and metric['goal_mapping'].strip() == ''
            for metric in trained_model_json['algorithm_metrics']
        )
    ):
        missing_fields.append(
            {
                'descriptor': 'Trained Model',
                'field': 'Algorithm Metrics', 
                'rationale': 'Algorithm metrics to capture at run time, which map to the goals specified for the model, need to be specified so that it can be determined if the model is meeting goals.'
            })
    else:
        if(any(metric['metric'].strip() == '' for metric in trained_model_json['algorithm_metrics'])):
            missing_fields.append(
                {
                    'descriptor': 'Trained Model',
                    'field': 'Algorithm Metrics.Metric', 
                    'rationale': 'Proactively specifying an algorithm metric to be monitored at runtime will ensure that the production environment is set up for its collection.'
                })
        
        if(any(metric['operator'].strip() == '' for metric in trained_model_json['algorithm_metrics'])):
            missing_fields.append(
                {
                    'descriptor': 'Trained Model',
                    'field': 'Algorithm Metrics.Operator', 
                    'rationale': 'Specifying an operator for an algorithm metric is necessary to define monitoring thresholds.'
                })

        if(any(metric['threshold'] == 0 for metric in trained_model_json['algorithm_metrics'])):
            missing_fields.append(
                {
                    'descriptor': 'Trained Model',
                    'field': 'Algorithm Metrics.Threshold', 
                    'rationale': 'Specifying a threshold for notification will ensure that the proper action is taken when the model is no longer performing adequately.'
                })
            
        if(any(metric['goal_mapping'].strip() == '' for metric in trained_model_json['algorithm_metrics'])):
            missing_fields.append(
                {
                    'descriptor': 'Trained Model',
                    'field': 'Algorithm Metrics.Goal Mapping', 
                    'rationale': 'Mapping an algorithm metric to a goal ensures that the model meets its requirements.'
                })

    if(not trained_model_json 
        or all(
            metric['metric'].strip() == ''
            and metric['operator'].strip() == ''
            and metric['threshold'] == 0
            and metric['goal_mapping'].strip() == ''
            for metric in trained_model_json['business_metrics']
        )
    ):
        missing_fields.append(
            {
                'descriptor': 'Trained Model',
                'field': 'Business Metrics', 
                'rationale': 'Business metrics to capture at run time, which map to the goals specified for the model, need to be specified so that it can be determined if the model is meeting goals.'
            })
    else:
        if(any(metric['metric'].strip() == '' for metric in trained_model_json['business_metrics'])):
            missing_fields.append(
                {
                    'descriptor': 'Trained Model',
                    'field': 'Business Metrics.Metric', 
                    'rationale': 'Proactively specifying a business metric to be monitored at runtime will ensure that the production environment is set up for its collection.'
                })
            
        if(any(metric['operator'].strip() == '' for metric in trained_model_json['business_metrics'])):
            missing_fields.append(
                {
                    'descriptor': 'Trained Model',
                    'field': 'Business Metrics.Operator', 
                    'rationale': 'Specifying an operator for an business metric is necessary to define monitoring thresholds.'
                })
        
        if(any(metric['threshold'] == 0 for metric in trained_model_json['business_metrics'])):
            missing_fields.append(
                {
                    'descriptor': 'Trained Model',
                    'field': 'Business Metrics.Threshold', 
                    'rationale': 'Specifying a threshold for notification will ensure that the proper action is taken when the model is no longer meeting goals.'
                })

        if(any(metric['goal_mapping'].strip() == '' for metric in trained_model_json['business_metrics'])):
            missing_fields.append(
                {
                    'descriptor': 'Trained Model',
                    'field': 'Business Metrics.Goal Mapping', 
                    'rationale': 'Mapping a business metric to a goal ensures that the model meets its requirements.'
                })

    if(not trained_model_json 
        or all(
            log['log'].strip() == ''
            and log['log_data_format'].strip() == ''
            and log['history'].strip() == ''
            for log in trained_model_json['log_data']
        )
    ):
        missing_fields.append(
            {
                'descriptor': 'Trained Model',
                'field': 'Log Data', 
                'rationale': 'If data to log at run time for model troubleshooting and retraining is not specified, this data will likely not be captured in production, and therefore will therefore not be available when needed.'
            })
    else:
        if(any(log['log'].strip() == '' for log in trained_model_json['log_data'])):
            missing_fields.append(
                {
                    'descriptor': 'Trained Model',
                    'field': 'Log Data.Log', 
                    'rationale': 'Proactively specifying data to be logged at runtime will ensure that the production environment is set up for its collection.'
                })

        if(any(log['log_data_format'].strip() == '' for log in trained_model_json['log_data'])):
            missing_fields.append(
                {
                    'descriptor': 'Trained Model',
                    'field': 'Log Data.Log Data Format', 
                    'rationale': 'Specifying the format for the log data will ensure that it can be easily consumed by model developers when troubleshooting and retraining.'
                })

        if(any(log['history'].strip() == '' for log in trained_model_json['log_data'])):
            missing_fields.append(
                {
                    'descriptor': 'Trained Model',
                    'field': 'Log Data.History', 
                    'rationale': 'Indicating how much log data history to keep will ensure that it is sufficient for properly troubleshooting and retraining the model.'
                })

    if(not trained_model_json or any([decision.strip() == '' for decision in trained_model_json['decisions_assumptions']])):
        missing_fields.append(
            {
                'descriptor': 'Trained Model',
                'field': 'Decisions Assumptions', 
                'rationale': 'Explicitly stating decisions, assumptions, limitations, and constraints related to the trained model will ease model integration and deployment of the ML system.'
            })

    if(not trained_model_json
        or (
            trained_model_json['computing_resource_reqs']['cpu'] == 0
            and trained_model_json['computing_resource_reqs']['memory'] == 0
            and trained_model_json['computing_resource_reqs']['storage'] == 0
        )
    ):
        missing_fields.append(
            {
                'descriptor': 'Trained Model',
                'field': 'Computing Resource Requirements', 
                'rationale': 'Knowledge of computing resources required to serve the model will determine computing resources required in the development and production environments, and may serve for decisions regarding the suitability of the model for its target platform.'
            })

    if(not trained_model_json
        or (
            trained_model_json['inference_time']['time'] == 0
            and trained_model_json['inference_time']['unit'].strip() == ''
        )
    ):
        missing_fields.append(
            {
                'descriptor': 'Trained Model',
                'field': 'Observed Inference Time', 
                'rationale': 'Knowledge of observed inference time based on computing resource requirements is necessary to see if it will meet ML system requirements.'
            })

    if(not trained_model_json or any([dependency.strip() == '' for dependency in trained_model_json['system_dependencies']])):
        missing_fields.append(
            {
                'descriptor': 'Trained Model',
                'field': 'System Dependencies', 
                'rationale': 'Knowledge of any system dependencies such as libraries, tools, or configuration scripts will help prepare the development and production environments for the ML system.'
            })

    if(not trained_model_json or trained_model_json['model_training_code'].strip() == ''):
        missing_fields.append(
            {
                'descriptor': 'Trained Model',
                'field': 'Model Training Code', 
                'rationale': 'Access to model training code is necessary as it is required any time that the model needs to be retrained.'
            })

    if(not trained_model_json or trained_model_json['trained_model_code'].strip() == ''):
        missing_fields.append(
            {
                'descriptor': 'Trained Model',
                'field': 'Trained Model Code', 
                'rationale': 'Access to trained model code is necessary as this code is reused in both the development and production environments as part of the ML component.'
            })

    return missing_fields


def development_environment_missing_fields(development_environment_json):
    """
    Checks a Development Environment document for missing required fields according to the rules

    :param development_environment_json: JSON of a Development Environment document

    :return: List of missing required fields
    """
    missing_fields = []

    if(not development_environment_json or development_environment_json['programming_languages'] == []):
        missing_fields.append(
            {
                'descriptor': 'Development Environment',
                'field': 'Programming Languages', 
                'rationale': 'Knowing what programming languages are supported in the development environment may inform programming language selection for model development, or can serve as a flag to indicate if the ML component will need to be ported before deployment.'
            })

    if(not development_environment_json or development_environment_json['ml_frameworks'] == []):
        missing_fields.append(
            {
                'descriptor': 'Development Environment',
                'field': 'ML Frameworks', 
                'rationale': 'Knowing what ML frameworks are supported in the development environment may inform ML framework selection for model development, or can serve as a flag to indicate if the ML component will need to be ported before deployment.'
            })

    if(not development_environment_json
        or all(
            component['component_name'].strip() == ''
            and all(
                spec['item_name'].strip() == ''
                and spec['item_description'].strip() == ''
                and spec['item_type'].strip() == ''
                and spec['expected_values'].strip() == ''
                for spec in component['output_spec']
            )
            for component in development_environment_json['upstream_components']
        )
    ):
        missing_fields.append(
            {
                'descriptor': 'Development Environment',
                'field': 'Upstream Components', 
                'rationale': 'Having a specification for upstream components will contribute to developing an ML component that can be easily integrated into the ML system.'
            })

    else:
        if(any(component['component_name'].strip() == '' for component in development_environment_json['upstream_components'])):
            missing_fields.append(
                {
                    'descriptor': 'Development Environment',
                    'field': 'Upstream Components.Component Name', 
                    'rationale': 'Proactively specifying the name of the upstream component to the data pipeline is important for ML component integration.'
                })

        if(
            all(
                spec['item_name'].strip() == ''
                and spec['item_description'].strip() == ''
                and spec['item_type'].strip() == ''
                and spec['expected_values'].strip() == ''
                for component in development_environment_json['upstream_components'] for spec in component['output_spec']
            )
        ):
            missing_fields.append(
                {
                    'descriptor': 'Development Environment',
                    'field': 'Upstream Components.Output Spec', 
                    'rationale': 'Proactively specifying the input coming from the upstream component into the data pipeline will contribute to developing an ML component that can be easily integrated into the ML system.'
                })
        
        else:
            if(any(spec['item_name'].strip() == '' for component in development_environment_json['upstream_components'] for spec in component['output_spec'])):
                missing_fields.append(
                    {
                        'descriptor': 'Development Environment',
                        'field': 'Upstream Components.Output Spec.Item Name', 
                        'rationale': 'Field name, if meaningful, provides a high level understanding of the input coming from the upstream component.'
                    })
            
            if(any(spec['item_description'].strip() == '' for component in development_environment_json['upstream_components'] for spec in component['output_spec'])):
                missing_fields.append(
                    {
                        'descriptor': 'Development Environment',
                        'field': 'Upstream Components.Output Spec.Item Description', 
                        'rationale': 'Field description is important information for building the data pipeline.'
                    })

            if(any(spec['item_type'].strip() == '' for component in development_environment_json['upstream_components'] for spec in component['output_spec'])):
                missing_fields.append(
                    {
                        'descriptor': 'Development Environment',
                        'field': 'Upstream Components.Output Spec.Item Type', 
                        'rationale': 'Field type is important information for building the data pipeline.'
                    })
            
            if(any(spec['expected_values'].strip() == '' for component in development_environment_json['upstream_components'] for spec in component['output_spec'])):
                missing_fields.append(
                    {
                        'descriptor': 'Development Environment',
                        'field': 'Upstream Components.Output Spec.Expected Values', 
                        'rationale': 'Understanding of expected values for a field is important information for building the data pipeline and determining errors in input data.'
                    })

        

    if(not development_environment_json 
        or all(
            component['component_name'].strip() == ''
            and all(
                spec['item_name'].strip() == ''
                and spec['item_description'].strip() == ''
                and spec['item_type'].strip() == ''
                and spec['expected_values'].strip() == ''
                for spec in component['input_spec']
            )
            for component in development_environment_json['downstream_components']
        )
    ):
        missing_fields.append(
            {
                'descriptor': 'Development Environment',
                'field': 'Downstream Components', 
                'rationale': 'Having a specification for downstream components will contribute to developing an ML component that can be easily integrated into the ML system.'
            })

    else:
        if(any(component['component_name'].strip() == '' for component in development_environment_json['downstream_components'])):
            missing_fields.append(
                {
                    'descriptor': 'Development Environment',
                    'field': 'Downstream Components.Component Name', 
                    'rationale': 'Proactively specifying the name of the downstream component from the trained model is important for ML component integration.'
                })

        if(
            all(
                spec['item_name'].strip() == ''
                and spec['item_description'].strip() == ''
                and spec['item_type'].strip() == ''
                and spec['expected_values'].strip() == ''
                for component in development_environment_json['downstream_components'] for spec in component['input_spec']
            )
        ):
            missing_fields.append(
                {
                    'descriptor': 'Development Environment',
                    'field': 'Downstream Components.Input Spec', 
                    'rationale': 'Proactively specifying the input from the trained model to the downtream component contributes to developing an ML component that can be easily integrated into the ML system.'
                })
        
        else:
            if(any(spec['item_name'].strip() == '' for component in development_environment_json['downstream_components'] for spec in component['input_spec'])):
                missing_fields.append(
                    {
                        'descriptor': 'Development Environment',
                        'field': 'Downstream Components.Input Spec.Item Name', 
                        'rationale': 'Field name, if meaningful, provides a high level understanding of the input required by the downstream component.'
                    })
            
            if(any(spec['item_description'].strip() == '' for component in development_environment_json['downstream_components'] for spec in component['input_spec'])):
                missing_fields.append(
                    {
                        'descriptor': 'Development Environment',
                        'field': 'Downstream Components.Input Spec.Item Description', 
                        'rationale': 'Field description is important information for building the trained model output.'
                    })

            if(any(spec['item_type'].strip() == '' for component in development_environment_json['downstream_components'] for spec in component['input_spec'])):
                missing_fields.append(
                    {
                        'descriptor': 'Development Environment',
                        'field': 'Downstream Components.Input Spec.Item Type', 
                        'rationale': 'Field type is important information for building the trained model output'
                    })
            
            if(any(spec['expected_values'].strip() == '' for component in development_environment_json['downstream_components'] for spec in component['input_spec'])):
                missing_fields.append(
                    {
                        'descriptor': 'Development Environment',
                        'field': 'Downstream Components.Input Spec.Expected Values', 
                        'rationale': 'Understanding of expected values for a field is important information for building the trained model output and determining errors in input data.'
                    })

    if(not development_environment_json 
        or all(
            milestone['milestone'].strip() == ''
            and milestone['milestone_date'].strip() == ''
            for milestone in development_environment_json['milestones']
        )
    ):
        missing_fields.append(
            {
                'descriptor': 'Development Environment',
                'field': 'Milestones', 
                'rationale': 'Knowing important system development milestones can help model developers, operations, and other stakeholders plan their activities.'
            })

    if(not development_environment_json
        or (
            development_environment_json['computing_resources']['cpu'] == 0
            and development_environment_json['computing_resources']['memory'] == 0
            and development_environment_json['computing_resources']['storage'] == 0
        )
    ):
        missing_fields.append(
            {
                'descriptor': 'Development Environment',
                'field': 'Available Computing Resources', 
                'rationale': 'Knowledge of computing resources available in the development environment may inform model development decisions.'
            })

    return missing_fields


def production_environment_missing_fields(production_environment_json):
    """
    Checks a Production Environment document for missing required fields according to the rules

    :param production_environment_json: JSON of a Production Environment document

    :return: List of missing required fields
    """
    missing_fields = []

    if(not production_environment_json 
        or (
            production_environment_json['required_inference_time']['time'] == 0
            and production_environment_json['required_inference_time']['unit'].strip() == '' 
        )
    ):
        missing_fields.append(
            {
                'descriptor': 'Production Environment',
                'field': 'Required Inference Time', 
                'rationale': 'Knowledge of required inference time in the ML system may inform model development decisions.'
            })

    if(not production_environment_json
        or (
            production_environment_json['computing_resources']['cpu'] == 0
            and production_environment_json['computing_resources']['memory'] == 0
            and production_environment_json['computing_resources']['storage'] == 0
        )
    ):
        missing_fields.append(
            {
                'descriptor': 'Production Environment',
                'field': 'Available Computing Resources', 
                'rationale': 'Knowledge of computing resources available in the production environment may inform model development decisions.'
            })

    if(not production_environment_json
        or all(
            metric['metric'].strip() == ''
            and metric['implementation'].strip() == ''
            for metric in production_environment_json['algorithm_metrics']
        )
    ):
        missing_fields.append(
            {
                'descriptor': 'Production Environment',
                'field': 'Implemented Algorithm Metrics', 
                'rationale': 'Knowledge of algorithm metrics that the production environment is ready to capture may inform model development decisions, as well as decisions regarding additional software components or other sources to obtain algorithm metrics required by model developers for troubleshooting and retraining.'
            })

    if(not production_environment_json 
        or all(
            metric['metric'].strip() == ''
            and metric['implementation'].strip() == ''
            for metric in production_environment_json['business_metrics']
        )
    ):
        missing_fields.append(
            {
                'descriptor': 'Production Environment',
                'field': 'Implemented Business Metrics', 
                'rationale': 'Knowledge of business metrics that the production environment is ready to capture may inform model development decisions, as well as decisions regarding additional software components or other sources to obtain business metrics required by the business, system owners, or other stakeholders.'
            })

    if(not production_environment_json 
        or all(
            log['log'].strip() == ''
            and log['implementation'].strip() == ''
            for log in production_environment_json['model_logs']
        )
    ):
        missing_fields.append(
            {
                'descriptor': 'Production Environment',
                'field': 'Model Logs', 
                'rationale': 'Knowledge of logs that the production environment is ready to capture may inform model development decisions, as well as decisions regarding additional software components or other sources to obtain logs required by model developers, software engineers, legal, or other stakeholders.'
            })

    return missing_fields


def production_data_missing_fields(production_data_json):
    """
    Checks a Production Data document for missing required fields according to the rules

    :param production_data_json: JSON of a Production Data document

    :return: List of missing required fields
    """
    missing_fields = []

    if(not production_data_json or production_data_json['data_sources'].strip() == ''):
        missing_fields.append(
            {
                'descriptor': 'Production Data',
                'field': 'Data Sources', 
                'rationale': 'Knowledge of sources for production data for the deployed ML component may inform decisions made by model developers regarding model design, adequacy of training data, and data processing required.'
            })

    if(not production_data_json or production_data_json['data_rates'].strip() == ''):
        missing_fields.append(
            {
                'descriptor': 'Production Data',
                'field': 'Data Rates', 
                'rationale': 'Knowledge of rates at which production data feeds into the deployed ML component will inform model development decisions as well as system architecture decisions, especially in cases where data flows into the system at a rate higher than can be processed by the ML component.'
            })

    if(not production_data_json 
        or all(
            schema['field_name'].strip() == ''
            and schema['field_description'].strip() == ''
            and schema['field_type'].strip() == ''
            and schema['expected_values'].strip() == ''
            for schema in production_data_json['schema']
        )
    ):
        missing_fields.append(
            {
                'descriptor': 'Production Data',
                'field': 'Schema', 
                'rationale': 'Knowledge of the schema of the data that constitutes the input for the deployed ML component will inform data processing components of the data pipeline.'
            })
    else:
        if(any(schema['field_name'].strip() == '' for schema in production_data_json['schema'])):
            missing_fields.append(
                {
                    'descriptor': 'Production Data',
                    'field': 'Schema.Field Name', 
                    'rationale': 'Field name, if meaningful, provides a high level understanding of the input coming from the upstream component in production.'
                })

        if(any(schema['field_description'].strip() == '' for schema in production_data_json['schema'])):
            missing_fields.append(
                {
                    'descriptor': 'Production Data',
                    'field': 'Schema.Field Description', 
                    'rationale': 'Field description is important information for model training and troubleshooting.'
                })

        if(any(schema['field_type'].strip() == '' for schema in production_data_json['schema'])):
            missing_fields.append(
                {
                    'descriptor': 'Production Data',
                    'field': 'Schema.Field Type', 
                    'rationale': 'Field type is important information for model training and troubleshooting.'
                })

        if(any(schema['expected_values'].strip() == '' for schema in production_data_json['schema'])):
            missing_fields.append(
                {
                    'descriptor': 'Production Data',
                    'field': 'Schema.Expected Values', 
                    'rationale': 'Understanding of expected values for a field is important information for error handling, especially when the model is in production.'
                })

    return missing_fields


def item_spec_missing_fields(specification_list):
    if any(
        item_spec['item_specification']['other_value'] == ''
        and item_spec['item_specification']['min_value'] == 0
        and item_spec['item_specification']['max_value'] == 0
        and item_spec['item_specification']['resolution_x'] == 0
        and item_spec['item_specification']['resolution_y'] == 0
        and item_spec['item_specification']['channels'] == 0
        and item_spec['item_specification']['image_format'] == ''
        and item_spec['item_specification']['min_length'] == 0
        and item_spec['item_specification']['max_length'] == 0
        for item_spec in specification_list
    ):
        return True
    else:
        return False