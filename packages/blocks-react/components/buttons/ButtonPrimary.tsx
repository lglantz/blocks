import * as React from 'react';
import Button from './Button';
import LinkButton from './LinkButton';

const ButtonPrimary: React.FunctionComponent<ButtonPrimaryProps> = React.forwardRef((props, ref: any) => {
  const Component = props.href ? LinkButton : Button;

  return (
    <Component
      {...props}
      ref={ref}
      href={props.href}
      className={`blx-primary ${props.className}`}
    />
  );
});

type ButtonPrimaryProps = {
  className?: string,
  href?: string,
  style?: any,//object
};

ButtonPrimary.defaultProps = {
  className: '',
  href: undefined,
  style: null
};

export default ButtonPrimary;

