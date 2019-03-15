'use strict';

var React = require('react');
var PropTypes = require('prop-types');

var Tabs = function Tabs(props) {
  var classes = '';
  if (props.isVertical) {
    classes += 'blx-vertical-tabs ';
  } else {
    classes += 'blx-horizontal-tabs ';
  }
  if (props.isDisabled) classes += 'blx-disabled ';

  return React.createElement(
    'ul',
    {
      style: props.style,
      className: classes + ' ' + props.className
    },
    props.children
  );
};

Tabs.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  isDisabled: PropTypes.bool,
  isVertical: PropTypes.bool
};

Tabs.defaultProps = {
  className: '',
  style: null,
  isDisabled: false,
  isVertical: false
};

module.exports = Tabs;