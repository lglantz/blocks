const React = require('react');
const PropTypes = require('prop-types');


const BasicButton = React.forwardRef((props, ref) => {
  let classes = 'blx-button ';
  const { icon, isDisabled, className, leftIcon, text, rightIcon, ...other } = props;
  if (icon) classes += 'blx-icon-button ';
  if (isDisabled) classes += 'blx-disabled ';
  
  return (
    <button
      className={`${classes} ${className}`}
      ref={ref}
      disabled={isDisabled}
      {...other}
    >
      { leftIcon }
      { text && <span>{text}</span> }
      { icon }
      { rightIcon }
    </button>
  );
});

BasicButton.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  isDisabled: PropTypes.bool,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  icon: PropTypes.node
};

BasicButton.defaultProps = {
  className: 'blx-primary',
  text: '',
  isDisabled: false,
  leftIcon: null,
  rightIcon: null,
  icon: null
};

module.exports = BasicButton;
