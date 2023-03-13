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

from psycopg2.extras import RealDictCursor


def db_insert_project(database, name, description, point_of_contact):
    """
    Insert a new project into the projects table

    :return: 'Success' or error
    """
    # Create cursor and insert new record in table
    cursor = database.connection.cursor()

    try:
        query_data = (name, description, point_of_contact)
        query = """
                INSERT INTO projects (name, description, point_of_contact)
                VALUES (%s, %s, %s)
                """
        cursor.execute(query, query_data)
        return 'Success'
    except:
        database.connection.rollback()
        raise
    finally:
        cursor.close()
        database.connection.commit()


def db_update_project(database, name, description, point_of_contact):
    """
    Updates a project entry

    :return: 'Success' or error
    """
    cursor = database.connection.cursor()

    try:
        query_data = (name, description, point_of_contact, name)
        query = """
                UPDATE projects
                SET
                    name = %s,
                    description = %s,
                    point_of_contact = %s
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


def db_delete_project(database, project_name):
    """
    Delete a project from the projects table based on project_name

    :return: 0 if entry is not in the database, 'Success' for a successful deletion, or an error
    """
    cursor = database.connection.cursor()

    try:
        cursor.execute('DELETE FROM projects WHERE name = %s', (project_name,))
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

    :return: 0 if the entry is not in the database, project db entry for specified project
    """
    cursor = database.connection.cursor(cursor_factory=RealDictCursor)

    try:
        cursor.execute('SELECT * FROM projects WHERE name = %s', (project_name,))
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