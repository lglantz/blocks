'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var React = require('react');
var PropTypes = require('prop-types');

var Checkbox = function Checkbox(_ref) {
  var style = _ref.style,
      className = _ref.className,
      children = _ref.children,
      other = _objectWithoutProperties(_ref, ['style', 'className', 'children']);

  var classes = 'blx-checkbox ';
  if (other.disabled) classes += 'blx-disabled ';

  return React.createElement(
    'label',
    {
      style: style,
      className: classes + ' ' + className
    },
    React.createElement(
      'div',
      { className: 'blx-label' },
      children
    ),
    React.createElement('input', _extends({
      type: 'checkbox'
    }, other)),
    React.createElement('span', { className: 'blx-checkmark' })
  );
};

Checkbox.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  disabled: PropTypes.bool
};

Checkbox.defaultProps = {
  style: null,
  className: '',
  disabled: false
};

module.exports = Checkbox;