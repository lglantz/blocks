'use strict';

var React = require('react');
var PropTypes = require('prop-types');

var Icon = require('./Icon.js');

var AddIcon = function AddIcon(props) {
  return React.createElement(
    Icon,
    props,
    React.createElement('path', {
      fillRule: 'nonzero',
      d: 'M11 9h6v2h-6v6H9v-6H3V9h6V3h2v6z'
    })
  );
};

module.exports = AddIcon;