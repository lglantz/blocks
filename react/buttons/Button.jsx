const React = require('react');
const PropTypes = require('prop-types');


const BasicButton = props => (
  <button
    className={`blx-button ${props.classes} ${props.isDisabled ? 'blx-disabled' : ''}`}
    onClick={props.onClick}
    disabled={props.isDisabled}
  >
    {props.text}
  </button>
);

BasicButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  classes: PropTypes.string,
  isDisabled: PropTypes.bool
};

BasicButton.defaultProps = {
  classes: 'blx-primary',
  isDisabled: false
};

module.exports = BasicButton;
