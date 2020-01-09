import * as React from 'react';
import Icon from './Icon';

const InformationIcon = (props) => {
  return (
    <Icon {...props}>
      <circle
        cx="9.529"
        cy="15.027"
        r="1"
      />
      <path
        fillRule="nonzero"
        d="M10.409 12.809H8.645v-3.02l.237-.012c2-.102 3.155-1.041 3.155-2.402 0-1.045-.744-1.846-1.894-1.846-1.068 0-1.707.505-1.783 1.686l-.015.237-1.656-.023.004-.25c.033-2.062 1.386-3.206 3.594-3.206 2.103 0 3.466 1.484 3.466 3.354 0 1.855-1.24 3.355-3.344 3.777v1.705z"
      />
    </Icon>
  );
}

export default InformationIcon;
