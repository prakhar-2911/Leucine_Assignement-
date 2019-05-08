import React from 'react';
import styled from 'styled-components';
import Input from '../input';
import Dropdown from '../dropdown'
import Button from '../button';
import RadioGroup from '../radio-group';
import Radio from '../radio';

const Flexbox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
`;

const Card = styled(Flexbox)`
  padding: 1rem;
  box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5;
  border-radius: 4px;
`;

class Group extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: props.buttons.map(button => !button),
      openMOC: false,
      radio: null,
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleRadio = this.handleRadio.bind(this);
    this.handleMOC = this.handleMOC.bind(this);
    this.handeInput = this.handleInput.bind(this);
  }

  handleClick(id) {
    this.setState({
      open: this.state.open.map((item, index) => (index === id) ? !item : item)
    });
  }

  handleInput(){}

  handleRadio(e) {
    this.setState({
      radio: e.target.value
    })
  }

  handleMOC(e){
    this.setState({openMOC: true});
  }

  render() {
    return (
      <Flexbox>
        {this.props.fields.map(field => {
          if (field.type === 'radio') {
            return (
              <RadioGroup
                fluid={field.fluid}
                key={field.name}
                label={field.label}
              >
                {field.options.map(option => (
                  <Radio
                    key={option.id}
                    id={option.id}
                    label={option.label}
                    name={field.name}
                    value={this.state.radio}
                    handleChange={this.handleRadio}
                  />
                ))}
              </RadioGroup>
            );
          }

          return (
            <Input
              key={field.name}
              {...field}
              handleChange={this.props.handleInput}
            />
          );
        })}

        {this.state.radio === 'yes' && (
          <Flexbox>
            {this.props.radioSection.fields.map(field => {
              if (field.type === 'radio') {
                return (
                  <RadioGroup
                    fluid={field.fluid}
                    key={field.name}
                    label={field.label}
                  >
                    {field.options.map(option => (
                      <Radio
                        key={option.id}
                        id={option.id}
                        label={option.label}
                        name={field.name}
                        value={this.state.radio}
                      />
                    ))}
                  </RadioGroup>
                );
              }

              return (
                <Input
                  key={field.name}
                  {...field}
                  handleChange={this.props.handleInput}
                />
              );
            })}
          </Flexbox>
        )}

        {this.props.buttons && (
          <Flexbox>
            {this.props.buttons.map((button, index) => (
              <React.Fragment key={button.name}>
                <Button
                  primary={this.state.open[index]}
                  type="button"
                  onClick={() => this.handleClick(index)}
                >
                  {this.state.open[index]
                    ? button.button.close
                    : button.button.open}
                </Button>
                {this.state.open[index] && (
                  <Card>
                    {button.fields.map(field => {
                      if (field.type === 'radio') {
                        return (
                          <RadioGroup
                            fluid={field.fluid}
                            key={field.name}
                            label={field.label}
                          >
                            {field.options.map(option => (
                              <Radio
                                key={option.id}
                                id={option.id}
                                label={option.label}
                                name={field.name}
                                value={this.state.radio}
                              />
                            ))}
                          </RadioGroup>
                          
                        );
                      }
                      
                      return (
                        <Input
                          key={field.name}
                          {...field}
                          handleChange={this.props.handleInput}
                        />
                        
                      )
                      
                    })
                    }
                    {
                      (this.state.openMOC) || <Button type="button" onClick={(event) => this.handleMOC(event)}>ADD MOC</Button>
        
                    }
                    {
                      (this.state.openMOC) && 
                      <Card>
                          {button.MOCButton.fields.map(field => {
                            if (field.type === 'dropdown') {
                              return (
                                <Dropdown
                                  key={field.name}
                                  {...field}
                                  
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
                            })
                            }
                            <Button type="button"> Add another or create a new MOC</Button>
                      </Card>
                        
                    }
                    
                  </Card>
                )}
              </React.Fragment>
            ))}
          </Flexbox>
        )}
      </Flexbox>
    );
  }
}

export default Group;
