import React, { Component } from 'react';
import './ContactForm.css'

export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmit = event => {
    event.preventDefault();
    const data = {
      name: this.state.name,
      number: this.state.number,
      };
      this.props.onAdd(data);
  };

  handleNameChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleNumberChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>
            <p>Name</p>
            <input
              type="text"
              name="name"
              required
              pattern="[a-zA-Zа-яА-ЯіІїЇґҐєЄ']+"
              value={this.state.name}
              onChange={this.handleNameChange}
            />
          </label>
          <label>
            <p>Number</p>
            <input
              type="tel"
              name="number"
              required
              pattern="^\+?\d{1,4}[ .\-]?\(?\d{1,3}\)?[ .\-]?\d{1,4}[ .\-]?\d{1,4}[ .\-]?\d{1,9}$"
              title="Format: XXX-XXX-XX-XX"
              value={this.state.number}
              onChange={this.handleNumberChange}
            />
          </label>
          <button className="submit-btn" type="submit">Add contact</button>
        </form>
      </>
    );
  }
};