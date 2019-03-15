'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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

      // text input element itself
      var textFieldClasses = '';

      // invalid message and class
      var invalidLabelMessage = null;
      if (!this.props.isValid) {
        invalidLabelMessage = React.createElement(
          'span',
          { className: 'blx-invalid-input-message' },
          this.props.invalidErrorMessage
        );
        textFieldClasses += ' blx-invalid';
      }

      // label
      var labelElement = null;
      if (this.props.label) {
        labelElement = React.createElement(
          'label',
          { className: 'blx-ui-text' },
          this.props.label
        );
      }

      var classes = 'blx-text-field ';
      if (this.props.isDisabled) classes += 'blx-disabled ';

      return React.createElement(
        'div',
        {
          style: this.props.style,
          className: classes + ' ' + this.props.className
        },
        labelElement,
        React.createElement(
          'div',
          { className: 'blx-text-field-container' },
          React.createElement('textarea', {
            className: textFieldClasses,
            name: this.props.name,
            value: this.props.value,
            placeholder: this.props.placeholder,
            disabled: this.props.isDisabled,
            readOnly: this.props.readOnly,
            onChange: this.props.onChange,
            onFocus: this.props.onFocus,
            onBlur: this.props.onBlur,
            onKeyUp: function onKeyUp(e) {
              if (_this2.props.onKeyUp) _this2.props.onKeyUp(e);
              _this2.resizeTextArea();
            },
            onKeyDown: this.props.onKeyDown,
            ref: this.textAreaRef,
            autoFocus: this.props.autoFocus
          })
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
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  isDisabled: PropTypes.bool,
  isValid: PropTypes.bool,
  invalidErrorMessage: PropTypes.string,
  onChange: PropTypes.func,
  onKeyUp: PropTypes.func,
  onKeyDown: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  readOnly: PropTypes.bool,
  autoFocus: PropTypes.bool
};

TextArea.defaultProps = {
  className: '',
  style: null,
  type: 'text',
  name: '',
  value: '',
  label: '',
  placeholder: '',
  isDisabled: false,
  isValid: true,
  invalidErrorMessage: '',
  onChange: null,
  onKeyUp: null,
  onKeyDown: null,
  onFocus: null,
  onBlur: null,
  readOnly: false,
  autoFocus: false
};

module.exports = TextArea;