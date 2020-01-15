import * as React from 'react';
import * as PropTypes from 'prop-types';
import AlertBanner from './AlertBanner';
import ErrorIcon from '../icons/ErrorIcon';

/** ErrorAlert */
const ErrorAlert: React.FC<{
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
    className={`blx-error ${props.className}`}
    icon={<ErrorIcon className="blx-alert-icon" />}
  />
);

ErrorAlert.propTypes = {
  className: PropTypes.string.isRequired,
  closable: PropTypes.bool,
  message: PropTypes.string,
  onClose: PropTypes.func,
  title: PropTypes.string,
};

ErrorAlert.defaultProps = {
  className: '',
  title: 'Error',
  closable: false
};

export default ErrorAlert;