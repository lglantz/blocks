const React = require('react');

const SvgIcon = require('./SvgIcon.jsx');

const UpIcon = (props) => {
  return (
    <SvgIcon {...props}>
      <path
        fillRule="nonzero"
        d="M9.986 7.422l-6.37 6.35L2.2 12.36 9.986 4.6l7.814 7.789-1.416 1.411z"
      />
    </SvgIcon>
  );
}

module.exports = UpIcon;
