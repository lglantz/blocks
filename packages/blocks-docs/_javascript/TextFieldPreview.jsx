const React = require('react');
const ReactDOM = require('react-dom');

const getPreviewComponent = require('./common/getPreviewComponent.jsx');

const TextField = require('blocks-react').Input.TextField;
const TextArea = require('blocks-react').Input.TextArea;
const TextFieldWithDropdown = require('blocks-react').Input.TextFieldWithDropdown;

const INITIAL_INVALID_VALUE = '';
const VALID_VALUE_MIN_LENTH = 5;
function isFieldValid(value) {
  return value.length >= VALID_VALUE_MIN_LENTH;
}

class TextFieldPreview extends React.Component {
  constructor() {
    super();

    this.state = {
      unitValue: 'ft',
      defaultExampleValue: '',
      defaultWithTextLabelValue: '',
      filledExampleValue: 'Text input',
      prefixSuffixExampleValue: '',
      conditionalSuffixValue: '',
      textFieldDropdownValue: '',
      validityExampleValue: INITIAL_INVALID_VALUE,
      validityExampleIsValid: isFieldValid(INITIAL_INVALID_VALUE),
      dateExampleValue: '',
      iconExampleValue: 'Text input',
      multilineExampleValue: "On the eighty-fifth day of his unlucky streak, Santiago takes his skiff into the Gulf Stream, sets his lines and, by noon, has his bait taken by a big fish that he is sure is a marlin.",
    };

    this.onChangeUnit = this.onChangeUnit.bind(this);
  }

  onChangeUnit(option) {
    this.setState({
      unitValue: option.value
    });
  }

  render() {
    return (
      <div>
        <div className="l-flex-horizontal">
          { getPreviewComponent('Default', <TextField placeholder="Text input" value={this.state.defaultExampleValue} onChange={(evt) => this.setState({ defaultExampleValue: evt.target.value })} />) }
        </div>
        <div className="l-flex-horizontal">
          { getPreviewComponent('Default with text label', <TextField label="Text input label" placeholder="Text input" value={this.state.defaultWithTextLabelValue} onChange={(evt) => this.setState({ defaultWithTextLabelValue: evt.target.value })} />) }
        </div>
        <div className="l-flex-horizontal">
          { getPreviewComponent('Filled', <TextField value={this.state.filledExampleValue} onChange={(evt) => this.setState({ filledExampleValue: evt.target.value })} />) }
        </div>
        <div className="l-flex-horizontal">
          { getPreviewComponent('Disabled', <TextField placeholder="Text input" isDisabled />) }
        </div>

        <div className="l-flex-horizontal">
          { getPreviewComponent('Prefix/Suffix', <TextField type="number" label="Text input label" placeholder="Text input" prefix="$" suffix="USD" value={this.state.prefixSuffixExampleValue} onChange={(evt) => this.setState({ prefixSuffixExampleValue: evt.target.value })} />) }

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
                  placeholder: "100,000",
                  value: this.state.textFieldDropdownValue,
                  onChange: (evt) => this.setState({ textFieldDropdownValue: evt.target.value })
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
                isValid={this.state.validityExampleIsValid}
                invalidErrorMessage={`This text is invalid. Enter a value with at least ${VALID_VALUE_MIN_LENTH.toString()} characters to make it valid.`}
                value={this.state.validityExampleValue}
                onChange={evt => this.setState({
                  validityExampleValue: evt.target.value,
                  validityExampleIsValid: isFieldValid(evt.target.value)
                })}
              />
          ) }
        </div>

        <div className="l-flex-horizontal">
          { getPreviewComponent('Date/time picker',
              <TextField
                type="date"
                value={this.state.dateExampleValue}
                onChange={evt => this.setState({ dateExampleValue: evt.target.value })}
              />
          ) }
        </div>

        <div className="l-flex-horizontal">
          { getPreviewComponent('Icon next to field',
            <TextField
              value={this.state.iconExampleValue}
              icon={<span className="blx-icon blx-icon-information" />}
              onChange={(evt) => this.setState({ iconExampleValue: evt.target.value })}
            />) }
        </div>

        <div className="l-flex-horizontal">
          { getPreviewComponent('Multiline overflow',
            <TextArea
              value={this.state.multilineExampleValue}
              onChange={evt => this.setState({ multilineExampleValue: evt.target.value })}
            />) }
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById('react-preview');
ReactDOM.render(<TextFieldPreview />, rootElement);
