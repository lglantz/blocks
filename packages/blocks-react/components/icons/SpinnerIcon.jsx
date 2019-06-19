const React = require('react');
const PropTypes = require('prop-types');

const SvgIcon = require('./SvgIcon.jsx');

const SpinnerIcon = (props) => {
  const { className, fill, markerFill, ...other } = props;
  return (
    <SvgIcon
      className={`blx-loading-spinner ${className || ''}`}
      fill={fill}
      viewBox="-2 -2 20 20"
      {...props}
    >
      <defs>
        <path
          id="a"
          d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zm0-2A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"
        />
      </defs>
      <g
        fill="none"
        fillRule="evenodd"
      >
        <mask
          id="b"
          fill={markerFill}
        >
          <use xlinkHref="#a"/>
        </mask>
        <use
          fill={fill}
          fillRule="nonzero"
          xlinkHref="#a"
        />
        <circle
          cx="4.5"
          cy="2.2"
          r="1"
          fill={markerFill}
          fillRule="nonzero"
          mask="url(#b)"
        />
      </g>
    </SvgIcon>
  );
}

SpinnerIcon.propTypes = {
  markerFill: PropTypes.string
};

SpinnerIcon.defaultProps = {
  markerFill: 'var(--secondary-00)'
};

module.exports = SpinnerIcon;
