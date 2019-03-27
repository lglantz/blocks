'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var PropTypes = require('prop-types');

var NextIcon = require('../icons/NextIcon.js');

function onToggle(e) {
  var section = e.target.parentNode;
  var panel = section.getElementsByClassName('blx-accordion-content')[0];
  if (panel.style.maxHeight) {
    panel.style.maxHeight = null;
  } else {
    panel.style.maxHeight = panel.scrollHeight + 'px';
  }
}

var AccordionSection = function (_React$Component) {
  _inherits(AccordionSection, _React$Component);

  function AccordionSection() {
    _classCallCheck(this, AccordionSection);

    return _possibleConstructorReturn(this, (AccordionSection.__proto__ || Object.getPrototypeOf(AccordionSection)).apply(this, arguments));
  }

  _createClass(AccordionSection, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.open) {
        this.content.style.maxHeight = this.content.scrollHeight + 'px';
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (this.props.open) {
        this.content.style.maxHeight = this.content.scrollHeight + 'px';
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return React.createElement(
        'div',
        {
          style: this.props.style,
          className: 'blx-accordion-section ' + this.props.className
        },
        React.createElement('input', { id: this.props.id, type: 'checkbox', name: 'blx-accordion-tab', defaultChecked: this.props.open, onChange: this.props.onToggle }),
        React.createElement(
          'label',
          { htmlFor: this.props.id, className: 'blx-accordion-trigger' },
          React.createElement(NextIcon, { className: 'blx-accordion-arrow' }),
          this.props.trigger
        ),
        React.createElement(
          'div',
          {
            className: 'blx-accordion-content',
            ref: function ref(content) {
              return _this2.content = content;
            }
          },
          this.props.children
        )
      );
    }
  }]);

  return AccordionSection;
}(React.Component);

AccordionSection.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  id: PropTypes.string.isRequired,
  open: PropTypes.bool,
  trigger: PropTypes.object.isRequired,
  onToggle: PropTypes.func
};

AccordionSection.defaultProps = {
  className: '',
  style: null,
  open: false,
  onToggle: onToggle
};

module.exports = AccordionSection;