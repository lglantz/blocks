const React = require('react');
const PropTypes = require('prop-types');

const Button = require('./Button.jsx');
const LinkButton = require('./LinkButton.jsx');


const ButtonDark = React.forwardRef((props, ref) => {
  const Component = props.href ? LinkButton : Button;

  return (
   <Component
      {...props}
      ref={ref}
      className={`blx-dark ${props.className}`}
    />
  );
});

ButtonDark.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object
};

ButtonDark.defaultProps = {
  className: '',
  style: null
};

module.exports = ButtonDark;

