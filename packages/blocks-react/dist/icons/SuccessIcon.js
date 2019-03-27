'use strict';

var React = require('react');
var PropTypes = require('prop-types');

var Icon = require('./Icon.js');

var SuccessIcon = function SuccessIcon(props) {
  return React.createElement(
    Icon,
    props,
    React.createElement('path', {
      fillRule: 'nonzero',
      d: 'M6.37 9.463L5 10.953l3.648 3.354 5.982-6.99L13.092 6l-4.618 5.397z'
    })
  );
};

module.exports = SuccessIcon;