'use strict';

var React = require('react');
var PropTypes = require('prop-types');

var BaseModal = function BaseModal(props) {
  if (props.isHidden) return null;

  return React.createElement(
    'div',
    {
      style: props.style,
      className: props.className
    },
    React.createElement('div', {
      className: 'blx-modal-overlay',
      onClick: props.onClose
    }),
    React.createElement(
      'div',
      { className: 'blx-modal' },
      React.createElement('button', {
        className: 'blx-icon blx-icon-close',
        onClick: props.onClose
      }),
      React.createElement(
        'div',
        null,
        props.children
      )
    )
  );
};

BaseModal.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  isHidden: PropTypes.bool,
  onClose: PropTypes.func,
  children: PropTypes.node.isRequired
};

BaseModal.defaultProps = {
  className: '',
  style: null,
  isHidden: true,
  onClose: function onClose() {}
};

module.exports = BaseModal;