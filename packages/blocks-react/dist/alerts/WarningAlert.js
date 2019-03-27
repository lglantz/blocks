'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');
var PropTypes = require('prop-types');

var AlertBanner = require('./AlertBanner.js');
var WarningIcon = require('../icons/WarningIcon.js');

var WarningAlert = function WarningAlert(props) {
  return React.createElement(AlertBanner, _extends({}, props, {
    className: 'blx-warning ' + props.className,
    icon: React.createElement(WarningIcon, { className: 'blx-alert-icon' })
  }));
};

WarningAlert.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  closable: PropTypes.bool
};

WarningAlert.defaultProps = {
  className: '',
  title: 'Warning',
  closable: true
};

module.exports = WarningAlert;