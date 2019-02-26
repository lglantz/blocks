'use strict';

var React = require('react');
var PropTypes = require('prop-types');
var ReactLink = require('react-router-dom').Link;

var LinkTabs = function LinkTabs(props) {
  var links = props.tabs.map(function (tab, idx) {
    var classes = 'blx-tab-item ' + (idx === props.activeTabIdx ? 'blx-active' : 'blx-inactive');
    var link = props.useReactLink ? React.createElement(
      ReactLink,
      { className: classes, to: tab.href },
      tab.name
    ) : React.createElement(
      'a',
      { className: classes, href: tab.href },
      tab.name
    );

    return React.createElement(
      'li',
      { key: props.name + '-' + tab.name },
      link
    );
  });

  return React.createElement(
    'ul',
    { className: (props.isVertical ? 'blx-vertical-tabs' : 'blx-horizontal-tabs') + ' ' + (props.isDisabled ? 'blx-disabled' : '') },
    links
  );
};

LinkTabs.propTypes = {
  name: PropTypes.string.isRequired,
  tabs: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    href: PropTypes.string
  })).isRequired,
  activeTabIdx: PropTypes.number,
  isDisabled: PropTypes.bool,
  isVertical: PropTypes.bool,
  useReactLink: PropTypes.bool
};

LinkTabs.defaultProps = {
  activeTabIdx: null,
  isDisabled: false,
  isVertical: false,
  useReactLink: false
};

module.exports = LinkTabs;