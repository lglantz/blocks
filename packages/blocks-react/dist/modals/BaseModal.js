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
      props.isClosable && React.createElement('button', {
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
  isClosable: PropTypes.bool,
  onClose: PropTypes.func,
  children: PropTypes.node
};

BaseModal.defaultProps = {
  className: '',
  style: null,
  isHidden: true,
  isClosable: false,
  onClose: function onClose() {},
  children: null
};

module.exports = BaseModal;