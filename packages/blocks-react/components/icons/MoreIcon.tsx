import * as React from 'react';
import Icon from './Icon';

const MoreIcon = (props) => {
  return (
    <Icon {...props}>
      <path
        fillRule="nonzero"
        d="M10 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm8 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM2 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
      />
    </Icon>
  );
}

export default MoreIcon;
