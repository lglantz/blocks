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
  text: PropTypes.string,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func
};

ButtonSecondary.defaultProps = {
  text: '',
  isDisabled: false,
  onClick: () => {}
};

module.exports = ButtonSecondary;

