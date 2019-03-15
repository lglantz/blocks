'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');
var PropTypes = require('prop-types');

var TextField = function TextField(props) {
  // text input element itself
  var textFieldClasses = '';

  // label element
  var labelElement = null;
  if (props.label) {
    labelElement = React.createElement(
      'label',
      { className: 'blx-ui-text' },
      props.label
    );
  }

  // invalid message and class
  var invalidLabelMessage = null;
  if (!props.isValid) {
    invalidLabelMessage = React.createElement(
      'span',
      { className: 'blx-invalid-input-message' },
      props.invalidErrorMessage
    );
    textFieldClasses += ' blx-invalid';
  }

  // prefix element
  var prefixElement = null;
  if (props.prefix) {
    prefixElement = React.createElement(
      'span',
      { className: 'blx-text-field-prefix' },
      props.prefix
    );
  }

  // suffix element
  var suffixElement = null;
  if (props.suffix) {
    suffixElement = React.createElement(
      'span',
      { className: 'blx-text-field-suffix' },
      props.suffix
    );
  }

  // icon element
  var iconElement = null;
  if (props.icon) {
    iconElement = React.createElement(
      'span',
      { className: 'blx-text-field-icon' },
      props.icon
    );
  }

  // root level classes
  var classes = 'blx-text-field ';
  if (props.isDisabled) classes += 'blx-disabled ';

  return React.createElement(
    'div',
    {
      style: props.style,
      className: classes + ' ' + props.className
    },
    labelElement,
    React.createElement(
      'div',
      { className: 'blx-text-field-container' },
      prefixElement,
      suffixElement,
      React.createElement('input', {
        className: textFieldClasses,
        type: props.type,
        name: props.name,
        value: props.value,
        placeholder: props.placeholder,
        disabled: props.isDisabled,
        autoComplete: props.autoComplete,
        readOnly: props.readOnly,
        onChange: props.onChange,
        onFocus: props.onFocus,
        onBlur: props.onBlur,
        onKeyUp: props.onKeyUp,
        onKeyDown: props.onKeyDown,
        ref: props.forwardedRef,
        autoFocus: props.autoFocus,
        min: props.min,
        max: props.max,
        step: props.step
      }),
      iconElement
    ),
    invalidLabelMessage
  );
};

TextField.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  prefix: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  suffix: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  isDisabled: PropTypes.bool,
  isValid: PropTypes.bool,
  invalidErrorMessage: PropTypes.string,
  onChange: PropTypes.func,
  onKeyUp: PropTypes.func,
  onKeyDown: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  autoComplete: PropTypes.string,
  readOnly: PropTypes.bool,
  autoFocus: PropTypes.bool,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number
};

TextField.defaultProps = {
  className: '',
  style: null,
  type: 'text',
  name: '',
  value: '',
  label: '',
  placeholder: '',
  prefix: null,
  suffix: null,
  icon: null,
  isDisabled: false,
  isValid: true,
  invalidErrorMessage: '',
  onChange: null,
  onKeyUp: null,
  onKeyDown: null,
  onFocus: null,
  onBlur: null,
  autoComplete: '',
  readOnly: false,
  autoFocus: false,
  min: null,
  max: null,
  step: 1
};

module.exports = React.forwardRef(function (props, ref) {
  return React.createElement(TextField, _extends({}, props, { forwardedRef: ref }));
});