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
      className={`blx-primary ${props.className}`}
    />
  );
});

ButtonPrimary.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object
};

ButtonPrimary.defaultProps = {
  className: '',
  style: null
};

module.exports = ButtonPrimary;

