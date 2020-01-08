/// <reference types="react" />
declare const WarningAlert: {
    (props: WarningAlertTypes): JSX.Element;
    defaultProps: {
        className: string;
        title: string;
        closable: boolean;
    };
};
declare type WarningAlertTypes = {
    className: string;
    title: string;
    closable: boolean;
};
export default WarningAlert;
