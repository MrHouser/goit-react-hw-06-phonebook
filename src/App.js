import { useState, useEffect } from 'react';
import shortid from 'shortid';
import Form from './components/Form/Form';
import Contacts from './components/Contacts/Contacts';
import Search from './components/Search/Search';

function App() {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');
  const [isFirstRender, setIsFirstRender] = useState(true);

  const lowerCasedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(lowerCasedFilter),
  );

  useEffect(() => {
    const storedContacts = JSON.parse(localStorage.getItem('contacts'));

    if (storedContacts) {
      setContacts(storedContacts);
    }
  }, []);

  useEffect(() => {
    if (isFirstRender) {
      setIsFirstRender(false);
      return;
    }
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const submitHandler = data => {
    setContacts(prevContacts => [
      ...prevContacts,
      { id: shortid.generate(), ...data },
    ]);
  };

  const deleteContact = contactId => {
    setContacts(contacts =>
      contacts.filter(contact => contact.id !== contactId),
    );
  };

  const handleFilter = event => {
    setFilter(event.target.value);
  };

  return (
    <div className="wrapper">
      <h1 className="main-title">Phonebook</h1>
      <Form onSubmit={submitHandler} contactList={contacts} />
      <h2 className="title">Contacts</h2>
      <Search value={filter} onSearch={handleFilter} />
      <Contacts contacts={filteredContacts} onDelete={deleteContact} />
    </div>
  );
}

export default App;
