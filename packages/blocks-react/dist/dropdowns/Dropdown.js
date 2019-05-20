'use strict';

var React = require('react');
var PropTypes = require('prop-types');

var DropdownItem = require('./DropdownItem.js');
var DownIcon = require('../icons/DownIcon.js');
var closeOnClick = require('../wrappers/closeOnClick.js');
var keyControlledMenu = require('../wrappers/keyControlledMenu.js');

var DropdownMenu = function DropdownMenu(props) {
  var triggerContent = props.text;
  var triggerClassNames = 'blx-dropdown-trigger';

  if (props.isOpen) triggerClassNames += ' blx-active';
  if (props.isDisabled) triggerClassNames += ' blx-disabled';
  if (!props.isValid) triggerClassNames += ' blx-invalid';

  if (props.value) {
    for (var i = 0; i < props.options.length; i++) {
      var option = props.options[i];
      if (option.value === props.value) {
        triggerContent = option.text || option.triggerContent || option.element;
        break;
      }
    }
  }

  return React.createElement(
    'div',
    {
      style: props.style,
      className: 'blx-dropdown-wrapper ' + props.className,
      ref: props.forwardedRef
    },
    React.createElement(
      'div',
      { className: 'blx-dropdown' },
      props.label && React.createElement(
        'label',
        { className: 'blx-ui-text' },
        props.label
      ),
      React.createElement(
        'button',
        {
          className: triggerClassNames,
          disabled: props.isDisabled,
          onClick: props.toggle,
          title: triggerContent,
          autoFocus: props.autoFocus,
          onKeyDown: props.onKeyDown,
          onFocus: props.onTriggerFocus
        },
        props.icon,
        React.createElement(
          'span',
          { className: props.value ? 'blx-dropdown-text' : 'blx-dropdown-placeholder' },
          triggerContent
        ),
        React.createElement(DownIcon, { className: 'blx-dropdown-arrow' })
      ),
      React.createElement(
        'div',
        { className: 'blx-dropdown-menu ' + (props.isOpen ? '' : 'blx-hidden') },
        React.createElement(
          'ul',
          { className: 'blx-dropdown-list' },
          props.options.map(function (option, idx) {
            return React.createElement(DropdownItem, {
              key: option.text || option.key,
              option: option,
              ref: props.optionsRefs[idx],
              isSelected: props.value === option.value,
              onKeyDown: props.onKeyDown,
              onKeyUp: props.onKeyUp,
              onSelect: props.onSelect
            });
          })
        )
      ),
      !props.isValid && !props.isOpen && React.createElement(
        'span',
        { className: 'blx-invalid-input-message' },
        props.invalidErrorMessage
      )
    )
  );
};

DropdownMenu.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  isOpen: PropTypes.bool,
  toggle: PropTypes.func.isRequired,
  text: PropTypes.string,
  icon: PropTypes.node,
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  options: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    disabled: PropTypes.bool,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    triggerContent: PropTypes.string,
    href: PropTypes.string,
    element: PropTypes.node,
    key: PropTypes.string
  })),
  isDisabled: PropTypes.bool,
  onSelect: PropTypes.func,
  autoFocus: PropTypes.bool,
  isValid: PropTypes.bool
  // FIXME: PropTypes.instanceOf(Element) breaks under server side rendering b/c Element is not in context
  // See: https://github.com/facebook/prop-types/issues/240#issuecomment-455222878
  // forwardedRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }).isRequired
};

DropdownMenu.defaultProps = {
  className: '',
  style: null,
  isOpen: false,
  options: [],
  text: 'Choose an option',
  icon: null,
  label: '',
  value: null,
  triggerContent: null,
  onSelect: function onSelect() {},
  autoFocus: false,
  isValid: true
};

module.exports = closeOnClick(keyControlledMenu(DropdownMenu));