const React = require('react');
const PropTypes = require('prop-types');

const Button = require('./Button.jsx');


const ButtonSecondary = props => (
  <Button
    {...props}
    classes="blx-button blx-secondary"
  />
);

ButtonSecondary.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool
};

ButtonSecondary.defaultProps = {
  isDisabled: false
};

module.exports = ButtonSecondary;

