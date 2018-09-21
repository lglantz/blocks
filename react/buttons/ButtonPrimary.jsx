const React = require('react');
const PropTypes = require('prop-types');

const Button = require('./Button.jsx');
const LinkButton = require('./LinkButton.jsx');


const ButtonPrimary = React.forwardRef((props, ref) => {
  const Component = props.href ? LinkButton : Button;
  return (
   <Component
      {...props}
      ref={ref}
      classes="blx-primary"
    />
  );
});

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

