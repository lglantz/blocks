'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var PropTypes = require('prop-types');

var TextArea = function (_React$Component) {
  _inherits(TextArea, _React$Component);

  function TextArea(props) {
    _classCallCheck(this, TextArea);

    var _this = _possibleConstructorReturn(this, (TextArea.__proto__ || Object.getPrototypeOf(TextArea)).call(this, props));

    _this.textAreaRef = React.createRef();
    return _this;
  }

  _createClass(TextArea, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.resizeTextArea();
    }

    // resize the text area to fit only the height of its content

  }, {
    key: 'resizeTextArea',
    value: function resizeTextArea() {
      if (!this.textAreaRef) return;
      // set height to 1px so scrollHeight will be total height of content
      this.textAreaRef.current.style.height = '1px';
      // reset to be correct height
      this.textAreaRef.current.style.height = this.textAreaRef.current.scrollHeight + 'px';
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          isValid = _props.isValid,
          invalidErrorMessage = _props.invalidErrorMessage,
          label = _props.label,
          style = _props.style,
          className = _props.className,
          _onKeyUp = _props.onKeyUp,
          other = _objectWithoutProperties(_props, ['isValid', 'invalidErrorMessage', 'label', 'style', 'className', 'onKeyUp']);
      // text input element itself


      var textFieldClasses = '';

      // invalid message and class
      var invalidLabelMessage = null;
      if (!isValid) {
        invalidLabelMessage = React.createElement(
          'span',
          { className: 'blx-invalid-input-message' },
          invalidErrorMessage
        );
        textFieldClasses += ' blx-invalid';
      }

      // label
      var labelElement = null;
      if (label) {
        labelElement = React.createElement(
          'label',
          { className: 'blx-ui-text' },
          label
        );
      }

      var classes = 'blx-text-field ';
      if (other.disabled) classes += 'blx-disabled ';

      return React.createElement(
        'div',
        {
          style: style,
          className: classes + ' ' + className
        },
        labelElement,
        React.createElement(
          'div',
          { className: 'blx-text-field-container' },
          React.createElement('textarea', _extends({
            className: textFieldClasses,
            ref: this.textAreaRef,
            onKeyUp: function onKeyUp(e) {
              if (_onKeyUp) _onKeyUp(e);
              _this2.resizeTextArea();
            }
          }, other))
        ),
        invalidLabelMessage
      );
    }
  }]);

  return TextArea;
}(React.Component);

TextArea.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  isValid: PropTypes.bool,
  invalidErrorMessage: PropTypes.string,
  onKeyUp: PropTypes.func
};

TextArea.defaultProps = {
  className: '',
  style: null,
  label: '',
  disabled: false,
  isValid: true,
  invalidErrorMessage: '',
  onKeyUp: null
};

module.exports = TextArea;