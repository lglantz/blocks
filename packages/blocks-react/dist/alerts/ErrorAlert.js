'use strict';

var React = require('react');
var PropTypes = require('prop-types');

var AlertBanner = require('./AlertBanner.js');

var ErrorAlert = function ErrorAlert(props) {
  return React.createElement(AlertBanner, {
    type: 'error',
    title: props.title,
    message: props.message
  });
};

ErrorAlert.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string
};

ErrorAlert.defaultProps = {
  title: 'Error',
  message: ''
};

module.exports = ErrorAlert;