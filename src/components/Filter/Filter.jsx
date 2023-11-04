import React from 'react';

export const Filter = ({ filter, handleContactSearch }) => {
  return (
    <label>
      <input type="text" value={filter} onChange={handleContactSearch}></input>
    </label>
  );
};