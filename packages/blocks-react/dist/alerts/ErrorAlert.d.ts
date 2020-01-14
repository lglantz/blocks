import * as React from 'react';
/** ErrorAlert */
declare const ErrorAlert: React.FC<{
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
export default ErrorAlert;
