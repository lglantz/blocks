'use strict';

var React = require('react');
var PropTypes = require('prop-types');

var Icon = require('./Icon.js');

var UpIcon = function UpIcon(props) {
  return React.createElement(
    Icon,
    props,
    React.createElement('path', {
      fillRule: 'nonzero',
      d: 'M9.986 7.422l-6.37 6.35L2.2 12.36 9.986 4.6l7.814 7.789-1.416 1.411z'
    })
  );
};

module.exports = UpIcon;