import * as React from 'react';
import Button from './Button';
import LinkButton from './LinkButton';


const ButtonDark: React.FunctionComponent<ButtonDarkProps> = React.forwardRef((props, ref: any) => {
  const Component = props.href ? LinkButton : Button;

  return (
    <Component
      {...props}
      ref={ref}
      href={props.href}
      className={`blx-dark ${props.className}`}
    />
  );
});

type ButtonDarkProps = {
  className?: string,
  href?: string,
  style?: any,//object
};

ButtonDark.defaultProps = {
  className: '',
  href: undefined,
  style: null
};

export default ButtonDark;
