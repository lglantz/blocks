'use strict';

var React = require('react');
var PropTypes = require('prop-types');

var RadioSubTabItem = function RadioSubTabItem(props) {
  return React.createElement(
    'label',
    { className: props.isVisible ? '' : 'blx-hidden' },
    React.createElement('input', {
      type: 'radio',
      name: props.name,
      value: props.value,
      checked: props.isChecked,
      disabled: props.isDisabled,
      onChange: props.onChange
    }),
    React.createElement(
      'span',
      { className: 'blx-sub-tab' },
      props.text
    ),
    props.children
  );
};

RadioSubTabItem.propTypes = {
  name: PropTypes.string.isRequired, // needs to be unique for each tab group
  value: PropTypes.string,
  text: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  isVisible: PropTypes.bool,
  isChecked: PropTypes.bool,
  isDisabled: PropTypes.bool
};

RadioSubTabItem.defaultProps = {
  value: '',
  isVisible: true,
  isChecked: false,
  isDisabled: false
};

module.exports = RadioSubTabItem;