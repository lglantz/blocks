'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var React = require('react');
var PropTypes = require('prop-types');

var TextField = function TextField(_ref) {
  var label = _ref.label,
      isValid = _ref.isValid,
      invalidErrorMessage = _ref.invalidErrorMessage,
      prefix = _ref.prefix,
      suffix = _ref.suffix,
      icon = _ref.icon,
      style = _ref.style,
      className = _ref.className,
      forwardedRef = _ref.forwardedRef,
      other = _objectWithoutProperties(_ref, ['label', 'isValid', 'invalidErrorMessage', 'prefix', 'suffix', 'icon', 'style', 'className', 'forwardedRef']);

  // text input element itself
  var textFieldClasses = '';

  // label element
  var labelElement = null;
  if (label) {
    labelElement = React.createElement(
      'label',
      { className: 'blx-ui-text' },
      label
    );
  }

  // invalid message and class
  var invalidLabelMessage = null;
  if (!isValid) {
    invalidLabelMessage = React.createElement(
      'span',
      { className: 'blx-invalid-input-message' },
      invalidErrorMessage
    );
    textFieldClasses += ' blx-invalid';
  }

  // prefix element
  var prefixElement = null;
  if (prefix) {
    prefixElement = React.createElement(
      'span',
      { className: 'blx-text-field-prefix' },
      prefix
    );
  }

  // suffix element
  var suffixElement = null;
  if (suffix) {
    suffixElement = React.createElement(
      'span',
      { className: 'blx-text-field-suffix' },
      suffix
    );
  }

  // icon element
  var iconElement = null;
  if (icon) {
    iconElement = React.createElement(
      'span',
      { className: 'blx-text-field-icon' },
      icon
    );
  }

  // root level classes
  var classes = 'blx-text-field ';
  if (other.disabled) classes += 'blx-disabled ';

  return React.createElement(
    'div',
    {
      style: style,
      className: classes + ' ' + className
    },
    labelElement,
    React.createElement(
      'div',
      { className: 'blx-text-field-container' },
      prefixElement,
      suffixElement,
      React.createElement('input', _extends({
        className: textFieldClasses,
        ref: forwardedRef
      }, other)),
      iconElement
    ),
    invalidLabelMessage
  );
};

TextField.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  label: PropTypes.string,
  prefix: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  suffix: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  icon: PropTypes.node,
  disabled: PropTypes.bool,
  isValid: PropTypes.bool,
  invalidErrorMessage: PropTypes.string
};

TextField.defaultProps = {
  className: '',
  style: null,
  label: '',
  prefix: null,
  suffix: null,
  icon: null,
  disabled: false,
  isValid: true,
  invalidErrorMessage: ''
};

module.exports = React.forwardRef(function (props, ref) {
  return React.createElement(TextField, _extends({}, props, { forwardedRef: ref }));
});