import * as React from 'react';
import classnames from 'classnames';

const BasicButton = React.forwardRef<HTMLButtonElement,BasicButtonProps>((props, ref) => {
  const { icon, className, leftIcon, text, rightIcon, ...other } = props;
  const classes = classnames('blx-button', className, {
    'blx-icon-button': !!icon,
    'blx-disabled': other.disabled
  });

  return (
    <button
      className={classes}
      ref={ref}
      {...other}
    >
      {leftIcon}
      {text && <span>{text}</span>}
      {icon}
      {rightIcon}
    </button>
  );
});

type BasicButtonProps = {
  className?: string,
  text?: string,
  leftIcon?: any,// node,
  rightIcon?: any,// node,
  icon?: any,// node,
  disabled?: boolean
};

BasicButton.defaultProps = {
  className: 'blx-primary',
  text: '',
  leftIcon: null,
  rightIcon: null,
  icon: null,
  disabled: false
};

export default BasicButton;
