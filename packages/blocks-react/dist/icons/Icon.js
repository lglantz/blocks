'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var React = require('react');
var PropTypes = require('prop-types');

var Icon = function Icon(props) {
  var children = props.children,
      other = _objectWithoutProperties(props, ['children']);

  return React.createElement(
    'svg',
    _extends({
      xmlns: 'http://www.w3.org/2000/svg',
      width: '20px',
      height: '20px',
      viewBox: '0 0 20 20'
    }, other),
    children
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