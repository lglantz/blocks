const React = require('react');
const PropTypes = require('prop-types');


const RadioTabItem = (props) => {
  return (
    <li>
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
  name: PropTypes.string.isRequired, // needs to be unique for each tab group
  value: PropTypes.string,
  text: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  isChecked: PropTypes.bool,
  isDisabled: PropTypes.bool
};

RadioTabItem.defaultProps = {
  value: '',
  isChecked: false,
  isDisabled: false
};

module.exports = RadioTabItem;

