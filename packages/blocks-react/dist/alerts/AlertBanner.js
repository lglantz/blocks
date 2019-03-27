'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var PropTypes = require('prop-types');

var CloseIcon = require('../icons/CloseIcon.js');

var AlertBanner = function (_React$Component) {
  _inherits(AlertBanner, _React$Component);

  function AlertBanner(props) {
    _classCallCheck(this, AlertBanner);

    var _this = _possibleConstructorReturn(this, (AlertBanner.__proto__ || Object.getPrototypeOf(AlertBanner)).call(this, props));

    _this.state = {
      hidden: false
    };

    _this.onClose = _this.onClose.bind(_this);
    return _this;
  }

  _createClass(AlertBanner, [{
    key: 'onClose',
    value: function onClose() {
      if (typeof this.props.onClose === 'function') {
        this.props.onClose();
      }
      this.setState({
        hidden: true
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var classes = 'blx-alert ';
      if (this.state.hidden) classes += 'blx-hidden ';

      return React.createElement(
        'div',
        {
          style: this.props.style,
          className: classes + ' ' + this.props.className
        },
        React.createElement(
          'div',
          { className: 'blx-alert-icon-container' },
          React.createElement('span', { className: 'blx-alert-icon-background' }),
          this.props.icon
        ),
        React.createElement(
          'div',
          { className: 'blx-alert-text' },
          React.createElement(
            'h4',
            { className: 'blx-with-margin' },
            this.props.title
          ),
          React.createElement(
            'p',
            null,
            this.props.message
          )
        ),
        this.props.closable && React.createElement(
          'button',
          { className: 'blx-alert-close', onClick: this.onClose },
          React.createElement(CloseIcon, null)
        )
      );
    }
  }]);

  return AlertBanner;
}(React.Component);

AlertBanner.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  title: PropTypes.string,
  icon: PropTypes.node,
  message: PropTypes.string,
  closable: PropTypes.bool,
  onClose: PropTypes.func
};

AlertBanner.defaultProps = {
  className: '',
  style: null,
  title: '',
  icon: null,
  message: '',
  closable: false,
  onClose: null
};

module.exports = AlertBanner;