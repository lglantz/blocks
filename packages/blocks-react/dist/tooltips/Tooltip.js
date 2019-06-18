'use strict';

var React = require('react');
var PropTypes = require('prop-types');

var closeOnClick = require('../wrappers/closeOnClick.js');

var Tooltip = function Tooltip(props) {
  var messageClasses = 'blx-tooltip-' + props.position + ' ';
  messageClasses += props.lightBg ? 'blx-light-bg ' : 'blx-dark-bg ';
  messageClasses += props.title ? 'blx-tooltip-titled-message ' : 'blx-tooltip-message ';
  if (!props.isOpen) messageClasses += 'blx-hidden ';

  return React.createElement(
    'div',
    {
      style: props.style,
      className: 'blx-tooltip ' + props.className,
      ref: props.forwardedRef
    },
    React.createElement(
      'button',
      {
        className: 'blx-tooltip-trigger',
        onClick: function onClick(e) {
          e.target.closest('.blx-tooltip-trigger').focus();
          props.toggle(e);
        }
      },
      props.trigger
    ),
    React.createElement(
      'div',
      { className: messageClasses },
      props.title && React.createElement(
        'h5',
        { className: 'blx-tooltip-titled-message-title' },
        props.title
      ),
      React.createElement(
        'p',
        null,
        props.text
      )
    )
  );
};

Tooltip.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  title: PropTypes.string,
  toggle: PropTypes.func.isRequired,
  trigger: PropTypes.object,
  lightBg: PropTypes.bool,
  position: PropTypes.string, // 'bottom', 'top', 'right', 'left'
  text: PropTypes.string,
  isOpen: PropTypes.bool
};

Tooltip.defaultProps = {
  style: null,
  className: '',
  title: '',
  trigger: null,
  lightBg: false,
  position: 'bottom',
  text: '',
  isOpen: false
};

module.exports = closeOnClick(Tooltip);