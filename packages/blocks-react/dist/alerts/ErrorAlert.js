'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');
var PropTypes = require('prop-types');

var AlertBanner = require('./AlertBanner.js');
var ErrorIcon = require('../icons/ErrorIcon.js');

var ErrorAlert = function ErrorAlert(props) {
  return React.createElement(AlertBanner, _extends({}, props, {
    className: 'blx-error ' + props.className,
    icon: React.createElement(ErrorIcon, { className: 'blx-alert-icon' })
  }));
};

ErrorAlert.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.node
};

ErrorAlert.defaultProps = {
  className: '',
  icon: null
};

module.exports = ErrorAlert;