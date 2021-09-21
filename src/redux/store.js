import { createStore } from 'redux';

const initialState = {
  contacts: {
    items: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  },
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'add-contact':
      return {
        ...state,
        contacts: {
          ...state.contacts,
          items: [...state.contacts.items, payload],
        },
      };

    case 'delete-contact':
      return {
        ...state,
        contacts: {
          ...state.contacts,
          items: state.contacts.items.filter(item => item.id !== payload),
        },
      };

    case 'filter-contacts':
      return {
        ...state,
        contacts: {
          ...state.contacts,
          filter: payload.target.value,
        },
      };

    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
