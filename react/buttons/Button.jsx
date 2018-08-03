const React = require('react');
const PropTypes = require('prop-types');


const BasicButton = props => (
  <button
    className={`blx-button ${props.classes} ${props.isDisabled ? 'disabled' : ''}`}
    onClick={props.onClick}
    disabled={props.isDisabled}
  >
    {props.text}
  </button>
);

BasicButton.propTypes = {
  classes: PropTypes.string,
  text: PropTypes.string,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func
};

BasicButton.defaultProps = {
  classes: 'primary',
  text: '',
  isDisabled: false,
  onClick: () => {}
};

module.exports = BasicButton;
