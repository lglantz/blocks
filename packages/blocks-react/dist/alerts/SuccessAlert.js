'use strict';

var React = require('react');
var PropTypes = require('prop-types');

var AlertBanner = require('./AlertBanner.js');

var SuccessAlert = function SuccessAlert(props) {
  return React.createElement(AlertBanner, {
    style: props.style,
    className: 'blx-success ' + props.className,
    title: props.title,
    message: props.message,
    closable: true,
    onClose: props.onClose
  });
};

SuccessAlert.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  title: PropTypes.string,
  message: PropTypes.string,
  onClose: PropTypes.func
};

SuccessAlert.defaultProps = {
  className: '',
  style: null,
  title: 'Success',
  message: '',
  onClose: null
};

module.exports = SuccessAlert;