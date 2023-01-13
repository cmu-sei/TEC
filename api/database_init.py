# TEC - Automated Mismatch Detection Tool
# Copyright 2023 Carnegie Mellon University.
# NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.
# Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.
# [DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.
# This Software was created using the SEI Design System and includes and/or makes use of Third-Party Software subject to its own license.
# DM23-0003


import psycopg2
import psycopg2.extras
from config import config
from flask import current_app

POSTGRES_HOST = config['postgres']['host']
POSTGRES_PORT = config['postgres']['port']
POSTGRES_DB = config['postgres']['name']
POSTGRES_USER = config['postgres']['user']
POSTGRES_PASSWORD = config['postgres']['password']

class DatabaseManager:
    """
    Handles reads/writes to the PostgreSQL database
    """
    def __init__(self):
        self.connection = None
        self.start_db_connection()


    def start_db_connection(self) -> None:
        """
        Opens a connection with the PostgreSQL database
        """
        current_app.logger.info("Starting connection to psql database")
        self.connection = psycopg2.connect(
            host=POSTGRES_HOST,
            port=POSTGRES_PORT,
            database=POSTGRES_DB,
            user=POSTGRES_USER,
            password=POSTGRES_PASSWORD
        )
        current_app.logger.info("Connection accepted - {}".format(self.test_db_connection()))

    
    def test_db_connection(self) -> str:
        """
        Test the database connection
        :return: Database version as string
        """
        db_version = ""
        cursor = self.connection.cursor()
        cursor.execute("SELECT version()")
        db_version = cursor.fetchone()
        cursor.close()

        return db_version