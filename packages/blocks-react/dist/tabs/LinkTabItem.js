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
    null,
    link,
    props.children
  );
};

LinkTabItem.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
  isDisabled: PropTypes.bool,
  useReactLink: PropTypes.bool
};

LinkTabItem.defaultProps = {
  isActive: false,
  isDisabled: false,
  useReactLink: false
};

module.exports = LinkTabItem;