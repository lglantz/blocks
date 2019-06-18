const React = require('react');
const PropTypes = require('prop-types');


const RadioButton = ({ checked, isValid, style, className, text, ...other}) => {
  let classes = 'blx-radio ';
  if (other.disabled) classes += 'blx-disabled ';
  if (!isValid) classes += 'blx-invalid ';

  return (
    <label
      style={style}
      className={`${classes} ${className}`}
    >
      <div className="blx-radio-label" title={text}>
        {text}
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
  className: PropTypes.string,
  text: PropTypes.string
};

RadioButton.defaultProps = {
  checked: false,
  disabled: false,
  isValid: true,
  style: null,
  className: '',
  text: '',
};

module.exports = RadioButton;

