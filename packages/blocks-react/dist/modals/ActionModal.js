'use strict';

var React = require('react');
var PropTypes = require('prop-types');

var BaseModal = require('./BaseModal.js');
var ButtonPrimary = require('../buttons/ButtonPrimary.js');
var ButtonSecondary = require('../buttons/ButtonSecondary.js');

var ActionModal = function ActionModal(props) {
  if (props.isHidden) return null;

  var confirmButton = null;
  if (props.onConfirm && props.confirmText) {
    confirmButton = React.createElement(ButtonPrimary, {
      text: props.confirmText,
      onClick: props.onConfirm
    });
  }

  var cancelButton = null;
  if (props.onCancel && props.cancelText) {
    cancelButton = React.createElement(ButtonSecondary, {
      text: props.cancelText,
      onClick: props.onCancel
    });
  }

  var buttonBar = null;
  if (confirmButton || cancelButton) {
    buttonBar = React.createElement(
      'div',
      { className: 'blx-h-button-group blx-modal-buttons' },
      cancelButton,
      confirmButton
    );
  }

  var actionInfo = null;
  if (props.actionInfo) {
    actionInfo = React.createElement(
      'p',
      null,
      props.actionInfo
    );
  }

  return React.createElement(
    BaseModal,
    {
      isHidden: props.isHidden,
      onClose: props.onClose
    },
    React.createElement(
      'div',
      null,
      React.createElement(
        'h4',
        null,
        props.title
      ),
      React.createElement(
        'p',
        null,
        props.message
      ),
      actionInfo,
      buttonBar
    )
  );
};

ActionModal.propTypes = {
  isHidden: PropTypes.bool,
  title: PropTypes.string,
  message: PropTypes.string,
  actionInfo: PropTypes.string,
  confirmText: PropTypes.string,
  cancelText: PropTypes.string,
  onConfirm: PropTypes.func,
  onCancel: PropTypes.func,
  onClose: PropTypes.func
};

ActionModal.defaultProps = {
  isHidden: true,
  title: '',
  message: '',
  actionInfo: '',
  confirmText: '',
  cancelText: '',
  onConfirm: null,
  onCancel: null,
  onClose: function onClose() {}
};

module.exports = ActionModal;