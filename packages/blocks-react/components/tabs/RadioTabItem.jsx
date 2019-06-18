const React = require('react');
const PropTypes = require('prop-types');


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
        />
        <span className="blx-tab-item">
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

