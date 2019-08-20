import React from "react"

const { TextField } = require('blocks-react').Input;
const { Dropdown, DropdownTrigger, DropdownItem } = require('blocks-react').Dropdowns;

class TextFieldDropdownExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      unitValue: 'ft'
    };

    this.testOptions = [
      {text: 'ft', value: 'ft'},
      {text: 'cm', value: 'cm'},
      {text: 'm', value: 'm'}
    ];
  }

  render() {
    return (
      <div className="blx-text-field-with-dropdown">
        <TextField
          label={"Text input label"}
          placeholder={"100,000"}
          value={this.state.value}
          onChange={(e) => this.setState({ value: e.target.value })}
        />
        <Dropdown
          trigger={
            <DropdownTrigger>
              { this.state.unitValue }
            </DropdownTrigger>
          }
        >
          {
            this.testOptions.map((option, idx) => (
              <DropdownItem
                key={option.text}
                selected={option.value === this.state.unitValue }
                onClick={(e) => this.setState({ unitValue: option.value })}
              >
                { option.text }
              </DropdownItem>
            ))
          }
        </Dropdown>
      </div>
    );
  }
}

export default TextFieldDropdownExample;
