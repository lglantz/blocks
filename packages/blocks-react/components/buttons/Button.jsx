const React = require('react');
const PropTypes = require('prop-types');
const classnames = require('classnames');


const BasicButton = React.forwardRef((props, ref) => {
  const { icon, className, leftIcon, text, rightIcon, ...other } = props;
  const classes = classnames('blx-button', className, {
    'blx-icon-button': !!icon,
    'blx-disabled': other.disabled
  });
  
  return (
    <button
      className={classes}
      ref={ref}
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
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  icon: PropTypes.node,
  disabled: PropTypes.bool
};

BasicButton.defaultProps = {
  className: 'blx-primary',
  text: '',
  leftIcon: null,
  rightIcon: null,
  icon: null,
  disabled: false
};

module.exports = BasicButton;
