const React = require('react');
const PropTypes = require('prop-types');

const Icon = require('./Icon.jsx');

const NextIcon = (props) => {
  return (
    <Icon {...props}>
      <path
        fillRule="nonzero"
        d="M12.578 10.014L6.2 3.616 7.611 2.2l7.789 7.814L7.64 17.8l-1.412-1.416z"
      />
    </Icon>
  );
}

module.exports = NextIcon;
