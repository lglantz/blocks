'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var PropTypes = require('prop-types');

var DropdownItem = function (_React$Component) {
  _inherits(DropdownItem, _React$Component);

  function DropdownItem(props) {
    _classCallCheck(this, DropdownItem);

    var _this = _possibleConstructorReturn(this, (DropdownItem.__proto__ || Object.getPrototypeOf(DropdownItem)).call(this, props));

    _this.onSelect = _this.onClick.bind(_this);
    _this.onKeyDown = _this.onKeyDown.bind(_this);
    _this.onKeyUp = _this.onKeyUp.bind(_this);
    return _this;
  }

  _createClass(DropdownItem, [{
    key: 'onClick',
    value: function onClick(e) {
      e.stopPropagation();
      this.props.onSelect(e, this.props.option);
    }
  }, {
    key: 'onKeyDown',
    value: function onKeyDown(e) {
      this.props.onKeyDown(e, this.props.option);
    }
  }, {
    key: 'onKeyUp',
    value: function onKeyUp(e) {
      this.props.onKeyUp(e, this.props.option);
    }
  }, {
    key: 'getLinkItem',
    value: function getLinkItem() {
      return React.createElement(
        'a',
        {
          href: this.props.option.href,
          target: this.props.option.newTab ? '_blank' : null,
          disabled: this.props.option.disabled,
          title: this.props.option.text,
          onKeyDown: this.onKeyDown,
          onKeyUp: this.onKeyUp,
          onClick: this.onSelect
        },
        this.props.option.text
      );
    }
  }, {
    key: 'getButtonItem',
    value: function getButtonItem() {
      return React.createElement(
        'button',
        {
          disabled: this.props.option.disabled,
          title: this.props.option.text,
          onKeyDown: this.onKeyDown,
          onKeyUp: this.onKeyUp,
          onClick: this.onSelect
        },
        this.props.option.text || this.props.option.element
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var item = null;
      if (this.props.option.href) {
        item = this.getLinkItem();
      } else {
        item = this.getButtonItem();
      }
      return React.createElement(
        'li',
        {
          className: 'blx-dropdown-item ' + (this.props.option.disabled ? 'blx-disabled' : ''),
          ref: this.props.forwardedRef
        },
        item
      );
    }
  }]);

  return DropdownItem;
}(React.Component);

DropdownItem.propTypes = {
  option: PropTypes.shape({
    text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    disabled: PropTypes.bool,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    href: PropTypes.string,
    element: PropTypes.node,
    key: PropTypes.string
  }).isRequired,
  onKeyDown: PropTypes.func,
  onKeyUp: PropTypes.func,
  onSelect: PropTypes.func
};

DropdownItem.defaultProps = {
  onKeyDown: function onKeyDown() {},
  onKeyUp: function onKeyUp() {},
  onSelect: function onSelect() {}
};

module.exports = React.forwardRef(function (props, ref) {
  return React.createElement(DropdownItem, _extends({}, props, { forwardedRef: ref }));
});