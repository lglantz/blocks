import * as React from 'react';
interface AlertBannerProps {
    /** classname */
    className?: string;
    /** closable */
    closable?: boolean;
    /** icon */
    icon?: JSX.Element;
    /** Message */
    message?: string;
    /** onClose */
    onClose?: () => void;
    /** style */
    style?: object;
    /** title */
    title?: string;
}
interface AlertBannerState {
    hidden: boolean;
}
declare const _default: React.ComponentClass<AlertBannerProps, AlertBannerState>;
export default _default;
