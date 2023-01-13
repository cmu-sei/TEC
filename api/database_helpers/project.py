# TEC - Automated Mismatch Detection Tool
# Copyright 2023 Carnegie Mellon University.
# NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.
# Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.
# [DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.
# This Software was created using the SEI Design System and includes and/or makes use of Third-Party Software subject to its own license.
# DM23-0003


import psycopg2
import psycopg2.extras
import json
import uuid

from psycopg2.extras import RealDictCursor


def db_insert_project(database, name, description, point_of_contact):
    """
    Insert a new project into the projects table

    :return: 'Success' or error
    """
    # Create new data uuid
    project_uuid = uuid.uuid1()
    
    # Create cursor and insert new record in table
    cursor = database.connection.cursor()

    try:
        record_to_insert = (str(project_uuid.hex), name, description, point_of_contact)
        query = """INSERT INTO projects (project_uuid, name, description, point_of_contact)
                VALUES (%s, %s, %s, %s)"""
        cursor.execute(query, record_to_insert)
        # return str(project_uuid.hex)
        return 'Success'
    except:
        database.connection.rollback()
        raise
    finally:
        cursor.close()
        database.connection.commit()


def db_update_project(database, project_uuid, name, description, point_of_contact):
    """
    Updates a project entry

    :return: 'Success' or error
    """
    cursor = database.connection.cursor()

    try:
        record_to_insert = (str(project_uuid), name, description, point_of_contact, str(project_uuid))
        query = """UPDATE projects
                    SET project_uuid = %s,
                        name = %s,
                        description = %s,
                        point_of_contact = %s
                    WHERE project_uuid = %s"""
        cursor.execute(query, record_to_insert)
        return 'Success'
    except:
        database.connection.rollback()
        raise
    finally:
        cursor.close()
        database.connection.commit()


def db_delete_project(database, project_name):
    """
    Delete a project from the projects table based on project_name

    :return: 0 if entry is not in the database, 'Success' for a successful deletion, or an error
    """
    cursor = database.connection.cursor()

    try:
        cursor.execute('DELETE FROM projects WHERE name=%s', (project_name,))
        count = cursor.rowcount
        if count == 0:
            return 0
        else:
            return 'Success'
    except Exception:
        database.connection.rollback()
    finally:
        cursor.close()
        database.connection.commit()


def db_get_project(database, project_name):
    """
    Get project db entry for specified project name

    :return: project db entry for specified project
    """
    cursor = database.connection.cursor(cursor_factory=RealDictCursor)

    try:
        cursor.execute('SELECT * FROM projects WHERE name=%s', (project_name,))
        count = cursor.rowcount
        if count == 0:
            return 0
        else:
            result = cursor.fetchall()
            return result[0]
    except Exception:
        database.connection.rollback()
    finally:
        cursor.close()
        database.connection.commit()


def db_get_project_documents(database, project_name):
    """
    """
    cursor = database.connection.cursor(cursor_factory=RealDictCursor)

    try:
        record_to_insert = (project_name, project_name, project_name, project_name, project_name, project_name, project_name, project_name, project_name)
        query = """
                SELECT 
                    sc.document as system_context,
                    rd.document as raw_data, 
                    dp.document as data_pipeline,
                    td.document as training_data,
                    tm.document as trained_model,
                    de.document as development_environment,
                    pe.document as production_environment,
                    pd.document as production_data
                FROM projects proj
                LEFT JOIN system_context sc ON sc.project_uuid = (SELECT project_uuid FROM projects WHERE name = %s)
                LEFT JOIN raw_data rd ON rd.project_uuid = (SELECT project_uuid FROM projects WHERE name = %s)
                LEFT JOIN data_pipeline dp ON dp.project_uuid = (SELECT project_uuid FROM projects WHERE name = %s)
                LEFT JOIN training_data td ON td.project_uuid = (SELECT project_uuid FROM projects WHERE name = %s)
                LEFT JOIN trained_model tm ON tm.project_uuid = (SELECT project_uuid FROM projects WHERE name = %s)
                LEFT JOIN development_environment de ON de.project_uuid = (SELECT project_uuid FROM projects WHERE name = %s)
                LEFT JOIN production_environment pe ON pe.project_uuid = (SELECT project_uuid FROM projects WHERE name = %s)
                LEFT JOIN production_data pd ON pd.project_uuid = (SELECT project_uuid FROM projects WHERE name = %s)
                WHERE proj.project_uuid = (SELECT project_uuid FROM projects WHERE name = %s);
                """
        cursor.execute(query, record_to_insert)
        result = cursor.fetchone()
        return result
    except Exception:
        database.connection.rollback()
    finally:
        cursor.close()
        database.connection.commit()


def db_get_all_projects(database):
    """
    Get a list of all project names and descriptions in the DB

    :return: JSON list with each entry being a project name and description
    """
    cursor = database.connection.cursor(cursor_factory=RealDictCursor)

    try:
        query = """SELECT * FROM projects"""
        cursor.execute(query)
        result = cursor.fetchall()
        return result
    except:
        database.connection.rollback()
        raise
    finally:
        cursor.close()
        database.connection.commit()