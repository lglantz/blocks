const React = require('react');
const PropTypes = require('prop-types');

const AlertBanner = require('./AlertBanner.jsx');

const SuccessAlert = props => (
  <AlertBanner
    type="success"
    title={props.title}
    message={props.message}
    closable
    onClose={props.onClose}
  />
);

SuccessAlert.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string,
  onClose: PropTypes.func
};

SuccessAlert.defaultProps = {
  title: 'Success',
  message: '',
  onClose: null
};

module.exports = SuccessAlert;

