import * as React from 'react';
/** InformationalAlert */
declare const InformationalAlert: React.FC<{
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
export default InformationalAlert;
