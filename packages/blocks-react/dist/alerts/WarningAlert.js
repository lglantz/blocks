'use strict';

var React = require('react');
var PropTypes = require('prop-types');

var AlertBanner = require('./AlertBanner.js');

var WarningAlert = function WarningAlert(props) {
  return React.createElement(AlertBanner, {
    type: 'warning',
    title: props.title,
    message: props.message,
    closable: true
  });
};

WarningAlert.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string
};

WarningAlert.defaultProps = {
  title: 'Warning',
  message: ''
};

module.exports = WarningAlert;