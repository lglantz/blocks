const React = require('react');
const ReactDOM = require('react-dom');

const getPreviewComponent = require('./getPreviewComponent.jsx');

const Dropdown = require('../../react-index.js').Dropdowns.Dropdown;

class DropdownPreview extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentValue : '' };
  }

  render() {
    return (
      <div className="l-flex-vertical">
        <div className="l-flex-horizontal">
          { getPreviewComponent('Default',
              <Dropdown
                text="Choose an option"
                value={this.state.currentValue}
                onChange={evt => this.setState({ currentValue: evt.value })}
                options={
                  [
                    { value: 'option1', text: 'One option' },
                    { value: 'option2', text: 'Another option' },
                    { value: 'option3', text: 'Best option' }
                  ]
                }
              />
          ) }
        </div>
        <div className="l-flex-horizontal">
          { getPreviewComponent('Disabled',
              <Dropdown
                text="Choose an option"
                isDisabled
                options={
                  [
                    { value: 'option1', text: 'One option' },
                    { value: 'option2', text: 'Another option' },
                    { value: 'option3', text: 'Best option' }
                  ]
                }
              />
          ) }
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById('react-preview');
ReactDOM.render(<DropdownPreview />, rootElement);
