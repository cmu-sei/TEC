from descriptor_version_updaters.data_pipeline import *
from descriptor_version_updaters.development_environment import *
from descriptor_version_updaters.production_data import *
from descriptor_version_updaters.production_environment import *
from descriptor_version_updaters.raw_data import *
from descriptor_version_updaters.system_context import *
from descriptor_version_updaters.trained_model import *
from descriptor_version_updaters.training_data import *


def update_document_version(descriptor_name, document):
    if(descriptor_name == 'system_context'):
        if(document['version'] == '1.0'):
            document = sc_convert_1_0_to_1_1(document)
        if(document['version'] == '1.1'):
            document = sc_convert_1_1_to_1_2(document)

    elif(descriptor_name == 'raw_data'):
        if(document['version'] == '1.0'):
            document = rd_convert_1_0_to_1_1(document)
        if(document['version'] == '1.1'):
            document = rd_convert_1_1_to_1_2(document)

    elif(descriptor_name == 'data_pipeline'):
        if(document['version'] == '1.0'):
            document = dp_convert_1_0_to_1_1(document)
        if(document['version'] == '1.1'):
            document = dp_convert_1_1_to_1_2(document)

    elif(descriptor_name == 'training_data'):
        if(document['version'] == '1.0'):
            document = td_convert_1_0_to_1_1(document)
        if(document['version'] == '1.1'):
            document = td_convert_1_1_to_1_2(document)

    elif(descriptor_name == 'trained_model'):
        if(document['version'] == '1.0'):
            document = tm_convert_1_0_to_1_1(document)
        if(document['version'] == '1.1'):
            document = tm_convert_1_1_to_1_2(document)

    elif(descriptor_name == 'development_environment'):
        if(document['version'] == '1.0'):
            document = de_convert_1_0_to_1_1(document)
        if(document['version'] == '1.1'):
            document = de_convert_1_1_to_1_2(document)

    elif(descriptor_name == 'production_environment'):
        if(document['version'] == '1.0'):
            document = pe_convert_1_0_to_1_1(document)
        if(document['version'] == '1.1'):
            document = pe_convert_1_1_to_1_2(document)

    elif(descriptor_name == 'production_data'):
        if(document['version'] == '1.0'):
            document = pd_convert_1_0_to_1_1(document)
        if(document['version'] == '1.1'):
            document = pd_convert_1_1_to_1_2(document)

    return document