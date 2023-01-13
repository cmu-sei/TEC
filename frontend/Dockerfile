# TEC - Automated Mismatch Detection Tool
# Copyright 2023 Carnegie Mellon University.
# NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.
# Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.
# [DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.
# This Software was created using the SEI Design System and includes and/or makes use of Third-Party Software subject to its own license.
# DM23-0003


# Need this specific version of node for SEI Design System to work
FROM node:14.17.6-alpine3.13

# Update and install dependency
RUN apk update && apk upgrade

RUN mkdir -p /frontend
WORKDIR /frontend
COPY . /frontend/

# Setup SEI Design System
RUN npm install -D tailwindcss@^3 postcss@latest autoprefixer@latest @nuxt/postcss8
RUN npm install -D @tailwindcss/aspect-ratio@latest @tailwindcss/forms@latest @tailwindcss/line-clamp@latest @tailwindcss/typography@latest
RUN npm install -D /frontend/sds/@sds/tailwindcss-3 /frontend/sds/@sds/components-vue2

# Reinstall node modules
RUN npm install

RUN npm install @nuxtjs/axios

# Specifying ports, NUXT likes 3000
EXPOSE 3000

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

# Dev
# CMD [ "npm", "run", "dev"]

# Prod
RUN npm run build
CMD ["npm", "run", "start"]