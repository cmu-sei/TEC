# TEC

## Introduction

The Mismatch Analysis Tool, TEC is used to aid the user in properly filling out the descriptors developed during the ML Mismatch LENS and then the tool detects mismatches on the information supplied. These mismatches will then be displayed to the user providing them information about what the mismatch was, and what the potential impact is if the mismatch is not addressed. 

## Usage

### Prerequisites

In order to build and run this project, you will need to have both Docker and Docker Compose installed on your machine. 

### Initializing submodules

TEC makes use of the ML Mismatch Descriptors as a submodule. After you have cloned this repository, simply run this command to have the submodule pulled in and initialized.

```bash
$ git submodule update --init --recursive
```

The ML Mismatch Descriptors repository itself can be found here: https://github.com/cmu-sei/ml-mismatch-descriptors

### Proxy Settings

Configure any proxy settings needed to work in your environment. This is adjusted in the `proxy.env` file.

### Running TEC

The final step is to run the docker-compose file. First ensure that docker is running on your machine and then run the command below. Once this is done, the TEC will be accessible on port 3000 of the machine. If needed, this can be adjusted in the `docker-compose.yml` file.

```bash
# Build and run the project in detached mode
$ docker-compose up --build -d
```

When finished, this command can be used to tear down the project. 

```bash
# Tear down the project
$ docker-compose down
```