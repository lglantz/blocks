'use strict';

var React = require('react');
var PropTypes = require('prop-types');

var Icon = require('./Icon.js');

var WarningIcon = function WarningIcon(props) {
  return React.createElement(
    Icon,
    props,
    React.createElement('path', {
      d: 'M9 5v2.286L9.5 13h1l.5-5.714V5z'
    }),
    React.createElement('circle', { cx: '10', cy: '15', r: '1' })
  );
};

module.exports = WarningIcon;