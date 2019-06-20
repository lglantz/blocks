const React = require('react');
const PropTypes = require('prop-types');

const RadioSubTabItem = ({ visible, style, className, text, children, ...other }) => {
  let classes = '';
  if (!visible) classes += 'blx-hidden ';
  
  return (
    <label
      style={style}
      className={`${classes} ${className}`}
    >
      <input
        type="radio"
        {...other}
      />
      <span className="blx-sub-tab">
        {text}
      </span>
      {children}
    </label>
  );
}

RadioSubTabItem.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  text: PropTypes.string.isRequired,
  visible: PropTypes.bool
};

RadioSubTabItem.defaultProps = {
  className: '',
  style: null,
  visible: true
};

module.exports = RadioSubTabItem;

