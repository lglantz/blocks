'use strict';

var React = require('react');
var PropTypes = require('prop-types');

var ComboBox = function ComboBox(props) {
  var options = props.options.map(function (option) {
    return React.createElement(
      'option',
      {
        key: option.value,
        value: option.value
      },
      option.text
    );
  });

  if (props.blankOption) {
    options.unshift(React.createElement(
      'option',
      { key: 'blank-option', disabled: true, selected: true, value: '' },
      props.blankOption
    ));
  }

  return React.createElement(
    'select',
    {
      className: '' + (props.isDisabled ? 'blx-disabled' : ''),
      disabled: props.isDisabled,
      value: props.value,
      onChange: props.onChange
    },
    options
  );
};

ComboBox.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    text: PropTypes.string
  })),
  isDisabled: PropTypes.bool,
  value: PropTypes.string,
  blankOption: PropTypes.string,
  onChange: PropTypes.func
};

ComboBox.defaultProps = {
  options: [],
  isDisabled: false,
  value: '',
  blankOption: null,
  onChange: function onChange() {}
};

module.exports = ComboBox;