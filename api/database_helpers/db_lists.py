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


def db_get_programming_languages(database):
    """
    Get all programming languages in the database

    :return: List of all of the languages
    """
    cursor = database.connection.cursor(cursor_factory=RealDictCursor)

    try:
        cursor.execute('SELECT language_name FROM programming_languages')
        result = cursor.fetchall()
        return result
    except:
        database.connection.rollback()
        raise
    finally:
        cursor.close()
        database.connection.commit()


def db_add_programming_language(database, programming_language):
    """
    Adds the language to the DB

    :return: Success
    """
    cursor = database.connection.cursor()

    try:
        record_to_insert = (str(programming_language),)
        query = """
                INSERT INTO programming_languages (language_name) VALUES (%s)
                """
        cursor.execute(query, record_to_insert)
        return 'Success'
    except:
        database.connection.rollback()
        raise
    finally:
        cursor.close()
        database.connection.commit()


def db_get_ml_frameworks(database):
    """
    Get all ml frameworks in the database

    :return: List of all of the frameworks
    """
    cursor = database.connection.cursor(cursor_factory=RealDictCursor)

    try:
        cursor.execute('SELECT framework_name FROM ml_frameworks')
        result = cursor.fetchall()
        return result
    except:
        database.connection.rollback()
        raise
    finally:
        cursor.close()
        database.connection.commit()


def db_add_ml_framework(database, framework_name):
    """
    Adds the framework to the DB

    :return: Success
    """
    cursor = database.connection.cursor()

    try:
        record_to_insert = (str(framework_name),)
        query = """
                INSERT INTO ml_frameworks (framework_name) VALUES (%s)
                """
        cursor.execute(query, record_to_insert)
        return 'Success'
    except:
        database.connection.rollback()
        raise
    finally:
        cursor.close()
        database.connection.commit()


def db_get_statistics(database):
    """
    Get all statistics in the database

    :return: List of all of the statistics
    """
    cursor = database.connection.cursor(cursor_factory=RealDictCursor)

    try:
        cursor.execute('SELECT statistic_name FROM statistic_list')
        result = cursor.fetchall()
        return result
    except:
        database.connection.rollback()
        raise
    finally:
        cursor.close()
        database.connection.commit()


def db_add_statistic(database, statistic):
    """
    Adds the statistic to the DB

    :return: Success
    """
    cursor = database.connection.cursor()

    try:
        record_to_insert = (str(statistic),)
        query = """
                INSERT INTO statistic_list (statistic_name) VALUES (%s)
                """
        cursor.execute(query, record_to_insert)
        return 'Success'
    except:
        database.connection.rollback()
        raise
    finally:
        cursor.close()
        database.connection.commit()


def db_get_item_types(database):
    """
    Get all item types in the database

    :return: List of all of the item types
    """
    cursor = database.connection.cursor(cursor_factory=RealDictCursor)

    try:
        cursor.execute('SELECT item_type FROM item_types')
        result = cursor.fetchall()
        return result
    except:
        database.connection.rollback()
        raise
    finally:
        cursor.close()
        database.connection.commit()


def db_add_item_type(database, item_type):
    """
    Adds the item type to the DB

    :return: Success
    """
    cursor = database.connection.cursor()

    try:
        record_to_insert = (str(item_type),)
        query = """
                INSERT INTO item_types (item_type) VALUES (%s)
                """
        cursor.execute(query, record_to_insert)
        return 'Success'
    except:
        database.connection.rollback()
        raise
    finally:
        cursor.close()
        database.connection.commit()