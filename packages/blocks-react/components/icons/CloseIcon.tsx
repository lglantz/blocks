import * as React from 'react';
import Icon from './Icon';

const CloseIcon: React.FunctionComponent<CloseIconProps>= (props) => {
  return (
    <Icon {...props}>
      <path
        fillRule="nonzero"
        d="M11.414 10l4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414L8.586 10l-4.95-4.95L5.05 3.636 10 8.586l4.95-4.95 1.414 1.414z"
      />
    </Icon>
  );
}

type CloseIconProps = {
  className?: string,
  style?: any,
  fill?: string
};

export default CloseIcon;
