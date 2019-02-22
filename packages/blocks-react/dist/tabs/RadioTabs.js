'use strict';

var React = require('react');
var PropTypes = require('prop-types');

var RadioTabs = function RadioTabs(props) {
  return React.createElement(
    'div',
    { className: (props.isVertical ? 'blx-vertical-tabs' : 'blx-horizontal-tabs') + ' ' + (props.isDisabled ? 'blx-disabled' : '') },
    props.tabs.map(function (tab, idx) {
      return React.createElement(
        'label',
        {
          key: tab
        },
        React.createElement('input', {
          type: 'radio',
          name: props.name,
          value: tab,
          checked: idx === props.activeTabIdx,
          disabled: props.isDisabled,
          onChange: function onChange(evt) {
            return props.onChange(evt, idx);
          }
        }),
        React.createElement(
          'span',
          { className: 'blx-tab-item' },
          tab
        )
      );
    })
  );
};

RadioTabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
  activeTabIdx: PropTypes.number,
  name: PropTypes.string.isRequired, // needs to be unique for each tab group
  isDisabled: PropTypes.bool,
  isVertical: PropTypes.bool
};

RadioTabs.defaultProps = {
  activeTabIdx: null,
  isDisabled: false,
  isVertical: false
};

module.exports = RadioTabs;