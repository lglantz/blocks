const React = require('react');
const PropTypes = require('prop-types');

const Button = require('./Button.jsx');
const LinkButton = require('./LinkButton.jsx');


const ButtonDanger = React.forwardRef((props, ref) => {
  const Component = props.href ? LinkButton : Button;
  return (
   <Component
      {...props}
      ref={ref}
      className={`blx-danger ${props.className}`}
    />
  );
});

ButtonDanger.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object
};

ButtonDanger.defaultProps = {
  className: '',
  style: null
};

module.exports = ButtonDanger;

