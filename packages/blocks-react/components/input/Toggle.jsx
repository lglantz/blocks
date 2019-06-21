const React = require('react');
const PropTypes = require('prop-types');
const classnames = require('classnames');

const Toggle = ({ className, style, value, children, ...other }) => {
  const classes = classnames('blx-toggle', className, {
    'blx-disabled': other.disabled
  });
  return (
    <div
      style={style}
      className={classes}
    >
      {
        React.Children.map(children, child => (
          React.cloneElement(child, {
            ...other,
            selectedValue: value
          })
        ))
      }
    </div>
  );
}

Toggle.propTypes = {
  style: PropTypes.object,
  className: PropTypes.object,
  disabled: PropTypes.bool,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired
};

Toggle.defaultProps = {
  disabled: false
};

module.exports = Toggle;

