import * as React from 'react';
import Button from './Button';
import LinkButton from './LinkButton';

const ButtonSecondary: React.FunctionComponent<ButtonSecondaryProps> = React.forwardRef((props, ref: any) => {
  const Component = props.href ? LinkButton : Button;
  return (
    <Component
      {...props}
      href={props.href}
      ref={ref}
      className={`blx-secondary ${props.className}`}
    />
  );
});

type ButtonSecondaryProps = {
  className?: string,
  href?: string,
  style?: any,//object
};

ButtonSecondary.defaultProps = {
  className: '',
  href: undefined,
  style: null
};

export default ButtonSecondary;

