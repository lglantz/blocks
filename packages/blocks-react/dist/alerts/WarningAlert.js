'use strict';

var React = require('react');
var PropTypes = require('prop-types');

var AlertBanner = require('./AlertBanner.js');

var WarningAlert = function WarningAlert(props) {
  return React.createElement(AlertBanner, {
    style: props.style,
    className: 'blx-warning ' + props.className,
    title: props.title,
    message: props.message,
    closable: true
  });
};

WarningAlert.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  title: PropTypes.string,
  message: PropTypes.string
};

WarningAlert.defaultProps = {
  className: '',
  style: null,
  title: 'Warning',
  message: ''
};

module.exports = WarningAlert;