const React = require('react');
const PropTypes = require('prop-types');

const AlertBanner = require('./AlertBanner.jsx');

const WarningAlert = props => (
  <AlertBanner
    type="warning"
    title={props.title}
    message={props.message}
    closable
  />
);

WarningAlert.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string
};

WarningAlert.defaultProps = {
  title: 'Warning',
  message: ''
};

module.exports = WarningAlert;

