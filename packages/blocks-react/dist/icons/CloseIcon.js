'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');

var Icon = require('./Icon.js');

var CloseIcon = function CloseIcon(props) {
  return React.createElement(
    Icon,
    _extends({}, props, {
      fill: 'var(--primary-00)' // also the default fill, but being specific since the hover color is defined in css
    }),
    React.createElement('path', {
      fillRule: 'nonzero',
      d: 'M11.414 10l4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414L8.586 10l-4.95-4.95L5.05 3.636 10 8.586l4.95-4.95 1.414 1.414z'
    })
  );
};

module.exports = CloseIcon;