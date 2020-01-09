import * as React from 'react';
declare const Table: React.FunctionComponent<TableProps>;
declare type TableProps = {
    tableName?: string;
    className?: string;
    style?: any;
    headings?: string[];
    entries?: {}[];
    onClick?: any;
};
export default Table;
