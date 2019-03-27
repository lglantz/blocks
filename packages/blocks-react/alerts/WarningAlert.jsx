const React = require('react');
const PropTypes = require('prop-types');

const AlertBanner = require('./AlertBanner.jsx');
const WarningIcon = require('../icons/WarningIcon.jsx');

const WarningAlert = props => (
  <AlertBanner
    style={props.style}
    className={`blx-warning ${props.className}`}
    title={props.title}
    icon={<WarningIcon className="blx-alert-icon" />}
    message={props.message}
    closable={props.closable}
  />
);

WarningAlert.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  title: PropTypes.string,
  message: PropTypes.string,
  closable: PropTypes.bool
};

WarningAlert.defaultProps = {
  className: '',
  style: null,
  title: 'Warning',
  message: '',
  closable: true
};

module.exports = WarningAlert;

