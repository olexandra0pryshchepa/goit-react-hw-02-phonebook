import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import ContactForm from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactsList } from './ContactsList/ContactsList';


export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleAddContact = contactData => {
    const { name, number } = contactData;
    const hasDublicates = this.state.contacts.some(
      contact =>
        contact.name.toLowerCase() === name.toLowerCase() ||
        contact.number.toLowerCase() === number.toLowerCase()
    );

    if (hasDublicates) {
      alert('This contact is already exist!');
      return;
    }
    const newContact = {
      ...contactData,
      id: nanoid(),
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  handleContactSearch = evt => {
    const value = evt.target.value;
    this.setState({ filter: value });
  };

  handleDeleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  handleFilterContacts = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  render() {
    return (
      <div className="phonebook">
        <h1>Phonebook</h1>
        <ContactForm
          onAdd={this.handleAddContact}
          contacts={this.state.contacts}
        />
        <h2>Contacts</h2>
        <Filter
          filter={this.state.filter}
          handleContactSearch={this.handleContactSearch}
        />
        <ContactsList
          contacts={this.handleFilterContacts()}
          handleDeleteContact={this.handleDeleteContact}
        />
      </div>
    );
  }
};





