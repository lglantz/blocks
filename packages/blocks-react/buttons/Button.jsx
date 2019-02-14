const React = require('react');
const PropTypes = require('prop-types');


const BasicButton = React.forwardRef((props, ref) => (
  <button
    className={`blx-button ${props.classes} ${props.iconName ? 'blx-icon-button' : ''} ${props.isDisabled ? 'blx-disabled' : ''}`}
    onClick={props.onClick}
    disabled={props.isDisabled}
    autoFocus={props.autoFocus}
    onKeyDown={props.onKeyDown}
    onKeyUp={props.onKeyUp}
    ref={ref}
  >
    { props.leftIcon && <span className={`blx-icon blx-icon-${props.leftIcon}`} /> }
    { props.text && <span>{props.text}</span> }
    { props.iconName && <span className={`blx-icon blx-icon-${props.iconName}`} /> }
    { props.rightIcon && <span className={`blx-icon blx-icon-${props.rightIcon}`} /> }
  </button>
));

BasicButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string,
  classes: PropTypes.string,
  isDisabled: PropTypes.bool,
  leftIcon: PropTypes.string,
  rightIcon: PropTypes.string,
  iconName: PropTypes.string,
  autoFocus: PropTypes.bool,
  onKeyDown: PropTypes.func,
  onKeyUp: PropTypes.func
};

BasicButton.defaultProps = {
  text: '',
  classes: 'blx-primary',
  isDisabled: false,
  leftIcon: null,
  rightIcon: null,
  iconName: null,
  autoFocus: false,
  onKeyDown: () => {},
  onKeyUp: () => {}
};

module.exports = BasicButton;
