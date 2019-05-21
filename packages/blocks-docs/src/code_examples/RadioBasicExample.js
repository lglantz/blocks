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
          text="Option 1"
          value="option1"
          onChange={e => this.onChange(e)}
          isChecked={this.state.checkedValue === 'option1'}
        />
        <RadioButton
          name="radio-basic-example"
          text="Option 2"
          value="option2"
          onChange={e => this.onChange(e)}
          isChecked={this.state.checkedValue === 'option2'}
        />
        <RadioButton
          name="radio-basic-example"
          text="Option 3"
          value="option3"
          onChange={e => this.onChange(e)}
          isChecked={this.state.checkedValue === 'option3'}
        />
        <RadioButton
          name="radio-basic-example"
          text="Option 4"
          value="option4"
          onChange={e => this.onChange(e)}
          isChecked={this.state.checkedValue === 'option4'}
          isDisabled
        />
      </div>
    );
  }
}

export default RadioBasicExample;
