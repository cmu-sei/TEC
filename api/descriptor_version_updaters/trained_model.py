from helpers.util import update_dict_key_preserve_order, insert_dict_key_preserve_order


def tm_convert_1_0_to_1_1(document):
    """
    """
    document['version'] = '1.1'

    for i in range(0, len(document['algorithm_metrics'])):
        item = document['algorithm_metrics'][i]
        item = insert_dict_key_preserve_order(item, 'metric', 'operator', '')
        item = insert_dict_key_preserve_order(item, 'threshold', 'goal_mapping', '')
        document['algorithm_metrics'][i] = item

    for i in range(0, len(document['business_metrics'])):
        item = document['business_metrics'][i]
        item = insert_dict_key_preserve_order(item, 'metric', 'operator', '')
        item = update_dict_key_preserve_order(item, 'business_goal_mapping', 'goal_mapping')
        item['goal_mapping'] = item['goal_mapping'][1:]
        document['business_metrics'][i] = item

    return document