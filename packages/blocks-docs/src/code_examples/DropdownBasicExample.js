import React from "react"

const { Dropdown } = require('blocks-react').Dropdowns;

class DropdownBasicExample extends React.Component {
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
        scrollable
        value={this.state.selectedValue}
        onChange={evt => this.setState({ selectedValue: evt.value })}
        options={
          [
            { value: 'option1', text: 'One option' },
            { value: 'option2', text: 'Using regular link', href: '/components/checkboxes' },
            { value: 'option2', text: 'Using react link', href: '/' },
            { value: 'option3', text: 'Disabled option', disabled: true },
            { value: 'option5', text: 'Different option' },
            { value: 'option6', text: 'Longer named option that should overflow' },
            { value: 'option7', text: 'Google', newTab: true, href: 'https://www.google.com' }
          ]
        }
      />
    );
  }
}

export default DropdownBasicExample;
