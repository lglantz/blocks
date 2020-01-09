import React from "react"
import TextField from 'blocks-react/dist/input/TextField';

class TextFieldDateExample extends React.Component {
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
        type="date"
        value={this.state.value}
        onChange={e => this.onChange(e)}
      />
    );
  }
}

export default TextFieldDateExample;
