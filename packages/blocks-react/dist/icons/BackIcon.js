'use strict';

var React = require('react');

var Icon = require('./Icon.js');

var BackIcon = function BackIcon(props) {
  return React.createElement(
    Icon,
    props,
    React.createElement('path', {
      fillRule: 'nonzero',
      d: 'M7.422 10.014l6.35 6.37L12.36 17.8 4.6 10.014 12.389 2.2 13.8 3.616z'
    })
  );
};

module.exports = BackIcon;