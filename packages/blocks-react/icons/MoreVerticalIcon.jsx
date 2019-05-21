const React = require('react');

const Icon = require('./Icon.jsx');

const MoreVerticalIcon = (props) => {
  return (
    <Icon {...props}>
      <path
        fillRule="nonzero"
        transform="rotate(90 10 10)"
        d="M10 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm8 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM2 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
      />
    </Icon>
  );
}

module.exports = MoreVerticalIcon;
