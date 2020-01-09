import * as React from 'react';
import AlertBanner from './AlertBanner';
import InformationIcon from '../icons/InformationIcon';

const InformationalAlert = (props: InformationalAlertTypes) => (
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
type InformationalAlertTypes = {
  className?: string,
  title?: string,
  closable?: boolean,
};
export default InformationalAlert;

