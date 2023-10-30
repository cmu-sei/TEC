from helpers.util import insert_dict_key_preserve_order


def rd_convert_1_0_to_1_1(document):
    """
    """
    document['version'] = '1.1'
    document = insert_dict_key_preserve_order(document, 'restrictions', 'data_rights', '')
    document = insert_dict_key_preserve_order(document, 'data_rights', 'data_policies', '')

    return document


def rd_convert_1_1_to_1_2(document):
    """
    """
    document['version'] = '1.2'
    return document