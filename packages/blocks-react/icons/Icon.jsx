const React = require('react');
const PropTypes = require('prop-types');


const Icon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20px"
      height="20px"
      viewBox="0 0 20 20"
      fill={props.fill}
      className={props.className}
      style={props.style}
    >
      {props.children}
    </svg>
  );
}

Icon.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  fill: PropTypes.string
};

Icon.defaultProps = {
  className: '',
  style: null,
  fill: 'var(--primary-00)'
};

module.exports = Icon;
