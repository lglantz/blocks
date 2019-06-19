const React = require('react');

const SvgIcon = require('./SvgIcon.jsx');

const DownIcon = (props) => {
  return (
    <SvgIcon {...props}>
      <path
        fillRule="nonzero"
        d="M9.986 12.578L16.384 6.2 17.8 7.611 9.986 15.4 2.2 7.64l1.416-1.412z"
      />
    </SvgIcon>
  );
}

module.exports = DownIcon;
