const React = require('react');
const PropTypes = require('prop-types');
const classnames = require('classnames');

const BaseModal = require('./BaseModal.jsx');
const ButtonPrimary = require('../buttons/ButtonPrimary.jsx');
const ButtonSecondary = require('../buttons/ButtonSecondary.jsx');
const ButtonDanger = require('../buttons/ButtonDanger.jsx');
const SuccessIcon = require('../icons/SuccessIcon.jsx');
const InformationIcon = require('../icons/InformationIcon.jsx');
const WarningIcon = require('../icons/WarningIcon.jsx');
const ErrorIcon = require('../icons/ErrorIcon.jsx');

const TYPE_MAP = {
  success: {
    className: 'blx-success-modal',
    icon: SuccessIcon
  },
  information: {
    className: 'blx-information-modal',
    icon: InformationIcon
  },
  warning: {
    className: 'blx-warning-modal',
    icon: WarningIcon
  },
  error: {
    className: 'blx-error-modal',
    icon: ErrorIcon
  }
};

const ActionModal = (props) => {
  if (props.isHidden) return null;

  let confirmButton = null;
  if (props.onConfirm && props.confirmText) {
    const Button = props.variant === 'warning' ? ButtonDanger : ButtonPrimary;
    confirmButton = (
      <Button
        text={props.confirmText}
        onClick={props.onConfirm}
      />
    );
  }

  let cancelButton = null;
  if (props.onCancel && props.cancelText) {
    cancelButton = (
      <ButtonSecondary
        text={props.cancelText}
        onClick={props.onCancel}
      />
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

  const Icon = TYPE_MAP[props.variant].icon;

  return (
    <BaseModal
      style={props.style}
      className={classnames('blx-action-modal', props.className, TYPE_MAP[props.variant].className)}
      isHidden={props.isHidden}
      onClose={props.onClose}
    >
      <div className="blx-modal-content">
        <div className="blx-modal-title">
          <Icon className="blx-modal-icon" />
          <h4>{props.title}</h4>
        </div>
        {props.children}
      </div>
      {buttonBar}
    </BaseModal>
  );
};

ActionModal.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  isHidden: PropTypes.bool,
  title: PropTypes.string,
  confirmText: PropTypes.string,
  onConfirm: PropTypes.func,
  cancelText: PropTypes.string,
  onCancel: PropTypes.func,
  onClose: PropTypes.func,
  variant: PropTypes.oneOf(['success', 'information', 'warning', 'error']),
  children: PropTypes.node
};

ActionModal.defaultProps = {
  className: '',
  style: null,
  isHidden: true,
  title: '',
  confirmText: '',
  onConfirm: null,
  cancelText: '',
  onCancel: null,
  onClose: () => {},
  variant: 'success',
  children: null
};

module.exports = ActionModal;
