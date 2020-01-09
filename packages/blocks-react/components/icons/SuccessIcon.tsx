import * as React from 'react';
import Icon from './Icon';

const SuccessIcon = (props) => {
  return (
    <Icon {...props}>
      <path
        fillRule="nonzero"
        d="M6.37 9.463L5 10.953l3.648 3.354 5.982-6.99L13.092 6l-4.618 5.397z"
      />
    </Icon>
  );
}

export default SuccessIcon;
