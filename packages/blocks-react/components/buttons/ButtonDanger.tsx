import * as React from 'react';
import Button from './Button';
import LinkButton from './LinkButton';

const ButtonDanger: React.FunctionComponent<ButtonDangerProps> = React.forwardRef((props, ref:any) => {
  const Component = props.href ? LinkButton : Button;
  return (
    <Component
      {...props}
      ref={ref}
      href={props.href}
      className={`blx-danger ${props.className}`}
    />
  );
});

type ButtonDangerProps = {
  className?: string,
  href?: string,
  style?: any, //object
};

ButtonDanger.defaultProps = {
  className: '',
  href: undefined,
  style: null
};

export default ButtonDanger;
