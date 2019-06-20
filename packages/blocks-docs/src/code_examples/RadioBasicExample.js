import React from "react"

const { RadioButton } = require('blocks-react').Input;

class RadioBasicExample extends React.Component {
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
      <div>
        <RadioButton
          name="radio-basic-example"
          value="option1"
          onChange={e => this.onChange(e)}
          checked={this.state.checkedValue === 'option1'}
        >
          Option 1
        </RadioButton>
        <RadioButton
          name="radio-basic-example"
          value="option2"
          onChange={e => this.onChange(e)}
          checked={this.state.checkedValue === 'option2'}
        >
          Option 2
        </RadioButton>
        <RadioButton
          name="radio-basic-example"
          value="option3"
          onChange={e => this.onChange(e)}
          checked={this.state.checkedValue === 'option3'}
        >
          Option 3
        </RadioButton>
        <RadioButton
          name="radio-basic-example"
          value="option4"
          onChange={e => this.onChange(e)}
          checked={this.state.checkedValue === 'option4'}
          disabled
        >
          Option 4
        </RadioButton>
      </div>
    );
  }
}

export default RadioBasicExample;
