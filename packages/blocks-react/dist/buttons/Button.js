'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var React = require('react');
var PropTypes = require('prop-types');

var BasicButton = React.forwardRef(function (props, ref) {
  var classes = 'blx-button ';

  var icon = props.icon,
      isDisabled = props.isDisabled,
      className = props.className,
      leftIcon = props.leftIcon,
      text = props.text,
      rightIcon = props.rightIcon,
      other = _objectWithoutProperties(props, ['icon', 'isDisabled', 'className', 'leftIcon', 'text', 'rightIcon']);

  if (icon) classes += 'blx-icon-button ';
  if (isDisabled) classes += 'blx-disabled ';

  return React.createElement(
    'button',
    _extends({
      className: classes + ' ' + className,
      ref: ref,
      disabled: isDisabled
    }, other),
    leftIcon,
    text && React.createElement(
      'span',
      null,
      text
    ),
    icon,
    rightIcon
  );
});

BasicButton.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  isDisabled: PropTypes.bool,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  icon: PropTypes.node
};

BasicButton.defaultProps = {
  className: 'blx-primary',
  text: '',
  isDisabled: false,
  leftIcon: null,
  rightIcon: null,
  icon: null
};

module.exports = BasicButton;