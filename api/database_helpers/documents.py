# TEC - Automated Mismatch Detection Tool
# Copyright 2023 Carnegie Mellon University.
# NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.
# Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.
# [DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.
# This Software was created using the SEI Design System and includes and/or makes use of Third-Party Software subject to its own license.
# DM23-0003


import psycopg2
import psycopg2.extras
from psycopg2.extras import RealDictCursor
import json
import uuid


def db_insert_document(database, project_uuid, descriptor_name, document):
    """
    Insert or update a document in the DB based on project name and descriptor name

    :return: 
    """
     # Create new data uuid
    document_uuid = uuid.uuid1()
    
    # Create cursor and insert new record in table
    cursor = database.connection.cursor()

    try:
        record_to_insert = (str(document_uuid.hex), str(project_uuid), str(json.dumps(document)), str(json.dumps(document)), str(project_uuid))
        query = """
                INSERT INTO """ + descriptor_name + """ (document_uuid, project_uuid, document) 
                VALUES(%s, %s, %s) 
                ON CONFLICT (project_uuid)
                DO
                UPDATE SET document = %s WHERE """ + descriptor_name + """.project_uuid = %s
                """

        cursor.execute(query, record_to_insert)
        return 'Success'
    except:
        database.connection.rollback()
        raise
    finally:
        cursor.close()
        database.connection.commit()


def db_get_document(database, project_uuid, descriptor_name):
    """
    Get information based on project_uuid and descriptor_name

    :return: document json or None
    """
    cursor = database.connection.cursor(cursor_factory=RealDictCursor)

    try:
        cursor.execute('SELECT document FROM ' + descriptor_name + ' WHERE project_uuid=%s', (project_uuid,))
        result = cursor.fetchall()
        if len(result) == 0:
            return None
        else:
            return result[0]
    except:
        database.connection.rollback()
        raise
    finally:
        cursor.close()
        database.connection.commit()


def db_delete_document(database, project_uuid, descriptor_name):
    """
    Delete document based on project_uuid and descriptor_name
    """
    cursor = database.connection.cursor()

    try:
        cursor.execute('DELETE FROM ' + descriptor_name + ' WHERE project_uuid=%s', (project_uuid,))
        return 'Success'
    except:
        database.connection.rollback()
        raise
    finally:
        cursor.close()
        database.connection.commit()



def db_get_project_from_name(database, project_name):
    """
    Get all project information from its name

    :return: project json or None
    """
    cursor = database.connection.cursor(cursor_factory=RealDictCursor)

    try:
        cursor.execute('SELECT * FROM projects WHERE name = %s', (project_name,))
        result = cursor.fetchall()
        if len(result) == 0:
            return None
        else:
            return result[0]

    except:
        database.connection.rollback()
        raise
    finally:
        cursor.close()
        database.connection.commit()