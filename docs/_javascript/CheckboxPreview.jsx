const React = require('react');
const ReactDOM = require('react-dom');

const getPreviewComponent = require('./common/getPreviewComponent.jsx');

const Checkbox = require('../../react/input/Checkbox.jsx');

class CheckboxPreview extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isChecked: false };
  }

  render() {
    return (
      <div>
        <div className="l-flex-horizontal">
          { getPreviewComponent('Default',
              <Checkbox
                isChecked={this.state.isChecked}
                onChange={() => this.setState(prevState => ({ isChecked: !prevState.isChecked }))}
              >
                Toggle Me
              </Checkbox>
            )
          }
        </div>
        <div className="l-flex-horizontal">
          { getPreviewComponent('Unselected, Disabled', <Checkbox isDisabled>Unselected</Checkbox>) }
        </div>
        <div className="l-flex-horizontal">
          { getPreviewComponent('Selected, Disabled', <Checkbox isDisabled isChecked>Selected, Disabled</Checkbox>) }
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById('react-preview');
ReactDOM.render(<CheckboxPreview />, rootElement);
