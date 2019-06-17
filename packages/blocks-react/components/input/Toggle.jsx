const React = require('react');
const PropTypes = require('prop-types');


const Toggle = ({ className, style, options, value, ...other }) => {
  let classes = 'blx-toggle ';
  if (other.disabled) classes += 'blx-disabled ';
  if (className) classes += className;
  return (
    <div
      style={style}
      className={classes}
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
              defaultChecked={option.value === value}
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
  className: PropTypes.object,
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
  disabled: PropTypes.bool
};

Toggle.defaultProps = {
  disabled: false
};

module.exports = Toggle;

