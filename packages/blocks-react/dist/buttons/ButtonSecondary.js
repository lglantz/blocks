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
    className: 'blx-secondary ' + props.className
  }));
});

ButtonSecondary.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object
};

ButtonSecondary.defaultProps = {
  className: '',
  style: null
};

module.exports = ButtonSecondary;