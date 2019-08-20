import React, {Fragment} from "react"

const { TextField } = require('blocks-react').Input;
const { HelpIcon } = require('blocks-react').Icons;
const { Tooltip } = require('blocks-react')


const TooltipTitle = () => (
  <Fragment>
    <span>Tooltip input</span>
    <Tooltip
      position="top"
      title="Sample Tooltip"
      text="Sample Tooltip Body"
      trigger={<HelpIcon />}
    />
  </Fragment>
);

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
        label={<TooltipTitle/>}
        placeholder="Text input"
        value={this.state.value}
        onChange={e => this.onChange(e)}
      />
    );
  }
}

export default TextFieldValidationExample;
