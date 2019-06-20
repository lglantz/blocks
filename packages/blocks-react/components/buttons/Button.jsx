const React = require('react');
const PropTypes = require('prop-types');
const classnames = require('classnames');


const BasicButton = React.forwardRef((props, ref) => {
  const { icon, isDisabled, className, leftIcon, text, rightIcon, ...other } = props;
  const classes = classnames('blx-button', className, {
    'blx-icon-button': !!icon,
    'blx-disabled': isDisabled
  });
  
  return (
    <button
      className={classes}
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
