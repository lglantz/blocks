const React = require('react');
const PropTypes = require('prop-types');


const BasicButton = React.forwardRef((props, ref) => {
  let classes = 'blx-button ';
  if (props.iconName) classes += 'blx-icon-button ';
  if (props.isDisabled) classes += 'blx-disabled ';
  
  return (
    <button
      style={props.style}
      className={`${classes} ${props.className}`}
      disabled={props.isDisabled}
      autoFocus={props.autoFocus}
      onClick={props.onClick}
      onKeyDown={props.onKeyDown}
      onKeyUp={props.onKeyUp}
      ref={ref}
    >
      { props.leftIcon && <span className={`blx-icon blx-icon-${props.leftIcon}`} /> }
      { props.text && <span>{props.text}</span> }
      { props.iconName && <span className={`blx-icon blx-icon-${props.iconName}`} /> }
      { props.rightIcon && <span className={`blx-icon blx-icon-${props.rightIcon}`} /> }
    </button>
  );
});

BasicButton.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string,
  isDisabled: PropTypes.bool,
  leftIcon: PropTypes.string,
  rightIcon: PropTypes.string,
  iconName: PropTypes.string,
  autoFocus: PropTypes.bool,
  onKeyDown: PropTypes.func,
  onKeyUp: PropTypes.func
};

BasicButton.defaultProps = {
  className: 'blx-primary',
  style: null,
  text: '',
  isDisabled: false,
  leftIcon: null,
  rightIcon: null,
  iconName: null,
  autoFocus: false,
  onKeyDown: () => {},
  onKeyUp: () => {}
};

module.exports = BasicButton;
