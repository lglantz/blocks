const React = require('react');

const SvgIcon = require('./SvgIcon.jsx');

const AddIcon = (props) => {
  return (
    <SvgIcon {...props}>
      <path
        fillRule="nonzero"
        d="M11 9h6v2h-6v6H9v-6H3V9h6V3h2v6z"
      />
    </SvgIcon>
  );
}

module.exports = AddIcon;
