const React = require('react');
const PropTypes = require('prop-types');

const AlertBanner = require('./AlertBanner.jsx');
const InformationIcon = require('../icons/InformationIcon.jsx');

const InformationalAlert = props => (
  <AlertBanner
    style={props.style}
    className={`blx-information ${props.className}`}
    title={props.title}
    icon={<InformationIcon className="blx-alert-icon" />}
    message={props.message}
  />
);

InformationalAlert.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  title: PropTypes.string,
  message: PropTypes.string
};

InformationalAlert.defaultProps = {
  className: '',
  style: null,
  title: 'Information',
  message: ''
};

module.exports = InformationalAlert;

