const React = require('react');

const SvgIcon = require('./SvgIcon.jsx');

const WarningIcon = (props) => {
  return (
    <SvgIcon {...props}>
      <path
        d="M9 5v2.286L9.5 13h1l.5-5.714V5z"
      />
      <circle cx="10" cy="15" r="1" />
    </SvgIcon>
  );
}

module.exports = WarningIcon;
