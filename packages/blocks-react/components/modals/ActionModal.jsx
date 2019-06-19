const React = require('react');
const PropTypes = require('prop-types');

const BaseModal = require('./BaseModal.jsx');
const Button = require('../buttons/Button.jsx');


const ActionModal = (props) => {
  if (props.isHidden) return null;

  let confirmButton = null;
  if (props.onConfirm && props.confirmText) {
    confirmButton = (
      <Button
        onClick={props.onConfirm}
      >
        {props.confirmText}
      </Button>
    );
  }

  let cancelButton = null;
  if (props.onCancel && props.cancelText) {
    cancelButton = (
      <Button
        onClick={props.onCancel}
        color="secondary"
      >
        {props.cancelText}
      </Button>
    );
  }

  let buttonBar = null;
  if (confirmButton || cancelButton) {
    buttonBar = (
      <div className="blx-h-button-group blx-modal-buttons">
        {cancelButton}
        {confirmButton}
      </div>
    );
  }

  let actionInfo = null;
  if (props.actionInfo) {
    actionInfo = (
      <p>{props.actionInfo}</p>
    );
  }

  return (
    <BaseModal
      style={props.style}
      className={props.className}
      isHidden={props.isHidden}
      onClose={props.onClose}
    >
      <div>
        <h4>{props.title}</h4>
        <p>{props.message}</p>
        {actionInfo}
        {buttonBar}
      </div>
    </BaseModal>
  );
};

ActionModal.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
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
  className: '',
  style: null,
  isHidden: true,
  title: '',
  message: '',
  actionInfo: '',
  confirmText: '',
  cancelText: '',
  onConfirm: null,
  onCancel: null,
  onClose: () => {}
};

module.exports = ActionModal;
