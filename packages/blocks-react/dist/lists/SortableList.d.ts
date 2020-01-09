import * as React from 'react';
declare class SortableList extends React.Component<SortableListProps> {
    static defaultProps: {
        className: string;
        style: any;
        onDrop: () => void;
    };
    listDOM: React.RefObject<any>;
    source: any;
    constructor(props: any);
    componentDidMount(): void;
    isInList(element: any): boolean;
    getListElement(child: any): any;
    getDragTarget(e: any): any;
    onDragOver(e: any): void;
    onDragLeave(e: any): void;
    onDrop(e: any): void;
    onDragStart(e: any): void;
    onDragEnd(e: any): void;
    render(): JSX.Element;
}
declare type SortableListProps = {
    className?: string;
    style?: any;
    onDrop?: any;
};
export default SortableList;
