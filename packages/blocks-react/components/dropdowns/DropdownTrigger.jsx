const React = require('react');
const PropTypes = require('prop-types');
const classnames = require('classnames');

const DownIcon = require('../icons/DownIcon.jsx');

const DropdownTrigger = ({ isValid, disabled, visible, setVisible, children, ...other}) => {
  const classes = classnames('blx-dropdown-trigger', {
    'blx-active': visible,
    'blx-disabled': disabled,
    'blx-invalid': !isValid
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
      { hasChildren ?
          children :
          (<span className="blx-dropdown-placeholder">Choose an option</span>)
      }
      <DownIcon className="blx-dropdown-arrow" />
    </button>
  );
};

DropdownTrigger.propTypes = {
  isValid: PropTypes.bool,
  disabled: PropTypes.bool
};

DropdownTrigger.defaultProps = {
  isValid: true,
  disabled: false
};

module.exports = DropdownTrigger;
