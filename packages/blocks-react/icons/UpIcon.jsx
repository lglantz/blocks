const React = require('react');

const Icon = require('./Icon.jsx');

const UpIcon = (props) => {
  return (
    <Icon {...props}>
      <path
        fillRule="nonzero"
        d="M9.986 7.422l-6.37 6.35L2.2 12.36 9.986 4.6l7.814 7.789-1.416 1.411z"
      />
    </Icon>
  );
}

module.exports = UpIcon;
