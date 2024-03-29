# TEC - Automated Mismatch Detection Tool
# Copyright 2023 Carnegie Mellon University.
# NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.
# Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.
# [DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.
# This Software was created using the SEI Design System and includes and/or makes use of Third-Party Software subject to its own license.
# DM23-0003


import json
import os
import zipfile

from flask import Blueprint, request, current_app, make_response, send_file
from threading import Lock

from database_helpers.project import *
from helpers.mismatch_detection import *
from MyFPDFClass import *
from helpers.util import to_nice_name

project_blueprint = Blueprint('project', __name__)

file_lock = Lock()

@project_blueprint.route('/insert_project', methods=['POST'])
def insert_project():
    """
    Submit a new project into the DB
    
    :return: 'Success' or an error
    """
    json_data = request.get_json()

    if not all([json_data['name'], json_data['description'], json_data['point_of_contact']]):
        print("Could not complete request. Required data missing.", flush=True)
        return "Could not complete request. Required data missing.", 500

    database = current_app.config['database']
    response = db_insert_project(database, json_data['name'], json_data['description'], json_data['point_of_contact'])

    if not response:
        print("Could not complete request. Please check postgres logs.", flush=True)
        return "Could not complete request. Please check postgres logs.", 500

    return response, 200


@project_blueprint.route('/update_project', methods=['POST'])
def update_project() -> json:
    """
    Update the project specified in the JSON

    :return: 'Success' or an error
    """
    json_data = request.get_json()

    if not all([json_data['name'], json_data['description'], json_data['point_of_contact']]):
        print("Could not complete request. Required data missing.", flush=True)
        return "Could not complete request. Required data missing.", 500
    
    database = current_app.config['database']
    response = db_update_project(database, json_data['name'], json_data['description'], json_data['point_of_contact'])

    if not response:
        print("Could not complete request. Please check postgres logs.", flush=True)
        return "Could not complete request. Please check postgres logs.", 500

    return response, 200


@project_blueprint.route('/delete_project', methods=['POST'])
def delete_project():
    """
    Delete a project from the DB based on project_name
    :JSON param project_name: :JSON param project_name: The project that the document will be inserted underThe project that the document will be inserted under

    :return: 'Success' or an error
    """
    json_data = request.get_json()

    if not json_data['project_name']:
        print("Could not complete request. Required data missing.", flush=True)
        return "Could not complete request. Required data missing.", 500

    database = current_app.config['database']
    response = db_delete_project(database, json_data['project_name'])

    if response == 0:
        print("Could not complete request. Project not found in database.", flush=True)
        return "Could not complete request. Project not found in the database.", 500
    elif not response:
        print("Could not complete request. Please check postgres logs.", flush=True)
        return "Could not complete request. Please check postgres logs.", 500

    current_app.config['active_project'] = None

    return 'Success', 200


@project_blueprint.route('/get_project', methods=['POST'])
def get_project():
    """
    Get the db entry for a specified project
    :JSON param project_name: The project that the document will be inserted under

    :return: db entry for specified project
    """
    json_data = request.get_json()

    if not json_data['project_name']:
        print("Could not complete request. No project name provided.", flush=True)
        return "Could not complete request. No project name provided.", 500

    database = current_app.config['database']
    response = db_get_project(database, json_data['project_name'])

    if response == 0:
        print("Could not complete request. Project not found in database.", flush=True)
        return "Could not complete request. Project not found in the database.", 500
    elif not response:
        print("Could not complete request. Please check postgres logs.", flush=True)
        return "Could not complete request. Please check postgres logs.", 500
    
    return json.dumps({'project': response}), 200


@project_blueprint.route("/export_project", methods=["POST"])
def export_project():
    database = current_app.config["database"]
    json_data = request.get_json()
    project_name = json_data["project_name"]
    project_json = db_get_project(database, project_name)
    del project_json["name"]
    del project_json["description"]
    del project_json["point_of_contact"]

    # TODO : Make this more efficient, maybe just use PID as the folder name to make it more thread safe instead of locking?
    # TODO : Find a way to delete the files after I send them out. Something like flask after request maybe?
    # Maybe response like here from Garrett https://stackoverflow.com/questions/24612366/delete-an-uploaded-file-after-downloading-it-from-flask
    with file_lock:
        folder_path = "/tmp/" + project_name
        if not os.path.exists(folder_path):
            os.mkdir(folder_path)

        for key in project_json:
            if(project_json[key] != None):
                with open(folder_path + "/" + project_name + " - " + to_nice_name(key) + ".json", "w") as file:
                    json.dump(project_json[key], file, indent=2)

        zipfolder = zipfile.ZipFile(folder_path + ".zip", "w", compression=zipfile.ZIP_DEFLATED)

        for root, dirs, files in os.walk(folder_path + "/"):
            for file in files:
                zipfolder.write(folder_path + "/" + file, arcname=file) 
        zipfolder.close()

    return send_file(folder_path + ".zip",
                     attachment_filename = project_name + ".zip",
                     as_attachment = True), 200


@project_blueprint.route('/get_all_projects', methods=['GET'])
def get_all_projects():
    """
    Get a list of all project names and descriptions in the DB
    
    :return: JSON list with each entry being a project name and description
    """
    database = current_app.config['database']
    response = db_get_all_projects(database)

    return json.dumps(response), 200


@project_blueprint.route('/evaluate_project', methods=['POST'])
def evaluate_project():
    """
    Get list of mismatches and missing fields for a project
    :JSON param project_name: The project to be evaluated

    :return: JSON with two lists, mismatches and missing fields
    """
    json_data = request.get_json()

    if not json_data['project_name']:
        print("Could not complete request. No project name provided.", flush=True)
        return "Could not complete request. No project name provided.", 500

    database = current_app.config['database']
    project = db_get_project(database, json_data['project_name'])

    if not project:
        print("Could not complete request. Please check postgres logs.", flush=True)
        return "Could not complete request. Please check postgres logs.", 500

    mismatches = project_mismatches_and_missing_fields(project)
    
    return mismatches, 200


@project_blueprint.route('/evaluate_project_pdf', methods=['POST'])
def evaluate_project_pdf():
    """
    Create a PDF containg list of mismatches and missing fields for a project
    :JSON param project_name: The project to be evaluated

    :return: PDF containign two lists, mismatches and missing fields
    """
    json_data = request.get_json()

    if not json_data['project_name']:
        print("Could not complete request. No project name provided.", flush=True)
        return "Could not complete request. No project name provided.", 500

    database = current_app.config['database']
    project = db_get_project(database, json_data['project_name'])

    if not project:
        print("Could not complete request. Please check postgres logs.", flush=True)
        return "Could not complete request. Please check postgres logs.", 500

    mismatches = project_mismatches_and_missing_fields(project)

    pdf = MyFPDFClass()
    pdf.add_page()

    pdf.set_font('Arial', 'B', 15)
    pdf.cell(h=10, txt='Mismatch Test Results - ' + json_data['project_name'])
    pdf.ln(20)

    font_size = 12
    line_height = 8

    pdf.set_font("Arial", 'B', size=font_size)
    pdf.write(line_height, txt='Project contains ' + str(len(mismatches['mismatches'])) + ' mismatch(es)\n')
    pdf.set_font("Arial", size=font_size)

    for (index, mismatch) in enumerate(mismatches['mismatches']):
        pdf.set_left_margin(10)
        pdf.write(line_height, txt=str(index + 1) + '. ')
        pdf.set_left_margin(15)
        pdf.write(line_height, txt=mismatch['message'] + '\n')
        pdf.set_font("Arial", 'B', size=font_size)
        pdf.write(line_height, txt='Rationale: \n')
        pdf.set_font("Arial", size=font_size)
        pdf.write(line_height, txt=mismatch['rationale'] + '\n')
        pdf.set_font("Arial", 'B', size=font_size)
        pdf.write(line_height, txt='Condition(s): \n')
        pdf.set_font("Arial", size=font_size)
        for (condition_index, condition) in enumerate(mismatch['conditions']):
            pdf.write(line_height, txt=str(condition_index + 1) + '. ' + condition + '\n')

    pdf.ln(8)
    pdf.set_font("Arial", 'B', size=font_size)
    pdf.set_left_margin(10)
    pdf.write(line_height, txt='Project is missing ' + str(len(mismatches['missing_fields'])) + ' required field(s)\n')
    pdf.set_font("Arial", size=font_size)

    for (index, missing_field) in enumerate(mismatches['missing_fields']):
        pdf.set_left_margin(10)
        pdf.write(line_height, txt=str(index + 1) + '. ')
        pdf.set_left_margin(15)
        pdf.write(line_height, txt=missing_field['descriptor'] +  ' -> ' + missing_field['field'] + '\n')
        pdf.write(line_height, txt='Rationale: ' + missing_field['rationale'] + '\n')

    response = make_response(pdf.output())
    response.headers["Content-Type"] = "application/pdf"
    return response