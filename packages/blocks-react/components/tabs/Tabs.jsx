const React = require('react');
const PropTypes = require('prop-types');


const Tabs = (props) => {
  let classes = '';
  if (props.vertical) {
    classes += 'blx-vertical-tabs ';
  } else {
    classes += 'blx-horizontal-tabs ';
  }
  if (props.disabled) classes += 'blx-disabled ';

  const children = React.Children.map(props.children, child => (
    React.cloneElement(child, {
      tabIndex: props.disabled ? "-1" : undefined
    })
  ));

  return (
    <ul
      style={props.style}
      className={`${classes} ${props.className}`}
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

