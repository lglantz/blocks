const React = require('react');
const PropTypes = require('prop-types');
const classnames = require('classnames');


const BasicButton = React.forwardRef((props, ref) => {
  const { className, ...other } = props;
  const classes = classnames('blx-button', className, {
    'blx-disabled': props.disabled
  });
  
  return (
    <button
      className={classes}
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
