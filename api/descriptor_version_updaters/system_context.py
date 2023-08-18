from helpers.util import update_dict_key_preserve_order


def sc_convert_1_0_to_1_1(document):
    """
    """
    document['version'] = '1.1'
    document = update_dict_key_preserve_order(document, 'business_goals', 'goals')
    for goal in document['goals']:
        goal['id'] = goal['id'][1:]
        goal['metric'] = ''
        goal['baseline'] = ''

    criteria_csv = ''
    for criteria in document['success_criteria']:
        criteria_csv += criteria + ', '

    document['goals'][0]['metric'] = criteria_csv
    document.pop('success_criteria')

    return document