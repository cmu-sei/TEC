from helpers.util import insert_dict_key_preserve_order


def dp_convert_1_0_to_1_1(document):
    """
    """
    document['version'] = '1.1'
    
    return document

def dp_convert_1_1_to_1_2(document):
    """
    """
    document['version'] = '1.2'
    for i in range(0, len(document['input_spec'])):
        item = document['input_spec'][i]
        item = insert_dict_key_preserve_order(item, 'item_type', 'item_specification', 
            {
                'other_value': '',
                'min_value': 0,
                'max_value': 0,
                'resolution_x': 0,
                'resolution_y': 0,
                'channels': 0,
                'image_format': "",
                'min_length': 0,
                'max_length': 0,
                'empty': False,
                'numeric': False,
                'slashes': False,
                'spaces': False,
                'special': False
            }
        )
        item['item_specification']['other_value'] = item['expected_values']
        item.pop('expected_values')
        item = insert_dict_key_preserve_order(item, 'item_specification', 'error_handling',
            {
                'error_type': '',
                'error_code_value': 0
            }
        )
        document['input_spec'][i] = item

    return document