const React = require('react');
const PropTypes = require('prop-types');


const BasicButton = React.forwardRef((props, ref) => {
  const { className, ...other } = props;
  
  return (
    <button
      className={`blx-button ${className}`}
      ref={ref}
      {...other}
    >
      { props.children }
    </button>
  );
});

BasicButton.propTypes = {
  className: PropTypes.string
};

BasicButton.defaultProps = {
  className: ''
};

module.exports = BasicButton;
