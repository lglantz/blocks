'use strict';

var React = require('react');
var PropTypes = require('prop-types');

var BaseModal = function BaseModal(props) {
  if (props.isHidden) return null;

  return React.createElement(
    'div',
    null,
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
  isHidden: PropTypes.bool,
  onClose: PropTypes.func,
  children: PropTypes.node.isRequired
};

BaseModal.defaultProps = {
  isHidden: true,
  onClose: function onClose() {}
};

module.exports = BaseModal;