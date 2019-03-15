const React = require('react');
const PropTypes = require('prop-types');

const AlertBanner = require('./AlertBanner.jsx');

const WarningAlert = props => (
  <AlertBanner
    style={props.style}
    className={`blx-warning ${props.className}`}
    title={props.title}
    message={props.message}
    closable
  />
);

WarningAlert.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  title: PropTypes.string,
  message: PropTypes.string
};

WarningAlert.defaultProps = {
  className: '',
  style: null,
  title: 'Warning',
  message: ''
};

module.exports = WarningAlert;

