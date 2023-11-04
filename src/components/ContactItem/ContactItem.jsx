import React from 'react';
import './ContactItem.css'

export const ContactItem = ({ contact, handleDeleteContact }) => {
    const { name, number, id } = contact;

    return (
      <li>
        <span>{name}:</span>
        <span> {number}</span>

            <button
                className="delete-btn"
          type="button"
          onClick={() => {
            handleDeleteContact(id);
          }}
        >
          Delete
        </button>
      </li>
    );
};