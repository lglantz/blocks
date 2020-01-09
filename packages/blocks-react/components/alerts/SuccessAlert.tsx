import * as React from 'react';
import AlertBanner from './AlertBanner';
import SuccessIcon from '../icons/SuccessIcon';

const SuccessAlert: React.FunctionComponent<SuccessAlertTypes> = props => {
  return (
    <AlertBanner
      {...props}
      className={`blx-success ${props.className}`}
      icon={<SuccessIcon className="blx-alert-icon" />}
    />
  )
};

SuccessAlert.defaultProps = {
  className: '',
  title: 'Success',
  closable: true
};
type SuccessAlertTypes = {
  className?: string,
  title?: string,
  closable?: boolean,
};
export default SuccessAlert;

