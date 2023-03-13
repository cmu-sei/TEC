-- TEC - Automated Mismatch Detection Tool
-- Copyright 2023 Carnegie Mellon University.
-- NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.
-- Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.
-- [DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.
-- This Software was created using the SEI Design System and includes and/or makes use of Third-Party Software subject to its own license.
-- DM23-0003


CREATE TABLE IF NOT EXISTS projects
(
    name VARCHAR NOT NULL UNIQUE,
    description VARCHAR NOT NULL,
    point_of_contact VARCHAR,

    system_context JSON,
    raw_data JSON,
    training_data JSON,
    data_pipeline JSON,
    trained_model JSON,
    development_environment JSON,
    production_environment JSON,
    production_data JSON,

    PRIMARY KEY(name)
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