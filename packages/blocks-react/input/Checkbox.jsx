const React = require('react');
const PropTypes = require('prop-types');


const Checkbox = props => (
  <label className={`blx-checkbox ${props.isDisabled ? 'blx-disabled' : ''}`}>
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

Checkbox.propTypes = {
  value: PropTypes.string,
  name: PropTypes.string,
  isDisabled: PropTypes.bool,
  isChecked: PropTypes.bool,
  onChange: PropTypes.func,
  onKeyDown: PropTypes.func,
  onKeyUp: PropTypes.func
};

Checkbox.defaultProps = {
  value: '',
  name: '',
  isDisabled: false,
  isChecked: false,
  onChange: () => {},
  onKeyDown: () => {},
  onKeyUp: () => {}
};

module.exports = Checkbox;

