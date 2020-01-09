import * as React from 'react';
import classnames from 'classnames';
import Link from 'react-router-dom/Link';

const LinkButton = React.forwardRef<HTMLAnchorElement, LinkButtonProps>((props, ref) => {
  const { icon, className, leftIcon, text, rightIcon, href, useReactLink, isExternal, ...other } = props;
  const classes = classnames('blx-button', className, {
    'blx-icon-button': !!icon,
    'blx-disabled': other.disabled
  });

  if (useReactLink) {
    return (
      //@ts-ignore
      <Link
        className={classes}
        to={href}
        ref={ref}
        {...other}
      >
        {leftIcon}
        {text && <span>{text}</span>}
        {icon}
        {rightIcon}
      </Link>
    );
  }

  return (
    <a
      className={classes}
      href={href}
      target={isExternal ? '_blank' : '_self'}
      ref={ref}
      {...other}
    >
      {leftIcon}
      {text && <span>{text}</span>}
      {icon}
      {rightIcon}
    </a>
  );
});

type LinkButtonProps = {
  className?: string,
  href: string,
  text?: string,
  isExternal?: boolean,
  useReactLink?: boolean,
  leftIcon?: any, //node,
  rightIcon?: any, //node,
  icon?: any, //node,
  disabled?: boolean
};

LinkButton.defaultProps = {
  className: 'blx-primary',
  text: '',
  isExternal: false,
  useReactLink: false,
  leftIcon: null,
  rightIcon: null,
  icon: null,
  disabled: false
};

export default LinkButton;
