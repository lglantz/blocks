'use strict';

var React = require('react');
var PropTypes = require('prop-types');

var Toggle = function Toggle(props) {
  var classes = 'blx-toggle ';
  if (props.isDisabled) classes += 'blx-disabled ';
  if (props.className) classes += props.className;
  return React.createElement(
    'div',
    {
      style: props.style,
      className: classes
    },
    props.options.map(function (option, idx) {
      return React.createElement(
        'label',
        {
          className: 'blx-toggle-container',
          key: option.text
        },
        React.createElement('input', {
          type: 'radio',
          id: 'toggle-option-' + idx,
          name: props.name,
          value: option.value,
          defaultChecked: option.value === props.value,
          disabled: props.isDisabled,
          onChange: props.onChange
        }),
        React.createElement(
          'span',
          { className: 'blx-toggle-text' },
          option.text
        )
      );
    })
  );
};

Toggle.propTypes = {
  style: PropTypes.object,
  className: PropTypes.object,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
  })).isRequired,
  onChange: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool
};

Toggle.defaultProps = {
  isDisabled: false
};

module.exports = Toggle;