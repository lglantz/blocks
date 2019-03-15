const React = require('react');
const PropTypes = require('prop-types');


const Checkbox = (props) => {
  let classes = 'blx-checkbox ';
  if (props.isDisabled) classes += 'blx-disabled ';
  return (
    <label
      style={props.style}
      className={`${classes} ${props.className}`}
    >
      <div className="blx-label">
        {props.children}
      </div>
      <input
        type="checkbox"
        name={props.name}
        value={props.value}
        checked={props.isChecked}
        disabled={props.isDisabled}
        onChange={props.onChange}
        onKeyDown={props.onKeyDown}
        onKeyUp={props.onKeyUp}
      />
      <span className="blx-checkmark" />
    </label>
  );
}

Checkbox.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  value: PropTypes.string,
  name: PropTypes.string,
  isDisabled: PropTypes.bool,
  isChecked: PropTypes.bool,
  onChange: PropTypes.func,
  onKeyDown: PropTypes.func,
  onKeyUp: PropTypes.func
};

Checkbox.defaultProps = {
  className: '',
  style: null,
  value: '',
  name: '',
  isDisabled: false,
  isChecked: false,
  onChange: () => {},
  onKeyDown: () => {},
  onKeyUp: () => {}
};

module.exports = Checkbox;

