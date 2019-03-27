const React = require('react');
const PropTypes = require('prop-types');

const AlertBanner = require('./AlertBanner.jsx');
const ErrorIcon = require('../icons/ErrorIcon.jsx');

const ErrorAlert = props => (
  <AlertBanner
    {...props}
    className={`blx-error ${props.className}`}
    icon={<ErrorIcon className="blx-alert-icon" />}
  />
);

ErrorAlert.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  closable: PropTypes.bool
};

ErrorAlert.defaultProps = {
  className: '',
  title: 'Error',
  closable: false
};

module.exports = ErrorAlert;

