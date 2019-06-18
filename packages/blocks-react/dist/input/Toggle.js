'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var React = require('react');
var PropTypes = require('prop-types');

var Toggle = function Toggle(_ref) {
  var className = _ref.className,
      style = _ref.style,
      options = _ref.options,
      value = _ref.value,
      other = _objectWithoutProperties(_ref, ['className', 'style', 'options', 'value']);

  var classes = 'blx-toggle ';
  if (other.disabled) classes += 'blx-disabled ';
  if (className) classes += className;
  return React.createElement(
    'div',
    {
      style: style,
      className: classes
    },
    options.map(function (option, idx) {
      return React.createElement(
        'label',
        {
          className: 'blx-toggle-container',
          key: option.text
        },
        React.createElement('input', _extends({
          type: 'radio',
          id: 'toggle-option-' + idx,
          value: option.value,
          defaultChecked: option.value === value
        }, other)),
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
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
  })).isRequired,
  disabled: PropTypes.bool
};

Toggle.defaultProps = {
  disabled: false
};

module.exports = Toggle;