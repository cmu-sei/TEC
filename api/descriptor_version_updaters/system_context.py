from helpers.util import update_dict_key_preserve_order


def sc_convert_1_0_to_1_1(document):
    """
    """
    document['version'] = '1.1'
    document = update_dict_key_preserve_order(document, 'business_goals', 'goals')
    for goal in document['goals']:
        goal['metric'] = ''
        goal['baseline'] = ''

    document.pop('success_criteria')

    return document