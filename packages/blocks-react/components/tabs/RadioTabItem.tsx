import * as React from 'react';

const RadioTabItem: React.FunctionComponent<RadioTabItemProps> = ({ style, className, text, children, ...other }) => {
  return (
    <li
      style={style}
      className={className}
    >
      <label>
        <input
          type="radio"
          {...other}
        />
        <span className="blx-tab-item">
          {text}
        </span>
        {children}
      </label>
    </li>
  );
}

type RadioTabItemProps = {
  className?: string,
  style?: any, //object,
  text: string
};

RadioTabItem.defaultProps = {
  className: '',
  style: null
};

export default RadioTabItem;
