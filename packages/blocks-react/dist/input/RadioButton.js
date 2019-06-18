'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var React = require('react');
var PropTypes = require('prop-types');

var RadioButton = function RadioButton(_ref) {
  var checked = _ref.checked,
      isValid = _ref.isValid,
      style = _ref.style,
      className = _ref.className,
      text = _ref.text,
      other = _objectWithoutProperties(_ref, ['checked', 'isValid', 'style', 'className', 'text']);

  var classes = 'blx-radio ';
  if (other.disabled) classes += 'blx-disabled ';
  if (!isValid) classes += 'blx-invalid ';

  return React.createElement(
    'label',
    {
      style: style,
      className: classes + ' ' + className
    },
    React.createElement(
      'div',
      { className: 'blx-radio-label', title: text },
      text
    ),
    React.createElement('input', _extends({
      type: 'radio',
      defaultChecked: checked
    }, other)),
    React.createElement('span', { className: 'blx-radio-check' })
  );
};

RadioButton.propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  isValid: PropTypes.bool,
  style: PropTypes.object,
  className: PropTypes.string,
  text: PropTypes.string
};

RadioButton.defaultProps = {
  checked: false,
  disabled: false,
  isValid: true,
  style: null,
  className: '',
  text: ''
};

module.exports = RadioButton;