const React = require('react');
const PropTypes = require('prop-types');


const Checkbox = ({ style, className, children, ...other }) => {
  let classes = 'blx-checkbox ';
  if (other.disabled) classes += 'blx-disabled ';

  return (
    <label
      style={style}
      className={`${classes} ${className}`}
    >
      <div className="blx-label">
        {children}
      </div>
      <input
        type="checkbox"
        {...other}
      />
      <span className="blx-checkmark" />
    </label>
  );
}

Checkbox.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  disabled: PropTypes.bool
};

Checkbox.defaultProps = {
  style: null,
  className: '',
  disabled: false
};

module.exports = Checkbox;

