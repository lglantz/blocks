const React = require('react');
const PropTypes = require('prop-types');

function TextField(props) {
  // the label field
  let labelElement = null;
  if (props.label) {
    labelElement = (
      <label className="text-field-label">{props.label}</label>
    );
  }

  // text input element itself
  let textFieldClasses = 'text-field-input';

  // red asterisk if the value is invalid
  let invalidLabelMarker = null;
  let invalidLabelMessage = null;
  if (!props.isValid(props.value)) {
    invalidLabelMarker = (
      <span className="invalid-label-marker">*</span>
    );
    invalidLabelMessage = (
      <span className="invalid-label-message">{props.invalidErrorMessage}</span>
    );

    textFieldClasses += ' invalid';
  }

  // prefix element
  let prefixElement = null;
  if (props.prefix) {
    prefixElement = (
      <span className="text-field-prefix">{props.prefix}</span>
    );

    textFieldClasses += ' text-field-with-prefix';
  }

  // suffix element
  let suffixElement = null;
  if (props.suffix) {
    suffixElement = (
      <span className="text-field-suffix">{props.suffix}</span>
    );

    textFieldClasses += ' text-field-with-suffix';
  }

  const textInputElement = (
    <input
      type={props.type}
      name={props.name}
      className={textFieldClasses}
      value={props.value}
      placeholder={props.placeholder}
      disabled={props.isDisabled}
      autoComplete={props.autoComplete}
      readOnly={props.readOnly}
      onChange={props.onChange}
      onBlur={props.onBlur}
      onKeyUp={(e) => {
        if (e.keyCode === 13) { // ENTER
          e.target.blur();
        } else if (props.onKeyUp) {
          props.onKeyUp(e);
        }
      }}
    />
  );

  return (
    <div className={`text-field ${props.isDisabled ? 'disabled' : ''}`}>
      <div>
        {labelElement}
        {invalidLabelMarker}
      </div>
      <div className="text-field-container">
        {prefixElement}
        {suffixElement}
        {textInputElement}
      </div>
      {invalidLabelMessage}
    </div>
  );
}

TextField.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  prefix: PropTypes.string,
  suffix: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  isDisabled: PropTypes.bool,
  isValid: PropTypes.func,
  invalidErrorMessage: PropTypes.string,
  onChange: PropTypes.func,
  onKeyUp: PropTypes.func,
  onBlur: PropTypes.func,
  autoComplete: PropTypes.string,
  readOnly: PropTypes.bool
};

TextField.defaultProps = {
  type: 'text',
  name: '',
  value: '',
  label: null,
  placeholder: 'Text input',
  prefix: null,
  suffix: null,
  isDisabled: false,
  isValid: () => (true),
  invalidErrorMessage: '',
  onChange: null,
  onKeyUp: null,
  onBlur: null,
  autoComplete: '',
  readOnly: false
};

module.exports = TextField;

