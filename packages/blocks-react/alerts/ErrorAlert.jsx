const React = require('react');
const PropTypes = require('prop-types');

const AlertBanner = require('./AlertBanner.jsx');

const ErrorAlert = props => (
  <AlertBanner
    style={props.style}
    className={`blx-error ${props.className}`}
    title={props.title}
    message={props.message}
  />
);

ErrorAlert.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  title: PropTypes.string,
  message: PropTypes.string
};

ErrorAlert.defaultProps = {
  className: '',
  style: null,
  title: 'Error',
  message: ''
};

module.exports = ErrorAlert;

