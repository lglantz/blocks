import * as React from 'react';
import classnames from 'classnames';

const Checkbox: React.FunctionComponent<CheckboxProps> = ({ style, className, children, ...other }) => {
  const classes = classnames('blx-checkbox', className, {
    'blx-disabled': other.disabled
  });

  return (
    <label
      style={style}
      className={classes}
    >
      <div className="blx-label">
        {children}
      </div>
      <input
        type="checkbox"
        {...other}
      />
      <span className="blx-checkmark" />
    </label>
  );
}

type CheckboxProps = {
  style?: any,//object,
  className?: string,
  disabled?: boolean
};

Checkbox.defaultProps = {
  style: null,
  className: '',
  disabled: false
};

export default Checkbox;
