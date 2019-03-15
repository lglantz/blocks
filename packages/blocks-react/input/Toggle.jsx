const React = require('react');
const PropTypes = require('prop-types');


const Toggle = (props) => {
  let classes = 'blx-toggle ';
  if (props.isDisabled) classes += 'blx-disabled ';
  return (
    <div
      style={props.style}
      className={`${classes} ${props.className}`}
    >
      {
        props.options.map((option, idx) => (
          <label
            className="blx-toggle-container"
            key={option.text}
          >
            <input
              type="radio"
              id={`toggle-option-${idx}`}
              name={props.name}
              value={option.value}
              defaultChecked={option.value === props.value}
              disabled={props.isDisabled}
              onChange={props.onChange}
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
  name: PropTypes.string.isRequired,
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
  onChange: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool
};

Toggle.defaultProps = {
  isDisabled: false
};

module.exports = Toggle;

