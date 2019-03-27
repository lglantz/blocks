'use strict';

var React = require('react');
var PropTypes = require('prop-types');

var BasicButton = React.forwardRef(function (props, ref) {
  var classes = 'blx-button ';
  if (props.icon) classes += 'blx-icon-button ';
  if (props.isDisabled) classes += 'blx-disabled ';

  return React.createElement(
    'button',
    {
      style: props.style,
      className: classes + ' ' + props.className,
      disabled: props.isDisabled,
      autoFocus: props.autoFocus,
      onClick: props.onClick,
      onKeyDown: props.onKeyDown,
      onKeyUp: props.onKeyUp,
      ref: ref
    },
    props.leftIcon,
    props.text && React.createElement(
      'span',
      null,
      props.text
    ),
    props.icon,
    props.rightIcon
  );
});

BasicButton.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string,
  isDisabled: PropTypes.bool,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  icon: PropTypes.node,
  autoFocus: PropTypes.bool,
  onKeyDown: PropTypes.func,
  onKeyUp: PropTypes.func
};

BasicButton.defaultProps = {
  className: 'blx-primary',
  style: null,
  text: '',
  isDisabled: false,
  leftIcon: null,
  rightIcon: null,
  icon: null,
  autoFocus: false,
  onKeyDown: function onKeyDown() {},
  onKeyUp: function onKeyUp() {}
};

module.exports = BasicButton;