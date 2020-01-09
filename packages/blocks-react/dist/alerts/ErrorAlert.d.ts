/// <reference types="react" />
declare const ErrorAlert: {
    (props: ErrorAlertTypes): JSX.Element;
    defaultProps: {
        className: string;
        title: string;
        closable: boolean;
    };
};
declare type ErrorAlertTypes = {
    className?: string;
    title?: string;
    closable?: boolean;
};
export default ErrorAlert;
