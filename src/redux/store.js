import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contactsReducer';
import filterReducer from './filterReducer';

export const store = configureStore({
  reducer: {
    items: contactsReducer,
    filter: filterReducer,
  },
});

export default store;
