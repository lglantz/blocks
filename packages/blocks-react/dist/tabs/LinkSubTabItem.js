'use strict';

var React = require('react');
var PropTypes = require('prop-types');

var LinkSubTabItem = function LinkSubTabItem(props) {
  var classes = 'blx-sub-tab ' + (props.isActive ? 'blx-active' : '') + ' ' + (props.isVisible ? '' : 'blx-hidden') + ' ' + (props.isDisabled ? 'blx-disabled' : '');
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
    'div',
    null,
    link,
    props.children
  );
};

LinkSubTabItem.propTypes = {
  text: PropTypes.string.isRequired,
  isVisible: PropTypes.bool,
  isActive: PropTypes.bool,
  isDisabled: PropTypes.bool
};

LinkSubTabItem.defaultProps = {
  isVisible: true,
  isActive: false,
  isDisabled: false
};

module.exports = LinkSubTabItem;