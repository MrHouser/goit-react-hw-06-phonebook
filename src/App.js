import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import shortid from 'shortid';
import Form from './components/Form/Form';
import Contacts from './components/Contacts/Contacts';
import Search from './components/Search/Search';
import useLocalStorage from './hooks/useLocalStorage';
import * as actions from './redux/actions';

function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.items);
  const filter = useSelector(state => state.filter);
  const [storedItems, setStoredItems] = useLocalStorage('contacts', []);
  const [isFirstRender, setIsFirstRender] = useState(true);

  const lowerCasedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(lowerCasedFilter),
  );

  useEffect(() => {
    if (isFirstRender) {
      setIsFirstRender(false);
      return;
    }
    setStoredItems(contacts);
  }, [contacts, isFirstRender, setStoredItems]);

  const deleteContact = contactId => {
    // setContacts(contacts =>
    //   contacts.filter(contact => contact.id !== contactId),
    // );
  };

  const handleFilter = event => {
    // setFilter(event.target.value);
  };

  return (
    <div className="wrapper">
      <h1 className="main-title">Phonebook</h1>
      <Form contactList={contacts} />
      <h2 className="title">Contacts</h2>
      <Search value={filter} onSearch={handleFilter} />
      <Contacts contacts={filteredContacts} onDelete={deleteContact} />
    </div>
  );
}

export default App;
