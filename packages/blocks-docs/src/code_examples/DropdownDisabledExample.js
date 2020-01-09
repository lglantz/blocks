import React from "react"

import  Dropdown from 'blocks-react/dist/dropdowns/Dropdown';

class DropdownDisabledExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedValue: null
    };
  }

  render() {
    return (
      <Dropdown
        text="Choose an option"
        label="Add something"
        disabled
        value={this.state.selectedValue}
        onChange={evt => this.setState({ selectedValue: evt.value })}
        options={
          [
            { value: 'option1', text: 'One option' },
            { value: 'option2', text: 'Another option', href: '#' },
            { value: 'option3', text: 'Best option' },
            { value: 'option5', text: 'Different option' },
            { value: 'option6', text: 'Longer named option that should overflow' }
          ]
        }
      />
    );
  }
}

export default DropdownDisabledExample;
