import * as React from 'react';
declare const BaseModal: React.FunctionComponent<BaseModalProps>;
declare type BaseModalProps = {
    classes?: {
        root: string;
        close: string;
        overlay: string;
    };
    className?: string;
    style?: any;
    isHidden?: boolean;
    isClosable?: boolean;
    onClose?: any;
    children?: any;
};
export default BaseModal;
