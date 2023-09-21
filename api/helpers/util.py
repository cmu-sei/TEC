def update_dict_key_preserve_order(dict, old_key, new_key):
    """
    Replaces dict['old_key'] with dict['new_key'] preserving the value and order of the dict.
    Only works on top level dict items. 
    """
    index = list(dict.keys()).index(old_key)
    items = list(dict.items())
    items.insert(index + 1, (new_key, None))
    dict = dict(items)
    dict[new_key] = dict.pop(old_key)

    return dict


def insert_dict_key_preserve_order(dict, prev_key, new_key, new_value):
    """
    Adds dict['new_key'] = value to the dict immediately after dict['prev_key']
    Only works on top level dict items.
    """
    index = list(dict.keys()).index(prev_key)
    items = list(dict.items())
    items.insert(index + 1, (new_key, None))
    dict = dict(items)
    dict[new_key] = new_value

    return dict


def to_nice_name(descriptor_name):
    nice_name = descriptor_name.replace("_", " ")
    nice_name = str.title(nice_name)
    return nice_name