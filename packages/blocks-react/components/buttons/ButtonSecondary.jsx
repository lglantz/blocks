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
      className={`blx-secondary ${props.className}`}
    />
  );
});

ButtonSecondary.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object
};

ButtonSecondary.defaultProps = {
  className: '',
  style: null
};

module.exports = ButtonSecondary;

