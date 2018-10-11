const React = require('react');
const PropTypes = require('prop-types');


const TextField = (props) => {
  // text input element itself
  let textFieldClasses = '';

  // red asterisk if the value is invalid
  let invalidLabelMarker = null;
  let invalidLabelMessage = null;
  if (!props.isValid) {
    invalidLabelMarker = <span className="blx-invalid-text-field-marker">*</span>;
    invalidLabelMessage = <span className="blx-invalid-text-field-message">{props.invalidErrorMessage}</span>;
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
      <div>
        {props.label && <label className="blx-ui-text">{props.label}</label>}
        {invalidLabelMarker}
      </div>
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
          onKeyUp={(e) => {
            if (props.onKeyUp) props.onKeyUp(e);
            if (e.key === 'Enter') e.target.blur();
          }}
          onKeyDown={props.onKeyDown}
          ref={props.forwardedRef}
          autoFocus={props.autoFocus}
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
  autoFocus: PropTypes.bool
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
  autoFocus: false
};

module.exports = React.forwardRef((props, ref) => (
  <TextField {...props} forwardedRef={ref} />
));

