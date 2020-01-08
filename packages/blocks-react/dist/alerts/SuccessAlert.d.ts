/// <reference types="react" />
declare const SuccessAlert: {
    (props: SuccessAlertTypes): JSX.Element;
    defaultProps: {
        className: string;
        title: string;
        closable: boolean;
    };
};
declare type SuccessAlertTypes = {
    className: string;
    title: string;
    closable: boolean;
};
export default SuccessAlert;
