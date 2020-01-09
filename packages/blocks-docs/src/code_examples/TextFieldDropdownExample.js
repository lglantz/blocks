import React from "react"
import TextFieldWithDropdown from 'blocks-react/dist/input/TextFieldWithDropdown';

class TextFieldDropdownExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      unitValue: 'ft'
    };
  }

  render() {
    return (
      <TextFieldWithDropdown
        textField={{
          label: "Text input label",
          placeholder: "100,000",
          value: this.state.value,
          onChange: (e) => this.setState({ value: e.target.value })
        }}
        dropdown={{
          options: [{text: 'ft', value: 'ft'}, {text: 'cm', value: 'cm'}, {text: 'm', value: 'm'}],
          value: this.state.unitValue,
          onChange: (option) => this.setState({ unitValue: option.value })
        }}
      />
    );
  }
}

export default TextFieldDropdownExample;
