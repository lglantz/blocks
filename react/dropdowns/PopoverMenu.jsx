const React = require('react');
const PropTypes = require('prop-types');

const Dropdown = require('./Dropdown.jsx');


const PopoverMenu = props => (
  <Dropdown
    isPopover
    {...props}
  />
);

module.exports = PopoverMenu;
