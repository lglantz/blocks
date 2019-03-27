const React = require('react');
const PropTypes = require('prop-types');

const Icon = require('./Icon.jsx');

const AddIcon = (props) => {
  return (
    <Icon {...props}>
      <path
        fillRule="nonzero"
        d="M11 9h6v2h-6v6H9v-6H3V9h6V3h2v6z"
      />
    </Icon>
  );
}

module.exports = AddIcon;
