'use strict';

var React = require('react');
var PropTypes = require('prop-types');
var ReactLink = require('react-router-dom').Link;

var LinkButton = React.forwardRef(function (props, ref) {
  var classes = 'blx-button ' + props.classes + ' ' + (props.iconName ? 'blx-icon-button' : '') + ' ' + (props.isDisabled ? 'blx-disabled' : '');

  if (props.useReactLink) {
    return React.createElement(
      ReactLink,
      {
        className: classes,
        to: props.href,
        disabled: props.isDisabled,
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
  }

  return React.createElement(
    'a',
    {
      className: classes,
      href: props.href,
      disabled: props.isDisabled,
      target: props.isExternal ? '_blank' : '_self',
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

LinkButton.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string,
  classes: PropTypes.string,
  isDisabled: PropTypes.bool,
  isExternal: PropTypes.bool,
  useReactLink: PropTypes.bool,
  leftIcon: PropTypes.string,
  rightIcon: PropTypes.string,
  iconName: PropTypes.string
};

LinkButton.defaultProps = {
  text: '',
  classes: 'blx-primary',
  isDisabled: false,
  isExternal: false,
  useReactLink: false,
  leftIcon: null,
  rightIcon: null,
  iconName: null
};

module.exports = LinkButton;