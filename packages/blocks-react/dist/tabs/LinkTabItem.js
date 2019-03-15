'use strict';

var React = require('react');
var PropTypes = require('prop-types');
var ReactLink = require('react-router-dom').Link;

var LinkTabItem = function LinkTabItem(props) {
  var classes = 'blx-tab-item ' + (props.isActive ? 'blx-active' : '');
  var link = props.useReactLink ? React.createElement(
    ReactLink,
    { className: classes, to: props.href },
    props.text
  ) : React.createElement(
    'a',
    { className: classes, href: props.href },
    props.text
  );

  return React.createElement(
    'li',
    {
      style: props.style,
      className: props.className
    },
    link,
    props.children
  );
};

LinkTabItem.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
  isDisabled: PropTypes.bool,
  useReactLink: PropTypes.bool
};

LinkTabItem.defaultProps = {
  className: '',
  style: null,
  isActive: false,
  isDisabled: false,
  useReactLink: false
};

module.exports = LinkTabItem;