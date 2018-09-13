const React = require('react');
const PropTypes = require('prop-types');


const BasicButton = props => (
  <button
    className={`blx-button ${props.classes} ${props.isDisabled ? 'blx-disabled' : ''}`}
    onClick={props.onClick}
    disabled={props.isDisabled}
    autoFocus={props.autoFocus}
    onKeyDown={props.onKeyDown}
    onKeyUp={props.onKeyUp}
    ref={props.setRef}
  >
    { props.leftIcon && <span className={`blx-icon blx-icon-${props.leftIcon}`} /> }
    <span>{props.text}</span>
    { props.rightIcon && <span className={`blx-icon blx-icon-${props.rightIcon}`} /> }
  </button>
);

BasicButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  classes: PropTypes.string,
  isDisabled: PropTypes.bool,
  leftIcon: PropTypes.string,
  rightIcon: PropTypes.string,
  autoFocus: PropTypes.bool,
  onKeyDown: PropTypes.func,
  onKeyUp: PropTypes.func,
  setRef: PropTypes.func
};

BasicButton.defaultProps = {
  classes: 'blx-primary',
  isDisabled: false,
  leftIcon: null,
  rightIcon: null,
  autoFocus: false,
  onKeyDown: () => {},
  onKeyUp: () => {},
  setRef: () => {}
};

module.exports = BasicButton;
