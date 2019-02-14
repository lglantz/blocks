'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');
var PropTypes = require('prop-types');

var Button = require('./Button.js');
var LinkButton = require('./LinkButton.js');

var ButtonSecondary = React.forwardRef(function (props, ref) {
  var Component = props.href ? LinkButton : Button;
  return React.createElement(Component, _extends({}, props, {
    ref: ref,
    classes: 'blx-secondary'
  }));
});

ButtonSecondary.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  href: PropTypes.string,
  isDisabled: PropTypes.bool
};

ButtonSecondary.defaultProps = {
  isDisabled: false,
  onClick: null,
  href: ''
};

module.exports = ButtonSecondary;