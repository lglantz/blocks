// @ts-check
import * as React from 'react';
import AlertBanner from './AlertBanner';
import WarningIcon from '../icons/WarningIcon';

/** WarningAlert */
const WarningAlert: React.FC<{
  /** classname */
  className?: string,
  /** closable */
  closable?: boolean,
  /** Message */
  message?: string,
  /** onClose */
  onClose?: () => void,
  /** title */
  title?: string,
}> = props => (
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

export default WarningAlert;
