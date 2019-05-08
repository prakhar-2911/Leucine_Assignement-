import React from 'react';
import styled from 'styled-components';

const RadioLabel = styled.label`
  margin-right: 1.5rem;
  color: black;
  input {
    margin-right: 0.5rem;
  }
`;

function RadioInput({ id, label, value, name, handleChange }) {
  return (
    <RadioLabel
      htmlFor={id}
    >
      <input
        checked={id === value}
        id={id}
        name={name}
        onChange={handleChange}
        type="radio"
        value={id}
      />
      {label}
    </RadioLabel>
  );
}

export default RadioInput;