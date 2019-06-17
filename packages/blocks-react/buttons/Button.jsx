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
      type={props.type}
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
  type: PropTypes.string,
  onClick: PropTypes.func,
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
  type: '', // for "submit" in forms
  text: '',
  isDisabled: false,
  leftIcon: null,
  rightIcon: null,
  icon: null,
  autoFocus: false,
  onClick: () => {},
  onKeyDown: () => {},
  onKeyUp: () => {}
};

module.exports = BasicButton;
