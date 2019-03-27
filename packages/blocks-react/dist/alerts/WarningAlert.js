'use strict';

var React = require('react');
var PropTypes = require('prop-types');

var AlertBanner = require('./AlertBanner.js');
var WarningIcon = require('../icons/WarningIcon.js');

var WarningAlert = function WarningAlert(props) {
  return React.createElement(AlertBanner, {
    style: props.style,
    className: 'blx-warning ' + props.className,
    title: props.title,
    icon: React.createElement(WarningIcon, { className: 'blx-alert-icon' }),
    message: props.message,
    closable: props.closable
  });
};

WarningAlert.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  title: PropTypes.string,
  message: PropTypes.string,
  closable: PropTypes.bool
};

WarningAlert.defaultProps = {
  className: '',
  style: null,
  title: 'Warning',
  message: '',
  closable: true
};

module.exports = WarningAlert;