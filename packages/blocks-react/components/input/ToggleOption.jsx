const React = require('react');
const PropTypes = require('prop-types');


const ToggleOption = ({ value, selectedValue, children, ...other }) => (
  <label
    className="blx-toggle-container"
    key={value}
  >
    <input
      {...other}
      type="radio"
      id={`toggle-option-${value}`}
      value={value}
      defaultChecked={value === selectedValue}
    />
    <span className="blx-toggle-text">
      {children}
    </span>
  </label>
);

ToggleOption.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  selectedValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
};

module.exports = ToggleOption;
