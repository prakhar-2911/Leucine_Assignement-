import React from 'react';
import styled from 'styled-components';
import Input from './components/input';
import Dropdown from './components/dropdown';
import constants from './constants';
import Group from './components/group';
import Button from './components/button';

import './styles.css';
const Container = styled.div`
  width: 25%;
  padding: 2rem 1rem;
  margin: auto;
  display: flex;
  flex-direction: column;
`;

const Flexbox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  flex-direction: column;
`;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      target_residue_type: ''
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleDropdown = this.handleDropdown.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput() { }

  handleDropdown(e) {
    this.setState({
      target_residue_type: e.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const obj = {};
    for (let element of document.forms.leucene.elements) {
      if (element.name) {
        obj[element.name] = element.value;
      }
    }
    window.localStorage.setItem('form', JSON.stringify(obj));
  }

  render() {
    return (
      <form name="leucene">
        <Container>
          <Flexbox>
            {constants.sections[0].fields.map(field => {
              if (field.type === 'dropdown') {
                return (
                  <Dropdown
                    key={field.name}
                    {...field}
                    handleChange={this.handleDropdown}
                  />
                );
              }
              return (
                <Input
                  key={field.name}
                  {...field}
                  handleChange={this.handleInput}
                />
              );
            })}

            {(this.state.target_residue_type) && (
              <Group
                selected={this.state.target_residue_type}
                key={this.state.target_residue_type}
                {...constants.customSection[this.state.target_residue_type]}
              />
            )}
            {constants.sections[1].fields.map(field => {
              return (
                <Input
                  key={field.name}
                  {...field}
                  handleChange={this.handleInput}
                />
              );
            })}
            <Button type="submit" onClick={this.handleSubmit}>Submit</Button>
          </Flexbox>
        </Container>
      </form>
    );
  }
}

export default App;
