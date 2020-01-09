import * as React from 'react';
/**
 * This is a toggle, it can have many options.
 */
declare const Toggle: React.FunctionComponent<ToggleProps>;
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
