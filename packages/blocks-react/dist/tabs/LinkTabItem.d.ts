import * as React from 'react';
declare const LinkTabItem: React.FunctionComponent<LinkTabItemProps>;
declare type LinkTabItemProps = {
    className?: string;
    style?: any;
    text: string;
    href: string;
    active?: boolean;
    useReactLink?: boolean;
};
export default LinkTabItem;
