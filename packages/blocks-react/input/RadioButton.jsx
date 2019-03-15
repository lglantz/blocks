const React = require('react');
const PropTypes = require('prop-types');


const RadioButton = (props) => {
  let classes = 'blx-radio ';
  if (props.isDisabled) classes += 'blx-disabled ';
  if (!props.isValid) classes += 'blx-invalid ';

  return (
    <label
      style={props.style}
      className={`${classes} ${props.className}`}
    >
      <div className="blx-radio-label" title={props.text}>
        {props.text}
      </div>
      <input
        type="radio"
        value={props.value}
        name={props.name}
        defaultChecked={props.isChecked}
        disabled={props.isDisabled}
        onChange={props.onChange}
      />
      <span className="blx-radio-check" />
    </label>
  );
}

RadioButton.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  text: PropTypes.string,
  value: PropTypes.string,
  isDisabled: PropTypes.bool,
  isChecked: PropTypes.bool,
  isValid: PropTypes.bool
};

RadioButton.defaultProps = {
  className: '',
  style: null,
  text: '',
  value: '',
  isDisabled: false,
  isChecked: false,
  isValid: true
};

module.exports = RadioButton;

