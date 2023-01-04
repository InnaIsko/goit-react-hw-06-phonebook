import { ContactListItem } from './ContactListItem';
import { useSelector, useDispatch } from 'react-redux';
import { deliteContact } from 'redux/store';

export function ContactList() {
  const contacts = useSelector(state => state.contacts);

  const dispatch = useDispatch();

  return (
    <ul>
      {contacts.map(contact => (
        <ContactListItem
          onContactInfo={contact}
          key={contact.id}
          onButtonDelite={() => dispatch(deliteContact(contact.id))}
        />
      ))}
    </ul>
  );
}
