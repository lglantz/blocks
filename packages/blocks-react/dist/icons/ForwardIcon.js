'use strict';

var React = require('react');
var PropTypes = require('prop-types');

var Icon = require('./Icon.js');

var ForwardIcon = function ForwardIcon(props) {
  return React.createElement(
    Icon,
    props,
    React.createElement('path', {
      fillRule: 'evenodd',
      d: 'M1.778 0l8 8-8 8L0 14.222 6.222 8 0 1.778z'
    })
  );
};

module.exports = ForwardIcon;