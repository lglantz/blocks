const React = require('react');
const PropTypes = require('prop-types');
const classnames = require('classnames');

interface ToggleProps {
  className: string,
  style: any,
  options: any,
  value: any,
  label: any,
  disabled: any
};


const Toggle = ({ className, style, options, value, label, ...other }: ToggleProps) => {
  const classes = classnames('blx-toggle', className, {
    'blx-disabled': other.disabled
  });
  return (
    <div
      style={style}
      className={classes}
      role="radiogroup"
      aria-label={label}
    >
      {
        options.map((option, idx) => (
          <label
            className="blx-toggle-container"
            key={option.text}
          >
            <input
              type="radio"
              id={`toggle-option-${idx}`}
              value={option.value}
              checked={option.value === value}
              {...other}
            />
            <span className="blx-toggle-text">
              {option.text}
            </span>
          </label>
        ))
      }
    </div>
  );
}

Toggle.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]).isRequired
  })).isRequired,
  disabled: PropTypes.bool,
  label: PropTypes.string
};

Toggle.defaultProps = {
  disabled: false,
  label: 'toggle'
};

module.exports = Toggle;

