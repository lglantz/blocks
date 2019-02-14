'use strict';

var React = require('react');
var PropTypes = require('prop-types');

var BasicButton = React.forwardRef(function (props, ref) {
  return React.createElement(
    'button',
    {
      className: 'blx-button ' + props.classes + ' ' + (props.iconName ? 'blx-icon-button' : '') + ' ' + (props.isDisabled ? 'blx-disabled' : ''),
      onClick: props.onClick,
      disabled: props.isDisabled,
      autoFocus: props.autoFocus,
      onKeyDown: props.onKeyDown,
      onKeyUp: props.onKeyUp,
      ref: ref
    },
    props.leftIcon && React.createElement('span', { className: 'blx-icon blx-icon-' + props.leftIcon }),
    props.text && React.createElement(
      'span',
      null,
      props.text
    ),
    props.iconName && React.createElement('span', { className: 'blx-icon blx-icon-' + props.iconName }),
    props.rightIcon && React.createElement('span', { className: 'blx-icon blx-icon-' + props.rightIcon })
  );
});

BasicButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string,
  classes: PropTypes.string,
  isDisabled: PropTypes.bool,
  leftIcon: PropTypes.string,
  rightIcon: PropTypes.string,
  iconName: PropTypes.string,
  autoFocus: PropTypes.bool,
  onKeyDown: PropTypes.func,
  onKeyUp: PropTypes.func
};

BasicButton.defaultProps = {
  text: '',
  classes: 'blx-primary',
  isDisabled: false,
  leftIcon: null,
  rightIcon: null,
  iconName: null,
  autoFocus: false,
  onKeyDown: function onKeyDown() {},
  onKeyUp: function onKeyUp() {}
};

module.exports = BasicButton;