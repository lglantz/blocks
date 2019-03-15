const React = require('react');
const PropTypes = require('prop-types');


const Tabs = (props) => {
  let classes = '';
  if (props.isVertical) {
    classes += 'blx-vertical-tabs ';
  } else {
    classes += 'blx-horizontal-tabs ';
  }
  if (props.isDisabled) classes += 'blx-disabled ';

  return (
    <ul
      style={props.style}
      className={`${classes} ${props.className}`}
    >
      {props.children}
    </ul>
  );
}

Tabs.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  isDisabled: PropTypes.bool,
  isVertical: PropTypes.bool
};

Tabs.defaultProps = {
  className: '',
  style: null,
  isDisabled: false,
  isVertical: false
};

module.exports = Tabs;

