import * as React from 'react';
import Icon from './Icon';

const WarningIcon = (props) => {
  return (
    <Icon {...props}>
      <path
        d="M9 5v2.286L9.5 13h1l.5-5.714V5z"
      />
      <circle cx="10" cy="15" r="1" />
    </Icon>
  );
}

export default WarningIcon;
