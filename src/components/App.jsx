import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { Box } from 'components/Box';
import { useSelector, useDispatch } from 'react-redux';
import { filterContacts } from 'redux/store';
import { ContactForm } from './Form/Form';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export function App() {
  // const contacts = useSelector(state => state.contacts);

  // const dispatch = useDispatch();
  // console.log(contacts);
  // const [contacts, setContacts] = useState(
  //   JSON.parse(window.localStorage.getItem('contacts')) || []
  // );

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // const handleSabmitForm = (name, number) => {
  //   const nameFilter = contacts.some(elem => elem.name === name);

  //   if (nameFilter) {
  //     alert(`${name} is olredi in contacts`);
  //   } else {
  //     setContacts(state => {
  //       const newContacts = {
  //         name,
  //         number,
  //         id: nanoid(),
  //       };
  //       return [...state, newContacts];
  //     });
  //   }
  // };

  return (
    <Box bg="body" pl="40px" pr="40px">
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <ContactList />
      <Filter />
    </Box>
  );
}
