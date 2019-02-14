'use strict';

var React = require('react');
var PropTypes = require('prop-types');
var TextField = require('./TextField.js');
var Dropdown = require('../dropdowns/Dropdown.js');

var TextFieldWithDropdown = function TextFieldWithDropdown(props) {
  return React.createElement(
    'div',
    { className: 'blx-text-field-with-dropdown ' + (props.isDisabled ? 'blx-disabled' : '') },
    React.createElement(TextField, props.textField),
    React.createElement(Dropdown, props.dropdown)
  );
};

TextFieldWithDropdown.propTypes = {
  isDisabled: PropTypes.bool,
  textField: PropTypes.shape({
    label: PropTypes.string,
    onChange: PropTypes.func,
    name: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    invalidErrorMessage: PropTypes.string,
    value: PropTypes.string,
    isValid: PropTypes.bool
  }),
  dropdown: PropTypes.shape({
    text: PropTypes.string,
    onChange: PropTypes.func,
    options: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      href: PropTypes.string,
      disabled: PropTypes.bool
    })),
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  })
};

TextFieldWithDropdown.defaultProps = {
  isDisabled: false,
  textField: {
    label: null,
    onChange: function onChange() {},
    name: '',
    type: 'text',
    placeholder: 'Text input',
    invalidErrorMessage: '',
    value: '',
    isValid: true
  },
  dropdown: {
    text: 'Choose an option',
    onChange: function onChange() {},
    options: [],
    value: null
  }
};

module.exports = TextFieldWithDropdown;