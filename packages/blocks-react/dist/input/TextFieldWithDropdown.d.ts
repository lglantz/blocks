import * as React from 'react';
declare const TextFieldWithDropdown: React.FunctionComponent<TextFieldWithDropdownProps>;
declare type TextFieldWithDropdownProps = {
    className?: string;
    style?: any;
    disabled?: boolean;
    textField?: {
        label: string;
        onChange: any;
        name: string;
        type: string;
        placeholder: string;
        invalidErrorMessage: string;
        value: string;
        isValid: boolean;
    };
    dropdown?: {
        text: string;
        onChange: any;
        options: {
            text: string | number;
            value: string | number;
            href: string;
            disabled: boolean;
        }[];
        value?: string | number;
    };
};
export default TextFieldWithDropdown;
