'use strict';

var React = require('react');
var PropTypes = require('prop-types');

var AlertBanner = require('./AlertBanner.js');

var InformationalAlert = function InformationalAlert(props) {
  return React.createElement(AlertBanner, {
    type: 'information',
    title: props.title,
    message: props.message
  });
};

InformationalAlert.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string
};

InformationalAlert.defaultProps = {
  title: 'Information',
  message: ''
};

module.exports = InformationalAlert;