const React = require('react');
const PropTypes = require('prop-types');

const Button = require('./Button.jsx');


const ButtonPrimary = props => (
  <Button
    {...props}
    classes="blx-button blx-small blx-primary"
  />
);

ButtonPrimary.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool
};

ButtonPrimary.defaultProps = {
  isDisabled: false
};

module.exports = ButtonPrimary;

