const React = require('react');
const PropTypes = require('prop-types');


const TextField = (props) => {
  // text input element itself
  let textFieldClasses = '';

  // label element
  let labelElement = null;
  if (props.label) {
    labelElement = <label className="blx-ui-text">{props.label}</label>;
  }

  // invalid message and class
  let invalidLabelMessage = null;
  if (!props.isValid) {
    invalidLabelMessage = <span className="blx-invalid-input-message">{props.invalidErrorMessage}</span>;
    textFieldClasses += ' blx-invalid';
  }

  // prefix element
  let prefixElement = null;
  if (props.prefix) {
    prefixElement = <span className="blx-text-field-prefix">{props.prefix}</span>;
  }

  // suffix element
  let suffixElement = null;
  if (props.suffix) {
    suffixElement = <span className="blx-text-field-suffix">{props.suffix}</span>;
  }

  // icon element
  let iconElement = null;
  if (props.icon) {
    iconElement = <span className="blx-text-field-icon">{props.icon}</span>;
  }

  return (
    <div className={`blx-text-field ${props.isDisabled ? 'blx-disabled' : ''}`}>
      {labelElement}
      <div className="blx-text-field-container">
        {prefixElement}
        {suffixElement}
        <input
          className={textFieldClasses}
          type={props.type}
          name={props.name}
          value={props.value}
          placeholder={props.placeholder}
          disabled={props.isDisabled}
          autoComplete={props.autoComplete}
          readOnly={props.readOnly}
          onChange={props.onChange}
          onFocus={props.onFocus}
          onBlur={props.onBlur}
          onKeyUp={props.onKeyUp}
          onKeyDown={props.onKeyDown}
          ref={props.forwardedRef}
          autoFocus={props.autoFocus}
          min={props.min}
          max={props.max}
          step={props.step}
        />
        {iconElement}
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
  prefix: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ]),
  suffix: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ]),
  icon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ]),
  isDisabled: PropTypes.bool,
  isValid: PropTypes.bool,
  invalidErrorMessage: PropTypes.string,
  onChange: PropTypes.func,
  onKeyUp: PropTypes.func,
  onKeyDown: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  autoComplete: PropTypes.string,
  readOnly: PropTypes.bool,
  autoFocus: PropTypes.bool,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number
};

TextField.defaultProps = {
  type: 'text',
  name: '',
  value: '',
  label: '',
  placeholder: '',
  prefix: null,
  suffix: null,
  icon: null,
  isDisabled: false,
  isValid: true,
  invalidErrorMessage: '',
  onChange: null,
  onKeyUp: null,
  onKeyDown: null,
  onFocus: null,
  onBlur: null,
  autoComplete: '',
  readOnly: false,
  autoFocus: false,
  min: null,
  max: null,
  step: 1
};

module.exports = React.forwardRef((props, ref) => (
  <TextField {...props} forwardedRef={ref} />
));

