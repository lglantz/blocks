'use strict';

var React = require('react');
var PropTypes = require('prop-types');

var Icon = require('./Icon.js');

var CloseIcon = function CloseIcon(props) {
  return React.createElement(
    Icon,
    props,
    React.createElement('path', {
      fillRule: 'nonzero',
      d: 'M11.414 10l4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414L8.586 10l-4.95-4.95L5.05 3.636 10 8.586l4.95-4.95 1.414 1.414z'
    })
  );
};

module.exports = CloseIcon;