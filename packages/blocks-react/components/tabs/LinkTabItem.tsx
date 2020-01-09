import * as React from 'react';
import classnames from 'classnames';
import Link from 'react-router-dom/Link';

const LinkTabItem: React.FunctionComponent<LinkTabItemProps> = (props) => {
  const classes = classnames('blx-tab-item', {
    'blx-active': props.active
  });
  const link = props.useReactLink
    //@ts-ignore
    ? <Link className={classes} to={props.href}>{props.text}</Link>
    : <a className={classes} href={props.href}>{props.text}</a>;

  return (
    <li
      style={props.style}
      className={props.className}
    >
      {link}
      {props.children}
    </li>
  );
};

type LinkTabItemProps = {
  className?: string,
  style?: any, //object,
  text: string,
  href: string,
  active?: boolean,
  useReactLink?: boolean
};

LinkTabItem.defaultProps = {
  className: '',
  style: null,
  active: false,
  useReactLink: false
};

export default LinkTabItem;

