'use strict';

var React = require('react');
var PropTypes = require('prop-types');

var DropdownItem = require('./DropdownItem.js');
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
        triggerContent = option.text;
        break;
      }
    }
  }

  return React.createElement(
    'div',
    { className: 'blx-dropdown-wrapper', ref: props.forwardedRef },
    React.createElement(
      'div',
      { className: 'blx-dropdown' },
      props.description && React.createElement(
        'div',
        null,
        React.createElement(
          'label',
          { className: 'blx-ui-text' },
          props.description
        )
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
        props.icon && React.createElement('span', { className: 'blx-icon blx-icon-' + props.icon }),
        React.createElement(
          'span',
          { className: props.value ? 'blx-dropdown-text' : 'blx-dropdown-placeholder' },
          triggerContent
        )
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
  isOpen: PropTypes.bool,
  toggle: PropTypes.func.isRequired,
  text: PropTypes.string,
  icon: PropTypes.string,
  description: PropTypes.string,
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
  isValid: PropTypes.bool,
  forwardedRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }).isRequired
};

DropdownMenu.defaultProps = {
  isOpen: false,
  options: [],
  text: 'Choose an option',
  icon: null,
  description: '',
  value: null,
  onChange: function onChange() {},
  autoFocus: false,
  isValid: true
};

module.exports = closeOnClick(keyControlledMenu(DropdownMenu));