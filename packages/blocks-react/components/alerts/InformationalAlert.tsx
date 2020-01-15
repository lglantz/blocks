import * as React from 'react';
import * as PropTypes from 'prop-types';
import AlertBanner from './AlertBanner';
import InformationIcon from '../icons/InformationIcon';

/** InformationalAlert */
const InformationalAlert: React.FC<{
  /** classname */
  className?: string;
  /** closable */
  closable?: boolean;
  /** Message */
  message?: string;
  /** onClose */
  onClose?: () => void;
  /** title */
  title?: string;
}> = props => (
  <AlertBanner
    {...props}
    className={`blx-information ${props.className}`}
    icon={<InformationIcon className="blx-alert-icon" />}
  />
);

InformationalAlert.propTypes = {
  className: PropTypes.string.isRequired,
  closable: PropTypes.bool,
  message: PropTypes.string,
  onClose: PropTypes.func,
  title: PropTypes.string,
};

InformationalAlert.defaultProps = {
  closable: false,
  message: '',
  title: 'Information',
  onClose: undefined,
};

export default InformationalAlert;