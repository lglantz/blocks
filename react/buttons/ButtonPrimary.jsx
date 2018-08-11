const React = require('react');
const PropTypes = require('prop-types');

const Button = require('./Button.jsx');
const LinkButton = require('./LinkButton.jsx');


function ButtonPrimary(props) {
  const Component = props.href ? LinkButton : Button;
  return (
   <Component
      {...props}
      classes="blx-primary"
    />
  );
}

ButtonPrimary.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  href: PropTypes.string,
  isDisabled: PropTypes.bool
};

ButtonPrimary.defaultProps = {
  isDisabled: false,
  onClick: null,
  href: ''
};

module.exports = ButtonPrimary;

