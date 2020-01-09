import * as React from 'react';
declare const ActionModal: React.FunctionComponent<ActionModalProps>;
declare type ActionModalProps = {
    actionInfo?: string | number;
    className?: string;
    style?: any;
    isHidden?: boolean;
    title?: string;
    confirmText?: string;
    onConfirm?: any;
    cancelText?: string;
    onCancel?: any;
    onClose?: any;
    variant?: 'success' | 'information' | 'warning' | 'error';
    children?: any;
};
export default ActionModal;
