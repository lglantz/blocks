const React = require('react');
const ReactDOM = require('react-dom');

const getPreviewComponent = require('./common/getPreviewComponent.jsx');

const Dropdown = require('../../react/dropdowns/Dropdown.jsx');

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
                    { value: 'option2', text: 'Another option', href: '#' },
                    { value: 'option3', text: 'Best option' },
                    { value: 'option4', element: <button><span className="blx-icon blx-icon-plus"/>Custom element</button>, key: 'option4' }
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
                options={
                  [
                    { value: 'option1', text: 'One option' },
                    { value: 'option2', text: 'Another option', href: '#' },
                    { value: 'option3', text: 'Best option' },
                    { value: 'option4', element: <button><span className="blx-icon blx-icon-plus"/>Custom element</button>, key: 'option4' }
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
