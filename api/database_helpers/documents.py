# TEC - Automated Mismatch Detection Tool
# Copyright 2023 Carnegie Mellon University.
# NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.
# Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.
# [DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.
# This Software was created using the SEI Design System and includes and/or makes use of Third-Party Software subject to its own license.
# DM23-0003


from psycopg2.extras import RealDictCursor
import json


def db_insert_document(database, project_name, descriptor_name, document):
    """
    Insert or update a document in the DB based on project name and descriptor name

    :return: 
    """
    # Create cursor and insert new record in table
    cursor = database.connection.cursor()

    try:
        query_data = (str(json.dumps(document)), project_name,)
        query = f"""
                UPDATE projects
                SET {descriptor_name} = %s
                WHERE name = %s
                """

        cursor.execute(query, query_data)
        return 'Success'
    except:
        database.connection.rollback()
        raise
    finally:
        cursor.close()
        database.connection.commit()


def db_get_document(database, project_name, descriptor_name):
    """
    Get document information based on project_name and descriptor_name

    :return: document json or None
    """
    cursor = database.connection.cursor(cursor_factory=RealDictCursor)

    try:
        cursor.execute(f'SELECT {descriptor_name} FROM projects WHERE name = %s', (project_name,))
        result = cursor.fetchall()
        if len(result) == 0:
            return None
        else:
            return result[0][descriptor_name]
    except:
        database.connection.rollback()
        raise
    finally:
        cursor.close()
        database.connection.commit()


def db_delete_document(database, project_name, descriptor_name):
    """
    Delete document based on project_name and descriptor_name. Achieved by setting it to null.
    """
    cursor = database.connection.cursor()

    try:
        query_data = (project_name,)
        query = f"""
                UPDATE projects
                SET {descriptor_name} = null
                WHERE name = %s
                """

        cursor.execute(query, query_data)
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