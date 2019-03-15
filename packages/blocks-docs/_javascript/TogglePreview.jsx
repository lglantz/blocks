const React = require('react');
const ReactDOM = require('react-dom');

const Toggle = require('blocks-react').Input.Toggle;

class TogglePreview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      usableToggleValue: 1,
      disabledToggleValue: 'first'
    }
  }
  render() {
    return (
      <React.Fragment>
        <Toggle
          name="design-page-toggle"
          value={this.state.usableToggleValue}
          options={
            [
              { text: 'Option 1', value: 1 },
              { text: 'Option 2', value: 2 },
              { text: 'Option 3', value: 3 }
            ]
          }
          onChange={evt => this.setState({ usableToggleValue: evt.target.value })}
        />
        <Toggle
          name="design-page-toggle-disabled"
          value={this.state.disabledToggleValue}
          options={
            [
              { text: 'I am', value: 'first' },
              { text: 'a disabled', value: 'second' },
              { text: 'toggle', value: 'third' }
            ]
          }
          onChange={() => {}}
          isDisabled
        />
      </React.Fragment>
    );
  }
}

const rootElement = document.getElementById('react-preview');
ReactDOM.render(<TogglePreview />, rootElement);
