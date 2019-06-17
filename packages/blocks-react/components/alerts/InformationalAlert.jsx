const React = require('react');
const PropTypes = require('prop-types');

const AlertBanner = require('./AlertBanner.jsx');
const InformationIcon = require('../icons/InformationIcon.jsx');

const InformationalAlert = props => (
  <AlertBanner
    {...props}
    className={`blx-information ${props.className}`}
    icon={<InformationIcon className="blx-alert-icon" />}
  />
);

InformationalAlert.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  closable: PropTypes.bool
};

InformationalAlert.defaultProps = {
  className: '',
  title: 'Information',
  closable: false
};

module.exports = InformationalAlert;

