const React = require('react');
const PropTypes = require('prop-types');


const BasicButton = React.forwardRef((props, ref) => {
  let classes = 'blx-button ';
  if (props.icon) classes += 'blx-icon-button ';
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
      { props.leftIcon }
      { props.text && <span>{props.text}</span> }
      { props.icon }
      { props.rightIcon }
    </button>
  );
});

BasicButton.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string,
  isDisabled: PropTypes.bool,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  icon: PropTypes.node,
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
  icon: null,
  autoFocus: false,
  onKeyDown: () => {},
  onKeyUp: () => {}
};

module.exports = BasicButton;
