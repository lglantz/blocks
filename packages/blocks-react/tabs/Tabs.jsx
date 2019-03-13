const React = require('react');
const PropTypes = require('prop-types');


const Tabs = props => (
  <ul className={`${props.isVertical ? 'blx-vertical-tabs' : 'blx-horizontal-tabs'} ${props.isDisabled ? 'blx-disabled' : ''}`}>
    {props.children}
  </ul>
);

Tabs.propTypes = {
  isDisabled: PropTypes.bool,
  isVertical: PropTypes.bool
};

Tabs.defaultProps = {
  isDisabled: false,
  isVertical: false
};

module.exports = Tabs;

