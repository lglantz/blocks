const React = require('react');
const ReactDOM = require('react-dom');

const getPreviewComponent = require('./common/getPreviewComponent.jsx');

const Dropdown = require('blocks-react').Dropdowns.Dropdown;

class DropdownPreview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value1 : '',
      value2: '',
      value3: '',
      value4: ''
    };
  }

  render() {
    return (
      <div className="l-flex-vertical">
        <div className="l-flex-horizontal">
          { getPreviewComponent('Default',
              <Dropdown
                text="Choose an option"
                value={this.state.value1}
                onChange={evt => this.setState({ value1: evt.value })}
                options={
                  [
                    { value: 'option1', text: 'One option' },
                    { value: 'option2', text: 'Another option', href: '#' },
                    { value: 'option3', text: 'Best option' },
                    { value: 'option4', element: <div><span className="blx-icon blx-icon-plus"/>Custom element</div>, key: 'option4' },
                    { value: 'option5', text: 'Different option' },
                    { value: 'option6', text: 'Longer named option that should overflow' }
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
        <div className="l-flex-horizontal">
          { getPreviewComponent('With icon',
              <Dropdown
                text="Choose an option"
                icon="plus"
                value={this.state.value2}
                onChange={evt => this.setState({ value2: evt.value })}
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
          { getPreviewComponent('Overflow',
              <Dropdown
                text="This is a really long title that will overflow"
                value={this.state.value3}
                onChange={evt => this.setState({ value3: evt.value })}
                options={
                  [
                    { value: 'option1', text: 'One option' },
                    { value: 'option2', text: 'Another option', href: '#' },
                    { value: 'option3', text: 'Best option' },
                    { value: 'option4', element: <div><span className="blx-icon blx-icon-plus"/>Custom element</div>, key: 'option4' }
                  ]
                }
              />
          ) }
        </div>
        <div className="l-flex-horizontal">
          { getPreviewComponent('Invalid',
              <Dropdown
                text="Placeholder"
                value={this.state.value4}
                isValid={!!this.state.value4}
                invalidErrorMessage="Please pick an option"
                onChange={evt => this.setState({ value4: evt.value })}
                options={
                  [
                    { value: 'option1', text: 'One option' },
                    { value: 'option2', text: 'Another option', href: '#' },
                    { value: 'option3', text: 'Best option' },
                    { value: 'option4', element: <div><span className="blx-icon blx-icon-plus"/>Custom element</div>, key: 'option4' }
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
