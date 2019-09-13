import React from "react"

const { Toggle } = require('blocks-react').Input;

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
        label="Example Toggle" // ARIA text
        value={this.state.checkedValue}
        options={[
          { text: 'Option 1', value: 'option1' },
          { text: 'Option 2', value: 'option2' },
          { text: 'Option 3', value: 'option3' }
        ]}
        onChange={e => this.onChange(e)}
      />
    );
  }
}

export default ToggleBasicExample;
