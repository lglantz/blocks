import * as React from 'react';
declare type TextAreaProps = {
    label: string;
    isValid: boolean;
    invalidErrorMessage: string;
} & JSX.IntrinsicElements["textarea"];
/**
 * Text Area Block
 */
declare class TextArea extends React.Component<TextAreaProps> {
    textAreaRef: React.RefObject<any>;
    static defaultProps: {
        className: string;
        style: any;
        label: string;
        disabled: boolean;
        isValid: boolean;
        invalidErrorMessage: string;
        onKeyUp: any;
    };
    constructor(props: any);
    componentDidMount(): void;
    resizeTextArea(): void;
    render(): JSX.Element;
}
export default TextArea;
