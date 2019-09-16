const React = require('react');
const PropTypes = require('prop-types');
const Colors = require('blocks-base').Colors;

const Icon = (props) => {
  const { children, ...other } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20px"
      height="20px"
      viewBox="0 0 20 20"
      {...other}
    >
      {children}
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
  fill: Colors.PRIMARY_00
};

module.exports = Icon;
