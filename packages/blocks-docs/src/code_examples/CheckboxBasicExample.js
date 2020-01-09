import React from "react"
import Checkbox from 'blocks-react/dist/input/Checkbox';

class CheckboxBasicExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checked1: true,
      checked2: false,
      checked3: false,
      checked4: false
    };
  }

  checkboxHandler(name) {
    return (e) => {
      this.setState({ [name]: e.target.checked });
    }
  }

  render() {
    return (
      <div>
        <Checkbox
          name="basic-checkbox-example"
          checked={this.state.checked1}
          onChange={this.checkboxHandler('checked1')}
        >
          Option 1
        </Checkbox>
        <Checkbox
          name="basic-checkbox-example"
          checked={this.state.checked2}
          onChange={this.checkboxHandler('checked2')}
        >
          Option 2
        </Checkbox>
        <Checkbox
          name="basic-checkbox-example"
          checked={this.state.checked3}
          onChange={this.checkboxHandler('checked3')}
        >
          Option 3
        </Checkbox>
        <Checkbox
          name="basic-checkbox-example"
          checked={this.state.checked4}
          onChange={this.checkboxHandler('checked4')}
          disabled
        >
          Option 4
        </Checkbox>
      </div>
    );
  }
}

export default CheckboxBasicExample;
