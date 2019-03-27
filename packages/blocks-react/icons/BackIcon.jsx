const React = require('react');
const PropTypes = require('prop-types');

const Icon = require('./Icon.jsx');

const BackIcon = (props) => {
  return (
    <Icon {...props}>
      <path
        fillRule="nonzero"
        d="M7.422 10.014l6.35 6.37L12.36 17.8 4.6 10.014 12.389 2.2 13.8 3.616z"
      />
    </Icon>
  );
}

module.exports = BackIcon;
