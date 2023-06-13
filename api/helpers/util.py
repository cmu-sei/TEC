def update_dict_key_preserve_order(document, old_key, new_key):
    """
    """
    index = list(document.keys()).index(old_key)
    items = list(document.items())
    items.insert(index + 1, (new_key, None))
    document = dict(items)
    document[new_key] = document.pop(old_key)

    return document


def insert_dict_key_preserve_order(document, prev_key, new_key, new_value):
    """
    """
    index = list(document.keys()).index(prev_key)
    items = list(document.items())
    items.insert(index + 1, (new_key, None))
    document = dict(items)
    document[new_key] = new_value

    return document


def to_nice_name(descriptor_name):
    nice_name = descriptor_name.replace("_", " ")
    nice_name = str.title(nice_name)
    return nice_name