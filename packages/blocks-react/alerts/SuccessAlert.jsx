const React = require('react');
const PropTypes = require('prop-types');

const AlertBanner = require('./AlertBanner.jsx');
const SuccessIcon = require('../icons/SuccessIcon.jsx');

const SuccessAlert = props => (
  <AlertBanner
    {...props}
    className={`blx-success ${props.className}`}
    icon={<SuccessIcon className="blx-alert-icon" />}
  />
);

SuccessAlert.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  closable: PropTypes.bool
};

SuccessAlert.defaultProps = {
  className: '',
  title: 'Success',
  closable: true
};

module.exports = SuccessAlert;

