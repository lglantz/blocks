const React = require('react');
const PropTypes = require('prop-types');

const Button = require('./Button.jsx');
const LinkButton = require('./LinkButton.jsx');


const ButtonSecondary = React.forwardRef((props, ref) => {
  const Component = props.href ? LinkButton : Button;
  return (
   <Component
      {...props}
      ref={ref}
      classes="blx-secondary"
    />
  );
});

ButtonSecondary.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  href: PropTypes.string,
  isDisabled: PropTypes.bool
};

ButtonSecondary.defaultProps = {
  isDisabled: false,
  onClick: null,
  href: ''
};

module.exports = ButtonSecondary;

