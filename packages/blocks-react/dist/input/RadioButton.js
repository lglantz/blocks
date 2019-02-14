'use strict';

var React = require('react');
var PropTypes = require('prop-types');

var RadioButton = function RadioButton(props) {
  return React.createElement(
    'label',
    { className: 'blx-radio ' + (props.isDisabled ? 'blx-disabled' : '') + ' ' + (props.isValid ? '' : 'blx-invalid') },
    React.createElement(
      'div',
      { className: 'blx-radio-label', title: props.text },
      props.text
    ),
    React.createElement('input', {
      type: 'radio',
      value: props.value,
      name: props.name,
      defaultChecked: props.isChecked,
      disabled: props.isDisabled,
      onChange: props.onChange
    }),
    React.createElement('span', { className: 'blx-radio-check' })
  );
};

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
  isChecked: false
};

module.exports = RadioButton;