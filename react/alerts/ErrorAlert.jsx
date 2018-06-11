const React = require('react');
const PropTypes = require('prop-types');

const AlertBanner = require('./AlertBanner.jsx');

const ErrorAlert = props => (
  <AlertBanner
    type="error"
    title={props.title}
    message={props.message}
  />
);

ErrorAlert.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string
};

ErrorAlert.defaultProps = {
  title: 'Error',
  message: ''
};

module.exports = ErrorAlert;

