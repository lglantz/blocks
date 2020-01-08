import * as React from 'react';
import AlertBanner from './AlertBanner';
import WarningIcon from '../icons/WarningIcon';

const WarningAlert = (props: WarningAlertTypes) => (
  <AlertBanner
    {...props}
    className={`blx-warning ${props.className}`}
    icon={<WarningIcon className="blx-alert-icon" />}
  />
);

WarningAlert.defaultProps = {
  className: '',
  title: 'Warning',
  closable: true
};

type WarningAlertTypes = {
  className: string,
  title: string,
  closable: boolean,
};
export default WarningAlert;

