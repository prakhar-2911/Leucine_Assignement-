import React from "react";
import Select from "react-select";
import Wrapper from './wrapper';
import Label from './label'
import styled from 'styled-components';

const StyledSelect = styled(Select)`
  margin-top: 0.5rem;
`;

function Dropdown({ name, label, options, handleChange, value }) {
  return (
    <Wrapper fluid>
      <Label>{label}</Label>
      <StyledSelect
        name={name}
        options={options}
        onChange={handleChange}
        value={value}
      />
    </Wrapper>
  );
}

export default Dropdown;
