'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');
var PropTypes = require('prop-types');

var AlertBanner = require('./AlertBanner.js');
var SuccessIcon = require('../icons/SuccessIcon.js');

var SuccessAlert = function SuccessAlert(props) {
  return React.createElement(AlertBanner, _extends({}, props, {
    className: 'blx-success ' + props.className,
    icon: React.createElement(SuccessIcon, { className: 'blx-alert-icon' })
  }));
};

SuccessAlert.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  closable: PropTypes.bool
};

SuccessAlert.defaultProps = {
  className: '',
  title: 'Success',
  closable: true
};

module.exports = SuccessAlert;