# TEC - Automated Mismatch Detection Tool
# Copyright 2023 Carnegie Mellon University.
# NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.
# Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.
# [DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.
# This Software was created using the SEI Design System and includes and/or makes use of Third-Party Software subject to its own license.
# DM23-0003


import json
from flask import Blueprint, current_app

from database_helpers.db_lists import *

db_lists_blueprint = Blueprint('db_lists', __name__)


@db_lists_blueprint.route('/get_deployment_mechanisms', methods=['GET'])
def get_deployment_mechanisms():
    """
    Get the list of deployment mechanisms currently in the database

    :return: JSON containing the list of deployment mechanisms
    """
    database = current_app.config['database']
    db_response = db_get_deployment_mechanisms(database)

    response = []
    for mechanism in db_response:
        response.append(mechanism['deployment_mechanism'])
    
    return json.dumps(response), 200


@db_lists_blueprint.route('/get_deployment_platforms', methods=['GET'])
def get_deployment_platforms():
    """
    Get the list of deployment platforms currently in the database

    :return: JSON containing the list of deployment platforms
    """
    database = current_app.config['database']
    db_response = db_get_deployment_platforms(database)

    response = []
    for platform in db_response:
        response.append(platform['deployment_platform'])
    
    return json.dumps(response), 200


@db_lists_blueprint.route('/get_item_types', methods=['GET'])
def get_item_types():
    """
    Get the list of item types currently in the database
    
    :return: JSON containing the list of statistics
    """
    database = current_app.config['database']
    db_response = db_get_item_types(database)

    response = []
    for type in db_response:
        response.append(type['item_type'])

    return json.dumps(response), 200


@db_lists_blueprint.route('/get_ml_frameworks', methods=['GET'])
def get_ml_frameworks():
    """
    Get the list of ml frameworks currently in the database
    
    :return: JSON containing the list of frameworks
    """
    database = current_app.config['database']
    db_response = db_get_ml_frameworks(database)

    response = []
    for framework in db_response:
        response.append(framework['framework_name'])

    return json.dumps(response), 200


@db_lists_blueprint.route('/get_programming_languages', methods=['GET'])
def get_programming_languages():
    """
    Get the list of programming languages currently in the database
    
    :return: JSON containing the list of languages
    """
    database = current_app.config['database']
    db_response = db_get_programming_languages(database)

    response = []
    for framework in db_response:
        response.append(framework['language_name'])

    print(response, flush=True)

    return json.dumps(response), 200
    


@db_lists_blueprint.route('/get_statistics', methods=['GET'])
def get_statistics():
    """
    Get the list of statistics currently in the database
    
    :return: JSON containing the list of statistics
    """
    database = current_app.config['database']
    db_response = db_get_statistics(database)

    response = []
    for statistic in db_response:
        response.append(statistic['statistic_name'])

    return json.dumps(response), 200