const React = require('react');
const PropTypes = require('prop-types');

let mouseClicked = false;

const RadioTabItem = ({ style, className, text, children, ...other }) => {
  return (
    <li
      style={style}
      className={className}
    >
      <label>
        <input
          type="radio"
          {...other}
          onFocus={(e) => {
            if (mouseClicked) {
              e.target.blur();
              mouseClicked = false;
            }
          }}
        />
        <span
          className="blx-tab-item"
          onMouseUp={() => mouseClicked = true}
        >
          {text}
        </span>
        {children}
      </label>
    </li>
  );
}

RadioTabItem.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  text: PropTypes.string.isRequired
};

RadioTabItem.defaultProps = {
  className: '',
  style: null
};

module.exports = RadioTabItem;

