const React = require('react');
const PropTypes = require('prop-types');

const AlertBanner = require('./AlertBanner.jsx');
const WarningIcon = require('../icons/WarningIcon.jsx');

const WarningAlert = props => (
  <AlertBanner
    {...props}
    className={`blx-warning ${props.className}`}
    icon={<WarningIcon className="blx-alert-icon" />}
  />
);

WarningAlert.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  closable: PropTypes.bool
};

WarningAlert.defaultProps = {
  className: '',
  title: 'Warning',
  closable: true
};

module.exports = WarningAlert;

