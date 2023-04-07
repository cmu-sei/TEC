# TEC - Automated Mismatch Detection Tool
# Copyright 2023 Carnegie Mellon University.
# NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.
# Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.
# [DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.
# This Software was created using the SEI Design System and includes and/or makes use of Third-Party Software subject to its own license.
# DM23-0003


import json
from flask import Blueprint, request, current_app

from database_helpers.documents import *
from helpers.validate_documents import *

documents_blueprint = Blueprint('documents', __name__)

@documents_blueprint.route('/insert_document', methods=['POST'])
def insert_document():
    """
    Insert or update a document in the DB
    
    :JSON param project_name: The project that the document will be inserted under
    :JSON param descriptor_name: The descriptor that the document will be inserted under
    :JSON param document: The document to be inserted (POST)
    :optional JSON param import: Specifies whether or not the insert needs to validated against the schema

    :return: 'Success', or JSON containing a list of string errors in error_list
    """
    json_data = request.get_json()

    if('project_name' not in json_data):
        return {'error_list': ['A project name must be provided']}, 400
    if('descriptor_name' not in json_data):
        return {'error_list': ['A descriptor name must be provided']}, 400

    project_name = json_data['project_name']
    descriptor_name = json_data['descriptor_name']
    document = json_data['document']

    database = current_app.config['database']

    # TODO : Give this and export a different list name than just 'errors'
    # TODO : This will not do the normal validation along with this because it returns every time
    if('import' in json_data and json_data['import']):
        schema_errors = validate_document_against_schema(descriptor_name, document)
        if(len(schema_errors) > 0):
            return {'schema_errors': schema_errors}, 400

    error_list = validate_document_linked_fields(database, project_name, descriptor_name, document)
    if(len(error_list) > 0):
        return {'error_list': error_list}, 400

    db_response = db_insert_document(database, project_name, descriptor_name, document)

    if not db_response:
        return {'error_list': ['Database Error.']}, 500
    
    return 'Success', 200    


@documents_blueprint.route('/get_document', methods=['POST'])
def get_document():
    """
    Get the document based on descriptor_name and project_name passed in the POST JSON
    :JSON param project_name: The project that the document will be grabbed from
    :JSON param descriptor_name: The descriptor that that will be grabbed
    
    :return: JSON containing document or 'No Document found' if no document exists for that project
    """
    json_data = request.get_json()

    if('project_name' not in json_data):
        return {'error_list': ['A project name must be provided']}, 400
    if('descriptor_name' not in json_data):
        return {'error_list': ['A descriptor name must be provided']}, 400

    project_name = json_data['project_name']
    descriptor_name = json_data['descriptor_name']
    
    database = current_app.config['database']

    db_response = db_get_document(database, project_name, descriptor_name)

    if not db_response:
        return "No document found", 200
    else:
        # TODO : Give this and export a different list name than just 'errors'
        # TODO : This will not do the normal validation along with this because it returns every time
        if 'export' in json_data and json_data['export']:
            schema_errors = validate_document_against_schema(descriptor_name, db_response)
            return {'document': db_response, 'errors': schema_errors}
        else:
            return {'document': db_response}, 200
            

@documents_blueprint.route('/delete_document', methods=['POST'])
def delete_document():
    """
    Deletes the document from the db based on descriptor_name and project_name in the POST JSON
    :JSON param project_name: The project that the document will be deleted from
    :JSON param descriptor_name: The descriptor that will be deleted

    :return: JSON containing 'Success'
    """
    json_data = request.get_json()

    if('descriptor_name' not in json_data):
        return {'error_list': ['A descriptor name must be provided']}, 400
    if('project_name' not in json_data):
        return {'error_list': ['A project name must be provided']}, 400

    project_name = json_data['project_name']
    descriptor_name = json_data['descriptor_name']

    database = current_app.config['database']

    db_delete_document(database, project_name, descriptor_name)

    return 'Success', 200