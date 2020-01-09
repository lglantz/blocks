import React from "react"
import TextField from 'blocks-react/dist/input/TextField';

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
