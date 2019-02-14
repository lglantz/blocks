'use strict';

var React = require('react');
var PropTypes = require('prop-types');

var Toggle = function Toggle(props) {
  return React.createElement(
    'div',
    { className: 'blx-toggle ' + (props.isDisabled ? 'blx-disabled' : '') },
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
          defaultChecked: option.isChecked,
          disabled: props.isDisabled
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
  name: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string,
    value: PropTypes.string,
    isChecked: PropTypes.bool
  })),
  isDisabled: PropTypes.bool
};

Toggle.defaultProps = {
  name: '',
  options: [],
  isDisabled: false
};

module.exports = Toggle;