'use strict';

var React = require('react');
var PropTypes = require('prop-types');

var AlertBanner = require('./AlertBanner.js');

var ErrorAlert = function ErrorAlert(props) {
  return React.createElement(AlertBanner, {
    style: props.style,
    className: 'blx-error ' + props.className,
    title: props.title,
    message: props.message
  });
};

ErrorAlert.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  title: PropTypes.string,
  message: PropTypes.string
};

ErrorAlert.defaultProps = {
  className: '',
  style: null,
  title: 'Error',
  message: ''
};

module.exports = ErrorAlert;