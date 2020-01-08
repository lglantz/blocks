/// <reference types="react" />
declare const InformationalAlert: {
    (props: InformationalAlertTypes): JSX.Element;
    defaultProps: {
        className: string;
        title: string;
        closable: boolean;
    };
};
declare type InformationalAlertTypes = {
    className: string;
    title: string;
    closable: boolean;
};
export default InformationalAlert;
