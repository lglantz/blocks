const React = require('react');
const PropTypes = require('prop-types');
const classnames = require('classnames');


const RadioButton = ({ checked, isValid, style, className, children, ...other}) => {
  const classes = classnames('blx-radio', className, {
    'blx-disabled': other.disabled,
    'blx-invalid': !isValid
  });
  return (
    <label
      style={style}
      className={classes}
    >
      <div className="blx-label">
        {children}
      </div>
      <input
        type="radio"
        defaultChecked={checked}
        {...other}
      />
      <span className="blx-radio-check" />
    </label>
  );
}

RadioButton.propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  isValid: PropTypes.bool,
  style: PropTypes.object,
  className: PropTypes.string
};

RadioButton.defaultProps = {
  checked: false,
  disabled: false,
  isValid: true,
  style: null,
  className: ''
};

module.exports = RadioButton;

