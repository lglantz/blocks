const React = require('react');
const PropTypes = require('prop-types');
const classnames = require('classnames');


const TextField = ({ label, isValid, invalidErrorMessage, prefix, suffix, icon, style, className, forwardedRef, helperText, ...other }) => {
  // label element
  let labelElement = null;
  if (label) {
    labelElement = <label className="blx-ui-text">{label}</label>;
  }

  // invalid message and class
  let invalidLabelMessage = null;
  if (!isValid) {
    invalidLabelMessage = <span className="blx-invalid-input-message">{invalidErrorMessage}</span>;
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

  // helper text
  let helperTextElement = null;

  if (other.maxLength) {
    helperTextElement = <span className="blx-text-field-helper-text">{`${other.value.length}/${other.maxLength}`}</span>;
  }else if (helperText) {
    helperTextElement = <span className="blx-text-field-helper-text">{`${helperText}`}</span>;
  }

  // root level classes
  const classes = classnames('blx-text-field', className, {
    'blx-disabled': other.disabled
  });
  const textFieldClasses = classnames({'blx-invalid': !isValid});

  return (
    <div
      style={style}
      className={classes}
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
      {helperTextElement}
    </div>
  );
}

TextField.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ]),
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
  invalidErrorMessage: PropTypes.string,
  helperText: PropTypes.string,
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
  invalidErrorMessage: '',
  helperText: null
};

module.exports = React.forwardRef((props, ref) => (
  <TextField {...props} forwardedRef={ref} />
));

