import React from 'react';
import { ContactItem } from 'components/ContactItem/ContactItem';

export const ContactsList = ({ contacts, handleDeleteContact }) => {
  return (
    <div>
      <ul>
        {contacts.map(contact => (
          <ContactItem
            handleDeleteContact={handleDeleteContact}
            key={contact.id}
            contact={contact}
          />
        ))}
      </ul>
    </div>
  );
};