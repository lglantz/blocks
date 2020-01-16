import * as React from 'react';
declare const Breadcrumbs: React.FunctionComponent<BreadcrumbsProps>;
declare type BreadcrumbsProps = {
    className?: string;
    style?: any;
    breadcrumbs?: {
        text: string;
        href: string;
    }[];
};
export default Breadcrumbs;
