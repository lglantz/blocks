const React = require('react');
const PropTypes = require('prop-types');

const AlertBanner = require('./AlertBanner.jsx');
const SuccessIcon = require('../icons/SuccessIcon.jsx');

const SuccessAlert = props => (
  <AlertBanner
    style={props.style}
    className={`blx-success ${props.className}`}
    title={props.title}
    icon={<SuccessIcon className="blx-alert-icon" />}
    message={props.message}
    closable
    onClose={props.onClose}
  />
);

SuccessAlert.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  title: PropTypes.string,
  message: PropTypes.string,
  onClose: PropTypes.func
};

SuccessAlert.defaultProps = {
  className: '',
  style: null,
  title: 'Success',
  message: '',
  onClose: null
};

module.exports = SuccessAlert;

