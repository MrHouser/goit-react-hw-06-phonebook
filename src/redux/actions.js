export const addContact = data => ({
  type: 'add-contact',
  payload: data,
});

export const deleteContact = id => ({
  type: 'delete-contact',
  payload: id,
});

export const filterContacts = value => ({
  type: 'filter-contacts',
  payload: value,
});
