import * as React from 'react';
/** WarningAlert */
declare const WarningAlert: React.FC<{
    /** classname */
    className?: string;
    /** closable */
    closable?: boolean;
    /** Message */
    message?: string;
    /** onClose */
    onClose?: () => void;
    /** title */
    title?: string;
}>;
export default WarningAlert;
