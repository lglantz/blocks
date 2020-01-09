import * as React from 'react';
import classnames from 'classnames';

import BaseModal from './BaseModal';
import ButtonPrimary from '../buttons/ButtonPrimary';
import ButtonSecondary from '../buttons/ButtonSecondary';
import ButtonDanger from '../buttons/ButtonDanger';
import SuccessIcon from '../icons/SuccessIcon';
import InformationIcon from '../icons/InformationIcon';
import WarningIcon from '../icons/WarningIcon';
import ErrorIcon from '../icons/ErrorIcon';

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

const ActionModal: React.FunctionComponent<ActionModalProps> = (props) => {
  if (props.isHidden) return null;

  let confirmButton = null;
  if (props.onConfirm && props.confirmText) {
    const Button = props.variant === 'warning' ? ButtonDanger : ButtonPrimary;
    confirmButton = (
      <Button
        //@ts-ignore
        text={props.confirmText}
        onClick={props.onConfirm}
      />
    );
  }

  let cancelButton = null;
  if (props.onCancel && props.cancelText) {
    cancelButton = (
      <ButtonSecondary
        //@ts-ignore
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

type ActionModalProps = {
  actionInfo?: string | number,
  className?: string,
  style?: any,//object,
  isHidden?: boolean,
  title?: string,
  confirmText?: string,
  onConfirm?: any,//func
  cancelText?: string,
  onCancel?: any,//func
  onClose?: any,//func
  variant?: 'success' | 'information' | 'warning' | 'error',
  children?: any, //node
};

ActionModal.defaultProps = {
  actionInfo: undefined,
  className: '',
  style: null,
  isHidden: true,
  title: '',
  confirmText: '',
  onConfirm: null,
  cancelText: '',
  onCancel: null,
  onClose: () => { },
  variant: 'success',
  children: null
};

export default ActionModal;
