const React = require('react');

const SvgIcon = require('./SvgIcon.jsx');

const NextIcon = (props) => {
  return (
    <SvgIcon {...props}>
      <path
        fillRule="nonzero"
        d="M12.578 10.014L6.2 3.616 7.611 2.2l7.789 7.814L7.64 17.8l-1.412-1.416z"
      />
    </SvgIcon>
  );
}

module.exports = NextIcon;
