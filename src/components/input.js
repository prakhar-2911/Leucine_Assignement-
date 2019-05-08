import React from 'react';
import styled from 'styled-components';
import Wrapper from './wrapper';
import Label from './label';

const StyledInput = styled.input`
  display: block;
  border-radius: 2px;
  border: solid 1px #cacad3;
  display: block;
  height: 38px;
  line-height: 1.4;
  margin-top: 0.5rem;
  outline: none;
  padding: 0.5rem 1rem;
  width: 100%;
  box-sizing: border-box;
`;

function Input({
  name,
  label,
  handleChange,
  fluid,
  inputType,
  pattern = '',
  min = '',
}) {
  return (
    <Wrapper fluid={fluid}>
      <Label>
        {label}
        <StyledInput
          type={inputType || 'text'}
          pattern={pattern}
          min={min}
          name={name}
          onChange={handleChange}
          onBlur={(e) => {
            if (inputType === 'number' && e.target.value < 0) {
              e.target.value = 0;
            }
          }}
        />
      </Label>
    </Wrapper>
  );
}

export default Input;
