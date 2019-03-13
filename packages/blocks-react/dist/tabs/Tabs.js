'use strict';

var React = require('react');
var PropTypes = require('prop-types');

var Tabs = function Tabs(props) {
  return React.createElement(
    'ul',
    { className: (props.isVertical ? 'blx-vertical-tabs' : 'blx-horizontal-tabs') + ' ' + (props.isDisabled ? 'blx-disabled' : '') },
    props.children
  );
};

Tabs.propTypes = {
  isDisabled: PropTypes.bool,
  isVertical: PropTypes.bool
};

Tabs.defaultProps = {
  isDisabled: false,
  isVertical: false
};

module.exports = Tabs;