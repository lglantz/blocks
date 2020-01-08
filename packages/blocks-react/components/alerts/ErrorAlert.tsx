import * as React from 'react';
import AlertBanner from './AlertBanner';
import ErrorIcon from '../icons/ErrorIcon';

const ErrorAlert = (props: ErrorAlertTypes) => (
  <AlertBanner
    {...props}
    className={`blx-error ${props.className}`}
    icon={<ErrorIcon className="blx-alert-icon" />}
  />
);

ErrorAlert.defaultProps = {
  className: '',
  title: 'Error',
  closable: false
};
type ErrorAlertTypes = {
  className: string,
  title: string,
  closable: boolean,
};
export default ErrorAlert;