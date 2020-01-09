import * as React from 'react';
declare function onToggle(e: any): void;
declare class AccordionSection extends React.Component<AccordionSectionProps> {
    content: any;
    static defaultProps: {
        className: string;
        style: any;
        open: boolean;
        onToggle: typeof onToggle;
    };
    componentDidMount(): void;
    componentDidUpdate(): void;
    render(): JSX.Element;
}
declare type AccordionSectionProps = {
    className?: string;
    style?: any;
    id: string;
    open?: boolean;
    trigger: any;
    onToggle: any;
};
export default AccordionSection;
