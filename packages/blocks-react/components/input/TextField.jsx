const React = require('react');
const PropTypes = require('prop-types');


const TextField = ({ label, isValid, invalidErrorMessage, prefix, suffix, icon, style, className, forwardedRef, ...other }) => {
  // text input element itself
  let textFieldClasses = '';

  // label element
  let labelElement = null;
  if (label) {
    labelElement = <label className="blx-ui-text">{label}</label>;
  }

  // invalid message and class
  let invalidLabelMessage = null;
  if (!isValid) {
    invalidLabelMessage = <span className="blx-invalid-input-message">{invalidErrorMessage}</span>;
    textFieldClasses += ' blx-invalid';
  }

  // prefix element
  let prefixElement = null;
  if (prefix) {
    prefixElement = <span className="blx-text-field-prefix">{prefix}</span>;
  }

  // suffix element
  let suffixElement = null;
  if (suffix) {
    suffixElement = <span className="blx-text-field-suffix">{suffix}</span>;
  }

  // icon element
  let iconElement = null;
  if (icon) {
    iconElement = <span className="blx-text-field-icon">{icon}</span>;
  }

  // root level classes
  let classes = 'blx-text-field ';
  if (other.disabled) classes += 'blx-disabled ';

  return (
    <div
      style={style}
      className={`${classes} ${className}`}
    >
      {labelElement}
      <div className="blx-text-field-container">
        {prefixElement}
        {suffixElement}
        <input
          className={textFieldClasses}
          ref={forwardedRef}
          {...other}
        />
        {iconElement}
      </div>
      {invalidLabelMessage}
    </div>
  );
}

TextField.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  label: PropTypes.string,
  prefix: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ]),
  suffix: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ]),
  icon: PropTypes.node,
  disabled: PropTypes.bool,
  isValid: PropTypes.bool,
  invalidErrorMessage: PropTypes.string
};

TextField.defaultProps = {
  className: '',
  style: null,
  label: '',
  prefix: null,
  suffix: null,
  icon: null,
  disabled: false,
  isValid: true,
  invalidErrorMessage: ''
};

module.exports = React.forwardRef((props, ref) => (
  <TextField {...props} forwardedRef={ref} />
));

