'use strict';

var React = require('react');
var PropTypes = require('prop-types');

var DropdownItem = require('./DropdownItem.js');
var closeOnClick = require('../wrappers/closeOnClick.js');
var keyControlledMenu = require('../wrappers/keyControlledMenu.js');

var PopoverMenu = function PopoverMenu(props) {
  var menuClasses = 'blx-dropdown-menu';
  if (!props.isOpen) menuClasses += ' blx-hidden';
  if (props.isLeft) {
    menuClasses += ' blx-popover-is-left';
  } else {
    menuClasses += ' blx-popover-is-right';
  }
  return React.createElement(
    'div',
    { className: 'blx-popover-wrapper', ref: props.forwardedRef },
    props.text && React.createElement(
      'span',
      { className: 'blx-h5' },
      props.text
    ),
    React.createElement(
      'div',
      { className: 'blx-dropdown blx-popover' },
      React.createElement(
        'button',
        {
          className: 'blx-popover-trigger',
          disabled: props.isDisabled,
          onClick: props.toggle,
          title: props.text,
          autoFocus: props.autoFocus,
          onKeyDown: props.onKeyDown,
          onFocus: props.onTriggerFocus
        },
        React.createElement('span', { className: 'blx-icon blx-icon-' + props.icon })
      ),
      React.createElement(
        'div',
        { className: menuClasses },
        React.createElement(
          'ul',
          { className: 'blx-dropdown-list' },
          props.options.map(function (option, idx) {
            return React.createElement(DropdownItem, {
              key: option.text || option.key,
              option: option,
              ref: props.optionsRefs[idx],
              onKeyDown: props.onKeyDown,
              onKeyUp: props.onKeyUp,
              onSelect: props.onSelect
            });
          })
        )
      )
    )
  );
};

PopoverMenu.propTypes = {
  isOpen: PropTypes.bool,
  isLeft: PropTypes.bool,
  toggle: PropTypes.func.isRequired,
  text: PropTypes.string,
  icon: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  options: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    disabled: PropTypes.bool,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    href: PropTypes.string,
    element: PropTypes.node,
    key: PropTypes.string
  })),
  isDisabled: PropTypes.bool,
  onChange: PropTypes.func,
  autoFocus: PropTypes.bool,
  forwardedRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }).isRequired
};

PopoverMenu.defaultProps = {
  isOpen: false,
  isLeft: null,
  options: [],
  text: null,
  icon: 'more-horizontal',
  value: null,
  onChange: function onChange() {},
  autoFocus: false
};

module.exports = closeOnClick(keyControlledMenu(PopoverMenu));