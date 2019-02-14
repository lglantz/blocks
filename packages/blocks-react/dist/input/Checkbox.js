'use strict';

var React = require('react');
var PropTypes = require('prop-types');

var Checkbox = function Checkbox(props) {
  return React.createElement(
    'label',
    { className: 'blx-checkbox ' + (props.isDisabled ? 'blx-disabled' : '') },
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
  value: PropTypes.string,
  name: PropTypes.string,
  isDisabled: PropTypes.bool,
  isChecked: PropTypes.bool,
  onChange: PropTypes.func,
  onKeyDown: PropTypes.func,
  onKeyUp: PropTypes.func
};

Checkbox.defaultProps = {
  value: '',
  name: '',
  isDisabled: false,
  isChecked: false,
  onChange: function onChange() {},
  onKeyDown: function onKeyDown() {},
  onKeyUp: function onKeyUp() {}
};

module.exports = Checkbox;