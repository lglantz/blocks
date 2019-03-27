'use strict';

var React = require('react');
var PropTypes = require('prop-types');

var Icon = require('./Icon.js');

var NextIcon = function NextIcon(props) {
  return React.createElement(
    Icon,
    props,
    React.createElement('path', {
      fillRule: 'nonzero',
      d: 'M12.578 10.014L6.2 3.616 7.611 2.2l7.789 7.814L7.64 17.8l-1.412-1.416z'
    })
  );
};

module.exports = NextIcon;