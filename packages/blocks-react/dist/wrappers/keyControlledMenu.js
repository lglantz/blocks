'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var PropTypes = require('prop-types');

function keyControlledMenu(WrappedComponent) {
  var GenericDropdown = function (_React$Component) {
    _inherits(GenericDropdown, _React$Component);

    function GenericDropdown(props) {
      _classCallCheck(this, GenericDropdown);

      var _this = _possibleConstructorReturn(this, (GenericDropdown.__proto__ || Object.getPrototypeOf(GenericDropdown)).call(this, props));

      var optionsRefs = [];
      for (var i = 0; i < _this.props.options.length; i++) {
        optionsRefs[i] = React.createRef();
      }

      _this.state = {
        onFocusIdx: -1,
        optionsRefs: optionsRefs
      };

      _this.onSelect = _this.onSelect.bind(_this);
      _this.onKeyDown = _this.onKeyDown.bind(_this);
      _this.onKeyUp = _this.onKeyUp.bind(_this);
      _this.onTriggerFocus = _this.onTriggerFocus.bind(_this);
      return _this;
    }

    _createClass(GenericDropdown, [{
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps) {
        if (prevProps.options !== this.props.options) {
          var _optionsRefs = [];
          for (var i = 0; i < this.props.options.length; i++) {
            _optionsRefs[i] = React.createRef();
          }
          this.setState({ optionsRefs: _optionsRefs });
        }
      }
    }, {
      key: 'onSelect',
      value: function onSelect(e, option) {
        if (option.onClick) {
          option.onClick(e);
        } else if (this.props.onChange) {
          this.props.onChange(option);
        }
        this.props.close(e);
      }
    }, {
      key: 'onKeyDown',
      value: function onKeyDown(e) {
        if (e.key === 'Tab' && this.props.isOpen) {
          this.props.close();
        } else if (['ArrowDown', ' '].indexOf(e.key) > -1 && !this.props.isOpen) {
          e.preventDefault();
          this.props.open();
        } else {
          if (['ArrowDown', 'ArrowUp', 'Enter', ' '].indexOf(e.key) > -1) e.preventDefault();
          this.moveFocusUsingKey(e.key);
        }
      }
    }, {
      key: 'onKeyUp',
      value: function onKeyUp(e, option) {
        if (['Enter', ' '].indexOf(e.key) > -1) {
          this.onSelect(e, option);
        } else if (e.key === 'Escape') {
          this.props.close();
        }
      }
    }, {
      key: 'onTriggerFocus',
      value: function onTriggerFocus() {
        this.setState({
          onFocusIdx: -1
        });
      }
    }, {
      key: 'moveFocusUsingKey',
      value: function moveFocusUsingKey(keyName) {
        var _this2 = this;

        this.setState({
          onFocusIdx: this.getFocusIndexAfterKeyPress(keyName)
        }, function () {
          return _this2.focusOption(_this2.state.onFocusIdx);
        });
      }
    }, {
      key: 'getFocusIndexAfterKeyPress',
      value: function getFocusIndexAfterKeyPress(keyName) {
        if (keyName === 'ArrowDown') return Math.min(this.state.onFocusIdx + 1, this.props.options.length - 1);
        if (keyName === 'ArrowUp') return Math.max(this.state.onFocusIdx - 1, 0);
        for (var i = 0; i < this.props.options.length; i++) {
          var option = this.props.options[i];
          if (option.text && option.text[0].toLowerCase() === keyName) return i;
        }
        return this.state.onFocusIdx;
      }
    }, {
      key: 'focusOption',
      value: function focusOption(idx) {
        if (idx < 0) return;
        var optionRef = this.state.optionsRefs[idx].current;
        if (optionRef) {
          // ref is to the li item that contains the dropdown elements
          // search for a focusable child
          // (particularly important for custom elements)
          for (var i = 0; i < optionRef.childNodes.length; i++) {
            var child = optionRef.childNodes[i];
            if (typeof child.focus === 'function') {
              child.focus();
              break;
            }
          }
        }
      }
    }, {
      key: 'render',
      value: function render() {
        return React.createElement(WrappedComponent, _extends({}, this.props, {
          optionsRefs: this.state.optionsRefs,
          onKeyDown: this.onKeyDown,
          onKeyUp: this.onKeyUp,
          onSelect: this.onSelect,
          onTriggerFocus: this.onTriggerFocus
        }));
      }
    }]);

    return GenericDropdown;
  }(React.Component);

  GenericDropdown.propTypes = {
    isOpen: PropTypes.bool,
    close: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      disabled: PropTypes.bool,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      href: PropTypes.string,
      element: PropTypes.node,
      key: PropTypes.string
    })),
    onChange: PropTypes.func
  };

  GenericDropdown.defaultProps = {
    isOpen: false,
    options: [],
    onChange: function onChange() {}
  };

  return GenericDropdown;
}

module.exports = keyControlledMenu;