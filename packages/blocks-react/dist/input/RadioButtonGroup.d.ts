import * as React from 'react';
declare const RadioButtonGroup: React.FunctionComponent<RadioButtonGroupProps>;
declare type RadioButtonGroupProps = {
    className?: string;
    style?: any;
    name: string;
    onChange: any;
    options?: {
        text: string;
        isValid: boolean;
    }[];
    disabled?: boolean;
    checkedIndex?: number;
};
export default RadioButtonGroup;
