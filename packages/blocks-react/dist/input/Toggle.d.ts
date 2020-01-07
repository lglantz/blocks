declare const React: any;
declare const PropTypes: any;
declare const classnames: any;
interface ToggleProps {
    className: string;
    style: any;
    options: any;
    value: any;
    label: any;
    disabled: any;
}
declare const Toggle: {
    ({ className, style, options, value, label, ...other }: ToggleProps): any;
    propTypes: {
        style: any;
        className: any;
        value: any;
        options: any;
        disabled: any;
        label: any;
    };
    defaultProps: {
        disabled: boolean;
        label: string;
    };
};
