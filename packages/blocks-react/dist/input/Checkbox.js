'use strict';

var React = require('react');
var PropTypes = require('prop-types');

var Checkbox = function Checkbox(props) {
  var classes = 'blx-checkbox ';
  if (props.isDisabled) classes += 'blx-disabled ';
  return React.createElement(
    'label',
    {
      style: props.style,
      className: classes + ' ' + props.className
    },
    React.createElement(
      'div',
      { className: 'blx-label' },
      props.children
    ),
    React.createElement('input', {
      type: 'checkbox',
      name: props.name,
      value: props.value,
      checked: props.isChecked,
      disabled: props.isDisabled,
      onChange: props.onChange,
      onKeyDown: props.onKeyDown,
      onKeyUp: props.onKeyUp
    }),
    React.createElement('span', { className: 'blx-checkmark' })
  );
};

Checkbox.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  value: PropTypes.string,
  name: PropTypes.string,
  isDisabled: PropTypes.bool,
  isChecked: PropTypes.bool,
  onChange: PropTypes.func,
  onKeyDown: PropTypes.func,
  onKeyUp: PropTypes.func
};

Checkbox.defaultProps = {
  className: '',
  style: null,
  value: '',
  name: '',
  isDisabled: false,
  isChecked: false,
  onChange: function onChange() {},
  onKeyDown: function onKeyDown() {},
  onKeyUp: function onKeyUp() {}
};

module.exports = Checkbox;