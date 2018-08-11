const React = require('react');
const PropTypes = require('prop-types');

const Button = require('./Button.jsx');
const LinkButton = require('./LinkButton.jsx');


function ButtonSmallPrimary(props) {
  const Component = props.href ? LinkButton : Button;
  return (
   <Component
      {...props}
      classes="blx-small blx-primary"
    />
  );
}

ButtonSmallPrimary.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  href: PropTypes.string,
  isDisabled: PropTypes.bool
};

ButtonSmallPrimary.defaultProps = {
  isDisabled: false,
  onClick: null,
  href: ''
};

module.exports = ButtonSmallPrimary;

