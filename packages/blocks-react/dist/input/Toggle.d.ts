/// <reference types="react" />
/**
 * This is a toggle, it can have many options.
 */
declare const Toggle: ({ className, style, options, value, label, disabled, ...other }: ToggleProps) => JSX.Element;
declare type ToggleProps = {
    className: string;
    style?: any;
    options: {
        text: string;
        value: string | number;
    }[];
    value: string | number;
    label?: string;
    disabled?: boolean;
};
export default Toggle;
