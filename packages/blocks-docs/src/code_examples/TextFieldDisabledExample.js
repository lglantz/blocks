import React from "react"

const { TextField } = require('blocks-react').Input;
const { AddIcon } = require('blocks-react').Icons;

class TextFieldBasicExample extends React.Component {
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
        placeholder="Text input"
        value={this.state.value}
        icon={<AddIcon />}
        disabled
        onChange={e => this.onChange(e)}
      />
    );
  }
}

export default TextFieldBasicExample;
