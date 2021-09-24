import shortid from 'shortid';
import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact } from './actions';

const contactsReducer = createReducer([], {
  [addContact]: (state, { payload }) => [
    ...state,
    {
      id: shortid.generate(),
      ...payload,
    },
  ],
  [deleteContact]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});
