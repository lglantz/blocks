import * as React from 'react';
import classnames from 'classnames';
import Link from 'react-router-dom/Link';

const LinkSubTabItem: React.FunctionComponent<LinkSubTabItemProps> = (props) => {
  const classes = classnames('blx-sub-tab', {
    'blx-active': props.active,
    'blx-hidden': !props.visible,
    'blx-disabled': props.disabled
  });
  const link = props.useReactLink
    //@ts-ignore
    ? <Link className={classes} to={props.href}>{props.text}</Link>
    : <a className={classes} href={props.href}>{props.text}</a>;

  return (
    <div
      style={props.style}
      className={props.className}
    >
      {link}
      {props.children}
    </div>
  );
}

type LinkSubTabItemProps = {
  className?: string,
  style?: any, //object,
  text: string,
  visible?: boolean,
  active?: boolean,
  disabled?: boolean,
  useReactLink?: boolean,
  href?: string,
};

LinkSubTabItem.defaultProps = {
  className: '',
  style: null,
  visible: true,
  active: false,
  disabled: false,
  href: undefined,
  useReactLink: false,
};

export default LinkSubTabItem;
