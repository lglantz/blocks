import React from "react"

const { TextField } = require('blocks-react').Input;

class TextFieldPrefixSuffixExample extends React.Component {
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
        type="number"
        label="Text input label"
        placeholder="Text input"
        prefix="$"
        suffix="USD"
        value={this.state.value}
        onChange={e => this.onChange(e)}
      />
    );
  }
}

export default TextFieldPrefixSuffixExample;
