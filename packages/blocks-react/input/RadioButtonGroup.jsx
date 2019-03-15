const React = require('react');
const PropTypes = require('prop-types');

const RadioButton = require('./RadioButton.jsx');


const RadioButtonGroup = props => (
  <div
    style={props.style}
    className={props.className}
  >
    {
      props.options.map((option, idx) => (
        <RadioButton
          key={option.text}
          name={props.name}
          text={option.text}
          value={option.text}
          isDisabled={props.isDisabled}
          onChange={props.onChange}
          isChecked={idx === props.checkedIndex}
          isValid={option.isValid === false ? option.isValid : true}
        />
      ))
    }
  </div>
);

RadioButtonGroup.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string),
  isDisabled: PropTypes.bool,
  checkedIndex: PropTypes.number
};

RadioButtonGroup.defaultProps = {
  className: '',
  style: null,
  options: [],
  isDisabled: false,
  checkedIndex: -1
};

module.exports = RadioButtonGroup;

