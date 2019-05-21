'use strict';

var React = require('react');
var PropTypes = require('prop-types');

var DropdownItem = require('./DropdownItem.js');
var MoreIcon = require('../icons/MoreIcon.js');
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
    {
      style: props.style,
      className: 'blx-popover-wrapper ' + props.className,
      ref: props.forwardedRef
    },
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
        props.icon
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
  className: PropTypes.string,
  style: PropTypes.object,
  isOpen: PropTypes.bool,
  isLeft: PropTypes.bool,
  toggle: PropTypes.func.isRequired,
  text: PropTypes.string,
  icon: PropTypes.node,
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
  autoFocus: PropTypes.bool
  // FIXME: PropTypes.instanceOf(Element) breaks under server side rendering b/c Element is not in context
  // See: https://github.com/facebook/prop-types/issues/240#issuecomment-455222878
  // forwardedRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }).isRequired
};

PopoverMenu.defaultProps = {
  className: '',
  style: null,
  isOpen: false,
  isLeft: null,
  options: [],
  text: null,
  icon: React.createElement(MoreIcon, null),
  value: null,
  onChange: function onChange() {},
  autoFocus: false
};

module.exports = closeOnClick(keyControlledMenu(PopoverMenu));