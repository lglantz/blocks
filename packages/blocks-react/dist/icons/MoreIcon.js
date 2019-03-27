'use strict';

var React = require('react');
var PropTypes = require('prop-types');

var Icon = require('./Icon.js');

var MoreIcon = function MoreIcon(props) {
  return React.createElement(
    Icon,
    props,
    React.createElement('path', {
      fillRule: 'nonzero',
      d: 'M10 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm8 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM2 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4z'
    })
  );
};

module.exports = MoreIcon;