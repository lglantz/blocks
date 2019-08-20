const React = require('react');
const PropTypes = require('prop-types');
const classnames = require('classnames');

const MoreIcon = require('../icons/MoreIcon.jsx');

const PopoverTrigger = ({ disabled, visible, setVisible, children, ...other}) => {
  const classes = classnames('blx-popover-trigger', {
    'blx-active': visible,
    'blx-disabled': disabled
  });

  // NOTE: Need to count length of React.Children.toArray b/c
  // React.Children.count returns 1 for a child of {false}
  // which can occur when using conditional && rendering
  const hasChildren = React.Children.toArray(children).length;

  return (
    <button
      className={classes}
      disabled={disabled}
      onClick={() => setVisible(!visible)}
      {...other}
    >
      { hasChildren
        ? children
        : <MoreIcon />
      }
    </button>
  );
};

PopoverTrigger.propTypes = {
  disabled: PropTypes.bool,
  visible: PropTypes.bool.isRequired,
  setVisible: PropTypes.func.isRequired
};

PopoverTrigger.defaultProps = {
  disabled: false
};

module.exports = PopoverTrigger;
