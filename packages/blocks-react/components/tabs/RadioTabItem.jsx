const React = require('react');
const PropTypes = require('prop-types');


const RadioTabItem = (props) => {
  return (
    <li
      style={props.style}
      className={props.className}
    >
      <label>
        <input
          type="radio"
          name={props.name}
          value={props.value}
          checked={props.isChecked}
          disabled={props.isDisabled}
          onChange={props.onChange}
        />
        <span className="blx-tab-item">
          {props.text}
        </span>
        {props.children}
      </label>
    </li>
  );
}

RadioTabItem.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  name: PropTypes.string.isRequired, // needs to be unique for each tab group
  value: PropTypes.string,
  text: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  isChecked: PropTypes.bool,
  isDisabled: PropTypes.bool
};

RadioTabItem.defaultProps = {
  className: '',
  style: null,
  value: '',
  isChecked: false,
  isDisabled: false
};

module.exports = RadioTabItem;

