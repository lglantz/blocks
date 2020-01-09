import * as React from 'react';
import classnames from 'classnames';

const RadioButton: React.FunctionComponent<RadioButtonProps> = ({ checked, isValid, style, className, text, ...other }) => {
  const classes = classnames('blx-radio', className, {
    'blx-disabled': other.disabled,
    'blx-invalid': !isValid
  });
  return (
    <label
      style={style}
      className={classes}
    >
      <div className="blx-radio-label" title={text}>
        {text}
      </div>
      <input
        type="radio"
        checked={checked}
        {...other}
      />
      <span className="blx-radio-check" />
    </label>
  );
}

type RadioButtonProps = {
  checked?: boolean,
  disabled?: boolean,
  isValid?: boolean,
  style?: any, //object,
  className?: string,
  text?: string
};

RadioButton.defaultProps = {
  checked: false,
  disabled: false,
  isValid: true,
  style: null,
  className: '',
  text: '',
};

export default RadioButton;
