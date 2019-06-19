const React = require('react');
const PropTypes = require('prop-types');


const SvgIcon = (props) => {
  const { children, ...other } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20px"
      height="20px"
      {...other}
    >
      {children}
    </svg>
  );
}

SvgIcon.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  fill: PropTypes.string,
  viewBox: PropTypes.string
};

SvgIcon.defaultProps = {
  className: '',
  style: null,
  fill: 'var(--primary-00)',
  viewBox: '0 0 20 20'
};

module.exports = SvgIcon;
