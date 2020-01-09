import * as React from 'react';
/**
 * AlertBanner description!!!
 */
declare class AlertBanner extends React.Component<AlertBannerProps, AlertBannerState> {
    static defaultProps: {
        className: string;
        style: any;
        title: string;
        icon: any;
        message: string;
        closable: boolean;
        onClose: any;
    };
    constructor(props: AlertBannerProps);
    onClose: () => void;
    render(): JSX.Element;
}
declare type AlertBannerProps = {
    className?: string;
    style?: any;
    title?: string;
    icon?: any;
    message?: string;
    closable?: boolean;
    onClose?: any;
};
declare type AlertBannerState = {
    hidden: boolean;
};
export default AlertBanner;
