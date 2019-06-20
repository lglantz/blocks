const React = require('react');
const PropTypes = require('prop-types');
const classnames = require('classnames');


const Checkbox = ({ style, className, children, ...other }) => {
  const classes = classnames('blx-checkbox', className, {
    'blx-disabled': other.disabled
  });

  return (
    <label
      style={style}
      className={classes}
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

