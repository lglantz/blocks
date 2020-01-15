import * as React from 'react';
import * as PropTypes from 'prop-types';
import AlertBanner from './AlertBanner';
import SuccessIcon from '../icons/SuccessIcon';

/** SuccessAlert */
const SuccessAlert: React.FC<{
  /** classname */
  className?: string,
  /** closable */
  closable?: boolean,
  /** Message */
  message?: string,
  /** onClose */
  onClose?: any
  /** title */
  title?: string,
}> = props => (
  <AlertBanner
    {...props}
    className={`blx-success ${props.className}`}
    icon={<SuccessIcon className="blx-alert-icon" />}
  />
);

SuccessAlert.propTypes = {
  className: PropTypes.string.isRequired,
  closable: PropTypes.bool,
  message: PropTypes.string,
  onClose: PropTypes.func,
  title: PropTypes.string,
};

SuccessAlert.defaultProps = {
  className: '',
  title: 'Success',
  closable: true
};

export default SuccessAlert;
