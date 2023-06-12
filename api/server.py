# TEC - Automated Mismatch Detection Tool
# Copyright 2023 Carnegie Mellon University.
# NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.
# Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.
# [DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.
# This Software was created using the SEI Design System and includes and/or makes use of Third-Party Software subject to its own license.
# DM23-0003

import os
from flask import Flask
from flask.helpers import send_from_directory
from os import error

from blueprints.project import *
from blueprints.documents import *
from blueprints.db_lists import *
from config import config
from db.database_init import DatabaseManager


def create_application():
    """
    Initialize our flask application

    :return: Flask application
    """

    # Initialize the app
    app = Flask(__name__, static_url_path=None)

    app.config['JSON_SORT_KEYS'] = False
    app.config['latest_descriptor_version'] = '1.1'

    app.register_blueprint(project_blueprint, url_prefix='/project')
    app.register_blueprint(documents_blueprint, url_prefix='/documents')
    app.register_blueprint(db_lists_blueprint, url_prefix='/db_lists')

    # Main route
    @app.route('/', methods = ['GET'])
    def index():
        message = 'Running mismatch api'
        app.logger.debug(message)
        return message

    # Initiate the database connection right before the first call to the application
    @app.before_first_request
    def first_request():
        app.config['database'] = DatabaseManager()

    # Getting the schemas the descriptor submodule
    @app.route('/get_schema/<schema_name>', methods = ['GET', 'POST'])
    def schema(schema_name: str):
        dir_path = os.path.dirname(os.path.realpath(__file__))
        dir_path = dir_path + '/ml-mismatch-descriptors/schemas/' + app.config['latest_descriptor_version']

        try:
            return send_from_directory(dir_path, schema_name, as_attachment=True)
        except error:
            print(error, flush=True)
            return 'Failed'

    return app


if __name__ == '__main__':
    # Get and start the flask application
    application = create_application()

    # Configure host and port
    host = os.getenv('HOST', config['host'])
    port = os.getenv('PORT', config['port'])

    # Run application
    application.run(host,port)