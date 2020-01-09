import * as React from 'react';

const RadioSubTabItem:React.FunctionComponent<RadioSubTabItemProps> = ({ visible, style, className, text, children, ...other }) => {
  let classes = '';
  if (!visible) classes += 'blx-hidden ';
  
  return (
    <label
      style={style}
      className={`${classes} ${className}`}
    >
      <input
        type="radio"
        {...other}
      />
      <span className="blx-sub-tab">
        {text}
      </span>
      {children}
    </label>
  );
}

type RadioSubTabItemProps = {
  className?: string,
  style?: any, //object,
  text: string,
  visible?: boolean
};

RadioSubTabItem.defaultProps = {
  className: '',
  style: null,
  visible: true
};

export default RadioSubTabItem;

