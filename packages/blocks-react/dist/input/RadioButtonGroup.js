'use strict';

var React = require('react');
var PropTypes = require('prop-types');

var RadioButton = require('./RadioButton.js');

var RadioButtonGroup = function RadioButtonGroup(props) {
  return React.createElement(
    'div',
    null,
    props.options.map(function (option, idx) {
      return React.createElement(RadioButton, {
        key: option.text,
        name: props.name,
        text: option.text,
        value: option.text,
        isDisabled: props.isDisabled,
        onChange: props.onChange,
        isChecked: idx === props.checkedIndex,
        isValid: option.isValid === false ? option.isValid : true
      });
    })
  );
};

RadioButtonGroup.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string),
  isDisabled: PropTypes.bool,
  checkedIndex: PropTypes.number
};

RadioButtonGroup.defaultProps = {
  options: [],
  isDisabled: false,
  checkedIndex: -1
};

module.exports = RadioButtonGroup;