'use strict';

var React = require('react');

var Icon = require('./Icon.js');

var DownIcon = function DownIcon(props) {
  return React.createElement(
    Icon,
    props,
    React.createElement('path', {
      fillRule: 'nonzero',
      d: 'M9.986 12.578L16.384 6.2 17.8 7.611 9.986 15.4 2.2 7.64l1.416-1.412z'
    })
  );
};

module.exports = DownIcon;