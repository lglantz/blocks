import * as React from 'react';
/** AlertBanner*/
declare class AlertBanner extends React.Component<AlertBannerProps, AlertBannerState> {
    static propTypes: any;
    static defaultProps: any;
    constructor(props: AlertBannerProps);
    onClose: () => void;
    render(): JSX.Element;
}
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
export default AlertBanner;
