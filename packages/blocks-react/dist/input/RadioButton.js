'use strict';

var React = require('react');
var PropTypes = require('prop-types');

var RadioButton = function RadioButton(props) {
  var classes = 'blx-radio ';
  if (props.isDisabled) classes += 'blx-disabled ';
  if (!props.isValid) classes += 'blx-invalid ';

  return React.createElement(
    'label',
    {
      style: props.style,
      className: classes + ' ' + props.className
    },
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