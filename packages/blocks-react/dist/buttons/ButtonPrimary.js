'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');
var PropTypes = require('prop-types');

var Button = require('./Button.js');
var LinkButton = require('./LinkButton.js');

var ButtonPrimary = React.forwardRef(function (props, ref) {
  var Component = props.href ? LinkButton : Button;
  return React.createElement(Component, _extends({}, props, {
    ref: ref,
    className: 'blx-primary ' + props.className
  }));
});

ButtonPrimary.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object
};

ButtonPrimary.defaultProps = {
  className: '',
  style: null
};

module.exports = ButtonPrimary;