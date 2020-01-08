const React = require('react');
const classnames = require('classnames');
/**
 * This is a toggle, it can have many options.
 */
const Toggle = ({
  className,
  style,
  options,
  value,
  label = 'toggle',
  disabled = false,
  ...other
}: {
  className: string,
  style?: any,
  options: { text: string, value: string | number }[],
  value: string | number,
  label?: string,
  disabled?: boolean,
}) => {
  const classes = classnames('blx-toggle', className, {
    'blx-disabled': disabled
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
              disabled={disabled}
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

module.exports = Toggle;
