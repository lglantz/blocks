const React = require('react');
const PropTypes = require('prop-types');

const AlertBanner = require('./AlertBanner.jsx');

const InformationalAlert = props => (
  <AlertBanner
    type="information"
    title={props.title}
    message={props.message}
  />
);

InformationalAlert.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string
};

InformationalAlert.defaultProps = {
  title: 'Information',
  message: ''
};

module.exports = InformationalAlert;

