import React from "react"
import TextArea from 'blocks-react/dist/input/TextArea';

class TextAreaExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "On the eighty-fifth day of his unlucky streak, Santiago takes his skiff into the Gulf Stream, sets his lines and, by noon, has his bait taken by a big fish that he is sure is a marlin."
    };
  }

  onChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <TextArea
        value={this.state.value}
        onChange={e => this.onChange(e)}

      />
    );
  }
}

export default TextAreaExample;
