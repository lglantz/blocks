import React from "react"

const { TextField } = require('blocks-react').Input;

class TextFieldHelperTextExample extends React.Component {
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
        helperText="Useful help text"
        value={this.state.value}
        onChange={e => this.onChange(e)}
      />
    );
  }
}

export default TextFieldHelperTextExample;
