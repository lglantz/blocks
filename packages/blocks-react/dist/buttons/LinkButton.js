'use strict';

var React = require('react');
var PropTypes = require('prop-types');
var ReactLink = require('react-router-dom').Link;

var LinkButton = React.forwardRef(function (props, ref) {
  var classes = 'blx-button ';
  if (props.icon) classes += 'blx-icon-button ';
  if (props.isDisabled) classes += 'blx-disabled ';

  if (props.useReactLink) {
    return React.createElement(
      ReactLink,
      {
        style: props.style,
        className: classes + ' ' + props.className,
        to: props.href,
        disabled: props.isDisabled,
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
  }

  return React.createElement(
    'a',
    {
      style: props.style,
      className: classes + ' ' + props.className,
      href: props.href,
      disabled: props.isDisabled,
      target: props.isExternal ? '_blank' : '_self',
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

LinkButton.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  href: PropTypes.string.isRequired,
  text: PropTypes.string,
  isDisabled: PropTypes.bool,
  isExternal: PropTypes.bool,
  useReactLink: PropTypes.bool,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  icon: PropTypes.node
};

LinkButton.defaultProps = {
  className: 'blx-primary',
  style: null,
  text: '',
  isDisabled: false,
  isExternal: false,
  useReactLink: false,
  leftIcon: null,
  rightIcon: null,
  icon: null
};

module.exports = LinkButton;