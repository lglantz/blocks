'use strict';

var React = require('react');
var PropTypes = require('prop-types');

var RadioTabItem = function RadioTabItem(props) {
  return React.createElement(
    'li',
    {
      style: props.style,
      className: props.className
    },
    React.createElement(
      'label',
      null,
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
        { className: 'blx-tab-item' },
        props.text
      ),
      props.children
    )
  );
};

RadioTabItem.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  name: PropTypes.string.isRequired, // needs to be unique for each tab group
  value: PropTypes.string,
  text: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  isChecked: PropTypes.bool,
  isDisabled: PropTypes.bool
};

RadioTabItem.defaultProps = {
  className: '',
  style: null,
  value: '',
  isChecked: false,
  isDisabled: false
};

module.exports = RadioTabItem;