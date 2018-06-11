const React = require('react');
const PropTypes = require('prop-types');


const Toggle = props => (
  <div className={`toggle ${props.isDisabled ? 'disabled' : ''}`}>
    {
      props.options.map((option, idx) => (
        <label
          className="toggle-container"
          key={option.text}
        >
          <input
            type="radio"
            id={`toggle-option-${idx}`}
            name={props.name}
            value={option.value}
            defaultChecked={option.isChecked}
            disabled={props.isDisabled}
          />
          <span className="toggle-button-text">
            {option.text}
          </span>
        </label>
      ))
    }
  </div>
);

Toggle.propTypes = {
  name: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string,
    value: PropTypes.string,
    isChecked: PropTypes.bool
  })),
  isDisabled: PropTypes.bool
};

Toggle.defaultProps = {
  name: '',
  options: [],
  isDisabled: false
};

module.exports = Toggle;

