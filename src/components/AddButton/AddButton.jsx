import React from 'react';
import './AddButton.css';

const AddButton = ({ value, onChange }) => {
  const handleOnChange = $event => {
    $event.preventDefault();
    onChange($event.target.value);
  };

  return (
    <>
      <input
        type="text"
        value={value}
        className="input"
        placeholder="Add Todo"
        onChange={handleOnChange}
      />
      <button type="submit" className="button">
        +
      </button>
    </>
  );
};

export default AddButton;
