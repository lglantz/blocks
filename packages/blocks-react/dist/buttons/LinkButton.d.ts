import * as React from 'react';
declare const LinkButton: React.ForwardRefExoticComponent<LinkButtonProps & React.RefAttributes<HTMLAnchorElement>>;
declare type LinkButtonProps = {
    className?: string;
    href: string;
    text?: string;
    isExternal?: boolean;
    useReactLink?: boolean;
    leftIcon?: any;
    rightIcon?: any;
    icon?: any;
    disabled?: boolean;
};
export default LinkButton;
