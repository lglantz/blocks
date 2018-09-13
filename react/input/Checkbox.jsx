const React = require('react');
const PropTypes = require('prop-types');


const Checkbox = props => (
  <label className="blx-checkbox">
    <div className="blx-label">
      {props.children}
    </div>
    <input
      type="checkbox"
      name={props.name}
      value={props.value}
      defaultChecked={props.isChecked}
      disabled={props.isDisabled}
      onChange={props.onChange}
    />
    <span className={`blx-checkmark ${props.isDisabled ? 'blx-disabled' : ''}`} />
  </label>
);

Checkbox.propTypes = {
  value: PropTypes.string,
  name: PropTypes.string,
  isDisabled: PropTypes.bool,
  isChecked: PropTypes.bool,
  onChange: PropTypes.func
};

Checkbox.defaultProps = {
  value: '',
  name: '',
  isDisabled: false,
  isChecked: false,
  onChange: () => {}
};

module.exports = Checkbox;

