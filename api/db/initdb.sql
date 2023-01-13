-- TEC - Automated Mismatch Detection Tool
-- Copyright 2023 Carnegie Mellon University.
-- NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.
-- Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.
-- [DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.
-- This Software was created using the SEI Design System and includes and/or makes use of Third-Party Software subject to its own license.
-- DM23-0003


CREATE TABLE IF NOT EXISTS projects
(
    project_uuid UUID NOT NULL,
    name VARCHAR NOT NULL UNIQUE,
    description VARCHAR NOT NULL,
    point_of_contact VARCHAR, 

    PRIMARY KEY(project_uuid)
);

CREATE TABLE IF NOT EXISTS system_context
(
    document_uuid UUID NOT NULL,
    project_uuid UUID NOT NULL UNIQUE,
    document JSON NOT NULL,
    CONSTRAINT fk_project
      FOREIGN KEY(project_uuid) 
	    REFERENCES projects(project_uuid)
	    ON DELETE CASCADE,

    PRIMARY KEY(document_uuid)
);

CREATE TABLE IF NOT EXISTS raw_data
(
    document_uuid UUID NOT NULL,
    project_uuid UUID NOT NULL UNIQUE,
    document JSON NOT NULL,
    CONSTRAINT fk_project
      FOREIGN KEY(project_uuid) 
	    REFERENCES projects(project_uuid)
	    ON DELETE CASCADE,

    PRIMARY KEY(document_uuid)
);

CREATE TABLE IF NOT EXISTS training_data
(
    document_uuid UUID NOT NULL,
    project_uuid UUID NOT NULL  UNIQUE,
    document JSON NOT NULL,
    CONSTRAINT fk_project
      FOREIGN KEY(project_uuid) 
	    REFERENCES projects(project_uuid)
	    ON DELETE CASCADE,

    PRIMARY KEY(document_uuid)
);

CREATE TABLE IF NOT EXISTS data_pipeline
(
    document_uuid UUID NOT NULL,
    project_uuid UUID NOT NULL UNIQUE,
    document JSON NOT NULL,
    CONSTRAINT fk_project
      FOREIGN KEY(project_uuid) 
	    REFERENCES projects(project_uuid)
	    ON DELETE CASCADE,

    PRIMARY KEY(document_uuid)
);

CREATE TABLE IF NOT EXISTS trained_model
(
    document_uuid UUID NOT NULL,
    project_uuid UUID NOT NULL UNIQUE,
    document JSON NOT NULL,
    CONSTRAINT fk_project
      FOREIGN KEY(project_uuid) 
	    REFERENCES projects(project_uuid)
	    ON DELETE CASCADE,

    PRIMARY KEY(document_uuid)
);

CREATE TABLE IF NOT EXISTS development_environment
(
    document_uuid UUID NOT NULL,
    project_uuid UUID NOT NULL UNIQUE,
    document JSON NOT NULL,
    CONSTRAINT fk_project
      FOREIGN KEY(project_uuid) 
	    REFERENCES projects(project_uuid)
	    ON DELETE CASCADE,

    PRIMARY KEY(document_uuid)
);

CREATE TABLE IF NOT EXISTS production_environment
(
    document_uuid UUID NOT NULL,
    project_uuid UUID NOT NULL UNIQUE,
    document JSON NOT NULL,
    CONSTRAINT fk_project
      FOREIGN KEY(project_uuid) 
	    REFERENCES projects(project_uuid)
	    ON DELETE CASCADE,

    PRIMARY KEY(document_uuid)
);

CREATE TABLE IF NOT EXISTS production_data
(
    document_uuid UUID NOT NULL,
    project_uuid UUID NOT NULL UNIQUE,
    document JSON NOT NULL,
    CONSTRAINT fk_project
      FOREIGN KEY(project_uuid) 
	    REFERENCES projects(project_uuid)
	    ON DELETE CASCADE,

    PRIMARY KEY(document_uuid)
);

CREATE TABLE IF NOT EXISTS ml_frameworks
(
    framework_name VARCHAR NOT NULL UNIQUE,

    PRIMARY KEY(framework_name)
);

INSERT INTO ml_frameworks(framework_name)
VALUES('Caffe'),
        ('Huggingface'),
        ('Keras'),
        ('MLflow'),
        ('PyTorch'),
        ('scikit-learn'),
        ('Spark ML'),
        ('TensorFlow'),
        ('Torch'),
        ('Weka'),
        ('DataRobot'),
        ('BayesiaLab'),
        ('Statistica'),
        ('KNIME'),
        ('RapidMiner'),
        ('DataBricks'),
        ('H2O'),
        ('Dataiku'),
        ('Tibco Data Science'),
        ('IBM Watson Studio'),
        ('Azure ML'),
        ('Amazon SageMaker');

CREATE TABLE IF NOT EXISTS programming_languages
(
    language_name VARCHAR NOT NULL UNIQUE,

    PRIMARY KEY(language_name)
);

INSERT INTO programming_languages(language_name)
VALUES('C'),
        ('C++'),
        ('C#'),
        ('Java'),
        ('Javascript'),
        ('Julia'),
        ('Matlab'),
        ('PHP'),
        ('Python'),
        ('R'),
        ('Ruby'),
        ('Scala'),
        ('Perl'),
        ('Mathematica'),
        ('SPSS'),
        ('SQL'),
        ('SAS');

CREATE TABLE IF NOT EXISTS statistic_list
(
    statistic_name VARCHAR NOT NULL UNIQUE,

    PRIMARY KEY(statistic_name)
);

INSERT INTO statistic_list(statistic_name)
VALUES('Mean'),
        ('Distribution Type'),
        ('Median'),
        ('Trimean'),
        ('Standard Deviation'),
        ('First Quartile'),
        ('Third Quartile'),
        ('IQR'),
        ('Skew'),
        ('Kurtosis'),
        ('Gini Coefficient'),
        ('Entropy');

CREATE TABLE IF NOT EXISTS item_types
(
    item_type VARCHAR NOT NULL UNIQUE,

    PRIMARY KEY(item_type)
);

INSERT INTO item_types(item_type)
VALUES('Integer'),
        ('Float'),
        ('String'),
        ('Image'),
        ('Text'),
        ('Character');