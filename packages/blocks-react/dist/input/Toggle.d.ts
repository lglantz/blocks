/**
 * This is a toggle, it can have many options.
 */
declare const Toggle: ({ className, style, options, value, label, disabled, ...other }: {
    className: string;
    style?: any;
    options: {
        text: string;
        value: string | number;
    }[];
    value: string | number;
    label?: string;
    disabled?: boolean;
}) => any;
export default Toggle;
