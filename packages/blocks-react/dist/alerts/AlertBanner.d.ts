import * as React from 'react';
declare type AlertBannerProps = {
    className: string;
    style: any;
    title: string;
    icon: any;
    message: string;
    closable: boolean;
    onClose: any;
};
declare type AlertBannerState = {
    hidden: boolean;
};
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
export default AlertBanner;
