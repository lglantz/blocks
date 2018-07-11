const React = require('react');
const PropTypes = require('prop-types');


const RadioButton = props => (
  <label className="radio-button-container">
    <span className="radio-label-text" title={props.text}>
      {props.text}
      {props.children}
    </span>
    <input
      type="radio"
      value={props.value}
      name={props.name}
      defaultChecked={props.isChecked}
      disabled={props.isDisabled}
      onChange={props.onChange}
    />
    <span className={`radio-check ${props.isDisabled ? 'disabled' : ''}`} />
  </label>
);

RadioButton.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  text: PropTypes.string,
  value: PropTypes.string,
  isDisabled: PropTypes.bool,
  isChecked: PropTypes.bool
};

RadioButton.defaultProps = {
  text: '',
  value: '',
  isDisabled: false,
  isChecked: false
};

module.exports = RadioButton;

