const React = require('react');

const getPreviewComponent = require('./getPreviewComponent.jsx');

const BlocksReactInput = require('../../react-index.js').Input;
const TextField = BlocksReactInput.TextField;
const TextFieldWithDropdown = BlocksReactInput.TextFieldWithDropdown;

const INVALID_VALUE = 'Wrong';


const TextFieldPreview = (props) => (
  <div className="l-flex-vertical doc-section">
    <h4>Text Fields</h4>
    <div className="l-flex-vertical">
      <div className="l-flex-horizontal">
        { getPreviewComponent('Default', <TextField label="Text input label" placeholder="e.g. Text input" />) }
      </div>
      <div className="l-flex-horizontal">
        { getPreviewComponent('Disabled', <TextField label="Text input label" placeholder="e.g. Text input" isDisabled />) }
      </div>
      <div className="l-flex-horizontal">
        { getPreviewComponent('Idle, Filled', <TextField label="Text input label" value="More than a placeholder" onChange={() => {}} />) }
      </div>
      <div className="l-flex-horizontal">
        { getPreviewComponent('Validation',
            <TextField
              label="Text input label"
              isValid={value => { return value !== INVALID_VALUE; }}
              invalidErrorMessage={`This text is invalid. Enter any value other than ${INVALID_VALUE} to make it valid.`}
              value={props.invalidInputValue}
              onChange={props.onChange}
            />
        ) }
      </div>
      <div className="l-flex-horizontal">
        { getPreviewComponent('Prefix/Suffix', <TextField label="Text input label" prefix="$" suffix="USD" />) }
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
                value: "ft"
              }}
            />
        ) }
      </div>
    </div>
  </div>
);

module.exports = TextFieldPreview;
