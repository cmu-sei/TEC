from helpers.util import insert_dict_key_preserve_order


def pe_convert_1_0_to_1_1(document):
    """
    """
    document['version'] = '1.1'
    document = insert_dict_key_preserve_order(document, 'computing_resources', 'deployment_platform', '')
    document = insert_dict_key_preserve_order(document, 'deployment_platform', 'deployment_mechanism', '')

    return document


def pe_convert_1_1_to_1_2(document):
    """
    """
    document['version'] = '1.2'
    return document