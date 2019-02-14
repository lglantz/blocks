'use strict';

var React = require('react');
var PropTypes = require('prop-types');

var LinkTabs = function LinkTabs(props) {
  return React.createElement(
    'ul',
    { className: (props.isVertical ? 'blx-vertical-tabs' : 'blx-horizontal-tabs') + ' ' + (props.isDisabled ? 'blx-disabled' : '') },
    props.tabs.map(function (tab, idx) {
      return React.createElement(
        'li',
        {
          key: Math.random()
        },
        React.createElement(
          'a',
          {
            className: 'blx-tab-item ' + (idx === props.activeTabIdx ? 'blx-active' : 'blx-inactive'),
            href: tab.href
          },
          tab.name
        )
      );
    })
  );
};

LinkTabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    href: PropTypes.string
  })).isRequired,
  activeTabIdx: PropTypes.number,
  isDisabled: PropTypes.bool,
  isVertical: PropTypes.bool
};

LinkTabs.defaultProps = {
  activeTabIdx: null,
  isDisabled: false,
  isVertical: false
};

module.exports = LinkTabs;