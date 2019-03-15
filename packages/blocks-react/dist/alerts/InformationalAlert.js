'use strict';

var React = require('react');
var PropTypes = require('prop-types');

var AlertBanner = require('./AlertBanner.js');

var InformationalAlert = function InformationalAlert(props) {
  return React.createElement(AlertBanner, {
    style: props.style,
    className: 'blx-information ' + props.className,
    title: props.title,
    message: props.message
  });
};

InformationalAlert.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  title: PropTypes.string,
  message: PropTypes.string
};

InformationalAlert.defaultProps = {
  className: '',
  style: null,
  title: 'Information',
  message: ''
};

module.exports = InformationalAlert;