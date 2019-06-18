const React = require('react');
const PropTypes = require('prop-types');

const BasicButton = require('./BasicButton.jsx');
const LinkButton = require('./LinkButton.jsx');


const COLOR_CLASS_MAP = {
  primary: 'blx-primary',
  secondary: 'blx-secondary',
  danger: 'blx-danger',
  dark: 'blx-dark'
};

const TYPE_CLASS_MAP = {
  default: '',
  icon: 'blx-button-icon'
};

const Button = React.forwardRef((props, ref) => {
  const Component = props.href ? LinkButton : BasicButton;
  return (
   <Component
      {...props}
      ref={ref}
      className={`${COLOR_CLASS_MAP[props.color]} ${TYPE_CLASS_MAP[props.type]} ${props.className}`}
    />
  );
});

Button.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  color: PropTypes.string,
  type: PropTypes.string
};

Button.defaultProps = {
  className: '',
  style: null,
  color: 'primary',
  type: 'default'
};

module.exports = Button;

