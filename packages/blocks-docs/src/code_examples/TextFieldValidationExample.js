import React from "react"

const { TextField } = require('blocks-react').Input;
const { SuccessIcon } = require('blocks-react').Icons;

class TextFieldValidationExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };
  }

  onChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <TextField
        label="Type at least 5 letters"
        placeholder="Text input"
        value={this.state.value}
        onChange={e => this.onChange(e)}
        isValid={this.state.value.length >= 5}
        suffix={
          this.state.value.length >= 5 &&
            <SuccessIcon />
        }
      />
    );
  }
}

export default TextFieldValidationExample;
