import React from "react"

const { Toggle, ToggleOption } = require('blocks-react').Input;

class ToggleBasicExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checkedValue: 'option1'
    };
  }

  onChange(e) {
    this.setState({ checkedValue: e.target.value })
  }

  render() {
    return (
      <Toggle
        name="toggle-basic-example"
        value={this.state.checkedValue}
        onChange={e => this.onChange(e)}
      >
        <ToggleOption value="option1">Option 1</ToggleOption>
        <ToggleOption value="option2">Option 2</ToggleOption>
        <ToggleOption value="option3">Option 3</ToggleOption>
      </Toggle>
    );
  }
}

export default ToggleBasicExample;
