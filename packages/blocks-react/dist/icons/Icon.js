'use strict';

var React = require('react');
var PropTypes = require('prop-types');

var Icon = function Icon(props) {
  return React.createElement(
    'svg',
    {
      xmlns: 'http://www.w3.org/2000/svg',
      width: '20px',
      height: '20px',
      viewBox: '0 0 20 20',
      fill: props.fill,
      className: props.className,
      stype: props.style
    },
    props.children
  );
};

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