# TEC - Automated Mismatch Detection Tool
# Copyright 2023 Carnegie Mellon University.
# NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.
# Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.
# [DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.
# This Software was created using the SEI Design System and includes and/or makes use of Third-Party Software subject to its own license.
# DM23-0003


FROM python:3.8.6-alpine3.12

USER 0

RUN mkdir /api

# Extra dependencies needed for the pip installs to happen correctly
RUN apk add gcc
RUN apk add musl-dev
RUN apk add libffi-dev
RUN apk add postgresql-dev

# Copy over and install requirements to create the base layer for this server
COPY requirements.txt /api

WORKDIR /api

RUN /usr/local/bin/python3 -m pip install --upgrade pip
RUN python3 -m pip install -r requirements.txt --no-cache-dir

# Copy over the rest of the service, so config changes don't require re-running installs
COPY . /api

CMD ["python", "server.py"]