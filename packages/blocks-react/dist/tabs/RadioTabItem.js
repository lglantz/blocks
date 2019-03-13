'use strict';

var React = require('react');
var PropTypes = require('prop-types');

var RadioTabItem = function RadioTabItem(props) {
  return React.createElement(
    'li',
    null,
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
  name: PropTypes.string.isRequired, // needs to be unique for each tab group
  value: PropTypes.string,
  text: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  isChecked: PropTypes.bool,
  isDisabled: PropTypes.bool
};

RadioTabItem.defaultProps = {
  value: '',
  isChecked: false,
  isDisabled: false
};

module.exports = RadioTabItem;