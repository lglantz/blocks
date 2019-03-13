const React = require('react');
const PropTypes = require('prop-types');


const RadioSubTabItem = (props) => {
  return (
    <label className={props.isVisible ? '' : 'blx-hidden'}>
      <input
        type="radio"
        name={props.name}
        value={props.value}
        checked={props.isChecked}
        disabled={props.isDisabled}
        onChange={props.onChange}
      />
      <span className="blx-sub-tab">
        {props.text}
      </span>
      {props.children}
    </label>
  );
}

RadioSubTabItem.propTypes = {
  name: PropTypes.string.isRequired, // needs to be unique for each tab group
  value: PropTypes.string,
  text: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  isVisible: PropTypes.bool,
  isChecked: PropTypes.bool,
  isDisabled: PropTypes.bool
};

RadioSubTabItem.defaultProps = {
  value: '',
  isVisible: true,
  isChecked: false,
  isDisabled: false
};

module.exports = RadioSubTabItem;

