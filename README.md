# TEC

## Introduction

The development and operation of ML-enabled systems involves three workflows

- The *Model Development* workflow produces a trained model and is typically executed by data scientists or ML engineers with a background in statistics and machine learning
- The *Model Integration* workflow takes the data pipeline and trained model produced in the previous workflow, packages them as an ML component, and integrates it into an ML-enabled system — typically executed by software engineers and developers with a background in traditional software development and testing
- The *Model Operation* workflow oversees the operation and monitoring of the production ML-enabled system — typically executed by IT personnel with a background in traditional IT operations

These workflows are often executed by three different teams with three different backgrounds, tools, and even different vocabularies, which can lead to ML Mismatch.

We define ML Mismatch as a problem that occurs in the development, integration, deployment, and operation of an ML-enabled system due to incorrect assumptions made about system elements by different stakeholders that results in a negative consequence.

### Descriptors
TEC supports the explicit recording of these assumptions in a set of **eight descriptors**, shown in the diagram below in bold caps letters. The goal of the descriptors is to support the **model development to operations process**.

- System Context: Business goals, task to perform, success criteria, usage context, risks, and other business elements that influence model development, integration, deployment, operation, and evolution
- Raw Data: Unprocessed data sources from which training data is derived
- Data Pipeline: Code that prepares data for processing by the Trained Model
- Training Data: Data for model training
- Trained Model: Trained model to be deployed in a production ML-enabled system
- Development Environment: Development and computing environment in which the ML Component (data pipeline and trained model) will be tested and integrated into the ML-enabled system
- Production Environment: Computing environment in which the ML Component (data pipeline and model) will execute as part of an ML-enabled system
- Production Data: Data that is processed by the ML Component in production

### ML System Development Workflows
![System Diagram](/frontend/static/system-diagram.png)

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
