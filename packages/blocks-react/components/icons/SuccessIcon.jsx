const React = require('react');
const PropTypes = require('prop-types');

const SvgIcon = require('./SvgIcon.jsx');

const SuccessIcon = (props) => {
  return (
    <SvgIcon {...props}>
      <g
        fill="none"
        fillRule="nonzero"
        transform="translate(-18 -12)"
      >
        <path
          fill={props.bgFill}
          d="M28 30a8 8 0 1 1 0-16 8 8 0 0 1 0 16z"
        />
        <path
          fill={props.fill}
          d="M25.11 21.56l-1.072 1.166 2.854 2.624 4.681-5.47-1.204-1.03-3.613 4.223z"
        />
      </g>
    </SvgIcon>
  );
}

SuccessIcon.propTypes = {
  bgFill: PropTypes.string,
  fill: PropTypes.string
};

SuccessIcon.defaultProps = {
  bgFill: 'var(--secondary-00)',
  fill: 'var(--primary-00)'
};

module.exports = SuccessIcon;
