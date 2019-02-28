const React = require('react');
const PropTypes = require('prop-types');


const RadioButton = props => (
  <label className={`blx-radio ${props.isDisabled ? 'blx-disabled' : ''} ${props.isValid ? '' : 'blx-invalid'}`}>
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

RadioButton.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  text: PropTypes.string,
  value: PropTypes.string,
  isDisabled: PropTypes.bool,
  isChecked: PropTypes.bool,
  isValid: PropTypes.bool
};

RadioButton.defaultProps = {
  text: '',
  value: '',
  isDisabled: false,
  isChecked: false,
  isValid: true
};

module.exports = RadioButton;

