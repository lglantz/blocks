const React = require('react');
const PropTypes = require('prop-types');
const classnames = require('classnames');


const Tabs = (props) => {
  const classes = classnames(props.className, {
    'blx-vertical-tabs': props.vertical,
    'blx-horizontal-tabs': !props.vertical,
    'blx-disabled': props.disabled
  });

  const children = React.Children.map(props.children, child => (
    React.cloneElement(child, {
      tabIndex: props.disabled ? "-1" : undefined
    })
  ));

  return (
    <ul
      style={props.style}
      className={classes}
    >
      {children}
    </ul>
  );
}

Tabs.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  disabled: PropTypes.bool,
  vertical: PropTypes.bool
};

Tabs.defaultProps = {
  className: '',
  style: null,
  disabled: false,
  vertical: false
};

module.exports = Tabs;

