import * as React from 'react';
const { Colors } = require('blocks-base');

const Icon: React.FunctionComponent<IconProps> = (props) => {
  const { children, ...other } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20px"
      height="20px"
      viewBox="0 0 20 20"
      {...other}
    >
      {children}
    </svg>
  );
}

type IconProps = {
  className?: string,
  style?: any,
  fill?: string
};

Icon.defaultProps = {
  className: '',
  style: null,
  fill: Colors.PRIMARY_00
};

export default Icon;
