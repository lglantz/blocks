'use strict';

var React = require('react');
var PropTypes = require('prop-types');

var AlertBanner = require('./AlertBanner.js');

var SuccessAlert = function SuccessAlert(props) {
  return React.createElement(AlertBanner, {
    type: 'success',
    title: props.title,
    message: props.message,
    closable: true,
    onClose: props.onClose
  });
};

SuccessAlert.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string,
  onClose: PropTypes.func
};

SuccessAlert.defaultProps = {
  title: 'Success',
  message: '',
  onClose: null
};

module.exports = SuccessAlert;