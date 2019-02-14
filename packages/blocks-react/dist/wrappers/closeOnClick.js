'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var PropTypes = require('prop-types');

function closeOnClick(WrappedComponent) {
  var ComponentWithCloseOnClick = function (_React$Component) {
    _inherits(ComponentWithCloseOnClick, _React$Component);

    function ComponentWithCloseOnClick(props) {
      _classCallCheck(this, ComponentWithCloseOnClick);

      var _this = _possibleConstructorReturn(this, (ComponentWithCloseOnClick.__proto__ || Object.getPrototypeOf(ComponentWithCloseOnClick)).call(this, props));

      _this.state = { isOpen: !!props.isOpen };

      _this.open = _this.open.bind(_this);
      _this.close = _this.close.bind(_this);
      _this.toggle = _this.toggle.bind(_this);
      _this.closeOnClick = _this.closeOnClick.bind(_this);
      return _this;
    }

    _createClass(ComponentWithCloseOnClick, [{
      key: 'open',
      value: function open() {
        var _this2 = this;

        this.setState({
          isOpen: true
        }, function () {
          document.body.addEventListener('click', _this2.closeOnClick);
        });
      }
    }, {
      key: 'close',
      value: function close() {
        var _this3 = this;

        this.setState({
          isOpen: false
        }, function () {
          document.body.removeEventListener('click', _this3.closeOnClick);
        });
      }
    }, {
      key: 'toggle',
      value: function toggle(e) {
        e.stopPropagation();
        e.preventDefault();
        if (this.state.isOpen) {
          this.close();
        } else {
          this.open();
        }
      }
    }, {
      key: 'closeOnClick',
      value: function closeOnClick(e) {
        if (!this.domElement) return;
        if (e.target === this.domElement || this.domElement.contains(e.target)) return;
        this.close();
        if (this.props.afterCloseOnClick) this.props.afterCloseOnClick(); // anything that needs to happen when the dropdown closes by clicking outside of it
      }
    }, {
      key: 'render',
      value: function render() {
        var _this4 = this;

        return React.createElement(
          'div',
          { ref: function ref(node) {
              _this4.domElement = node;
            } },
          React.createElement(WrappedComponent, _extends({}, this.props, this.state, {
            isOpen: this.state.isOpen,
            toggle: this.toggle,
            open: this.open,
            close: this.close
          }))
        );
      }
    }]);

    return ComponentWithCloseOnClick;
  }(React.Component);

  ComponentWithCloseOnClick.propTypes = {
    isOpen: PropTypes.bool,
    afterCloseOnClick: PropTypes.func
  };

  ComponentWithCloseOnClick.defaultProps = {
    isOpen: false,
    afterCloseOnClick: null
  };

  return ComponentWithCloseOnClick;
}

module.exports = closeOnClick;