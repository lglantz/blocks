import * as React from 'react';
import AlertBanner from './AlertBanner';
import InformationIcon from '../icons/InformationIcon';

/** InformationalAlert */
const InformationalAlert: React.FC<{
  /** classname */
  className?: string,
  /** closable */
  closable?: boolean,
  /** Message */
  message?: string,
  /** onClose */
  onClose?: ()=> void,
  /** title */
  title?: string,
}> = props => (
  <AlertBanner
    {...props}

    className={`blx-information ${props.className}`}
    icon={<InformationIcon className="blx-alert-icon" />}
  />
);

InformationalAlert.defaultProps = {
  className: '',
  title: 'Information',
  closable: false
};

export default InformationalAlert;