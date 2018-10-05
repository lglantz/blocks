const React = require('react');
const ReactDOM = require('react-dom');

const getPreviewComponent = require('./common/getPreviewComponent.jsx');

const TextField = require('../../react/input/TextField.jsx');
const TextFieldWithDropdown = require('../../react/input/TextFieldWithDropdown.jsx');

const INVALID_VALUE = 'Wrong';


class TextFieldPreview extends React.Component {
  constructor() {
    super();

    this.state = {
      conditionalSuffixValue: '',
      invalidInputValue: INVALID_VALUE,
      unitValue: 'ft',
      date: null
    };

    this.onChangeUnit = this.onChangeUnit.bind(this);
  }

  onChangeUnit(option) {
    this.setState({
      unitValue: option.value
    })
  }

  render() {
    return (
      <div>
        <div className="l-flex-horizontal">
          { getPreviewComponent('Default', <TextField placeholder="Text input" />) }
        </div>
        <div className="l-flex-horizontal">
          { getPreviewComponent('Default with text label', <TextField label="Text input label" placeholder="Text input" />) }
        </div>
        <div className="l-flex-horizontal">
          { getPreviewComponent('Filled', <TextField value="Text input" onChange={() => {}} />) }
        </div>
        <div className="l-flex-horizontal">
          { getPreviewComponent('Disabled', <TextField placeholder="Text input" isDisabled />) }
        </div>

        <div className="l-flex-horizontal">
          { getPreviewComponent('Prefix/Suffix', <TextField label="Text input label" placeholder="Text input" prefix="$" suffix="USD" />) }

          { getPreviewComponent('Conditional Suffix Icon',
              <TextField
                label="Type at least 5 letters"
                placeholder="Text input"
                value={this.state.conditionalSuffixValue}
                onChange={evt => this.setState({ conditionalSuffixValue: evt.target.value })}
                suffix={
                  this.state.conditionalSuffixValue.length >= 5 &&
                    <img src="/svgs/icon-success.svg" alt="" />
                }
              />
          ) }
        </div>
        <div className="l-flex-horizontal">
          { getPreviewComponent('Text Field with Dropdown',
              <TextFieldWithDropdown
                textField={{
                  label: "Text input label",
                  placeholder: "100,000"
                }}
                dropdown={{
                  options: [{text: 'ft', value: 'ft'}, {text: 'cm', value: 'cm'}, {text: 'm', value: 'm'}],
                  value: this.state.unitValue,
                  onChange: this.onChangeUnit
                }}
              />
          ) }
        </div>

        <div className="l-flex-horizontal">
          { getPreviewComponent('Validation',
              <TextField
                label="Text input label"
                isValid={value => { return value !== INVALID_VALUE; }}
                invalidErrorMessage={`This text is invalid. Enter any value other than ${INVALID_VALUE} to make it valid.`}
                value={this.state.invalidInputValue}
                onChange={evt => this.setState({ invalidInputValue: evt.target.value })}
              />
          ) }
        </div>

        <div className="l-flex-horizontal">
          { getPreviewComponent('Date/time picker',
              <TextField
                type="date"
                value={this.state.date}
                onChange={evt => this.setState({ date: evt.target.value })}
              />
          ) }
        </div>

        <div className="l-flex-horizontal">
          { getPreviewComponent('Icon next to field',
            <TextField
              value="Text input"
              icon={<span className="blx-icon blx-icon-information" />}
              onChange={() => {}}
            />) }
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById('react-preview');
ReactDOM.render(<TextFieldPreview />, rootElement);
