const React = require('react');
const PropTypes = require('prop-types');


const RadioButton = props => (
  <label className="blx-radio">
    <div className="blx-radio-label" title={props.text}>
      {props.text}
      {props.children}
    </div>
    <input
      type="radio"
      value={props.value}
      name={props.name}
      defaultChecked={props.isChecked}
      disabled={props.isDisabled}
      onChange={props.onChange}
    />
    <span className={`blx-radio-check ${props.isDisabled ? 'blx-disabled' : ''}`} />
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

