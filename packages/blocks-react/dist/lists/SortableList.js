'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var PropTypes = require('prop-types');
var ReactDOM = require('react-dom');

function isBefore(a, b) {
  if (a.parentNode == b.parentNode) {
    for (var cur = a; cur; cur = cur.previousSibling) {
      if (cur === b) {
        return true;
      }
    }
  }
  return false;
}

function addOrRemoveClass(element, className, add) {
  if (add) {
    if (element.className.indexOf(className) < 0) element.className += ' ' + className;
  } else {
    element.className = element.className.replace(' ' + className, '');
  }
}

var SortableList = function (_React$Component) {
  _inherits(SortableList, _React$Component);

  function SortableList(props) {
    _classCallCheck(this, SortableList);

    var _this = _possibleConstructorReturn(this, (SortableList.__proto__ || Object.getPrototypeOf(SortableList)).call(this, props));

    _this.listDOM = React.createRef();
    _this.source = null;

    _this.onDragStart = _this.onDragStart.bind(_this);
    _this.onDragOver = _this.onDragOver.bind(_this);
    _this.onDragLeave = _this.onDragLeave.bind(_this);
    _this.onDragEnd = _this.onDragEnd.bind(_this);
    _this.onDrop = _this.onDrop.bind(_this);
    return _this;
  }

  _createClass(SortableList, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.listDOM.current) {
        this.listDOM.current.addEventListener('dragstart', this.onDragStart);
        this.listDOM.current.addEventListener('dragover', this.onDragOver);
        this.listDOM.current.addEventListener('dragend', this.onDragEnd);
      }
    }

    // check whether a given DOM element is inside this sortable list at any depth

  }, {
    key: 'isInList',
    value: function isInList(element) {
      var node = element;
      while (node) {
        if (node === this.listDOM.current) return true;
        node = node.parentNode;
      }
      return false;
    }

    // return the list element <li> that the given element is a child of
    // for these lists, the actual draggable element is the icon, but
    // we want to ignore the icons always and pretend like the list items
    // are the draggable elements

  }, {
    key: 'getListElement',
    value: function getListElement(child) {
      if (!this.isInList(child)) return null;
      var node = child;
      while (node && node.tagName !== 'LI') {
        node = node.parentNode;
      }
      return node;
    }
  }, {
    key: 'getDragTarget',
    value: function getDragTarget(e) {
      if (!this.isInList(e.target)) return null;
      var listItem = this.getListElement(e.target);
      if (listItem === this.source) return null;
      return listItem;
    }
  }, {
    key: 'onDragOver',
    value: function onDragOver(e) {
      if (!this.source) return;
      e.preventDefault();
      var target = this.getDragTarget(e);
      if (!target) return;
      if (isBefore(this.source, target)) {
        addOrRemoveClass(target, 'blx-dragover-top', true);
      } else {
        addOrRemoveClass(target, 'blx-dragover-bottom', true);
      }
    }
  }, {
    key: 'onDragLeave',
    value: function onDragLeave(e) {
      if (!this.source) return;
      var target = this.getDragTarget(e);
      if (!target) return;
      addOrRemoveClass(target, 'blx-dragover-top', false);
      addOrRemoveClass(target, 'blx-dragover-bottom', false);
    }
  }, {
    key: 'onDrop',
    value: function onDrop(e) {
      if (!this.source) return;
      e.preventDefault();
      var target = this.getDragTarget(e);
      if (!target) return;
      var listChildren = Array.prototype.slice.call(this.listDOM.current.children);
      var sourceStartIndex = listChildren.indexOf(this.source);
      if (isBefore(this.source, target)) {
        target.parentNode.insertBefore(this.source, target);
      } else {
        target.parentNode.insertBefore(this.source, target.nextSibling);
      }
      addOrRemoveClass(target, 'blx-dragover-top', false);
      addOrRemoveClass(target, 'blx-dragover-bottom', false);
      addOrRemoveClass(this.source, 'blx-dragging', false);
      listChildren = Array.prototype.slice.call(this.listDOM.current.children);
      var sourceEndIndex = listChildren.indexOf(this.source);
      this.props.onDrop(sourceStartIndex, sourceEndIndex);
      this.source = null;
    }
  }, {
    key: 'onDragStart',
    value: function onDragStart(e) {
      // the event target will be the icon, but we want to keep
      // track of the list item itself (the parent node)
      if (e.target.className.indexOf('blx-icon-drag') >= 0) {
        this.source = e.target.parentNode;
        this.source.draggable = true;
        addOrRemoveClass(this.source, 'blx-dragging', true);
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/html', this.source);
        e.dataTransfer.setDragImage(this.source, 275, 0);
      }
    }
  }, {
    key: 'onDragEnd',
    value: function onDragEnd(e) {
      if (!this.source) return;
      addOrRemoveClass(this.source, 'blx-dragging', false);
      this.source = null;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return React.createElement(
        'ul',
        {
          style: this.props.style,
          className: 'blx-sortable-list ' + this.props.className,
          ref: this.listDOM
        },
        React.Children.map(this.props.children, function (child) {
          return React.createElement(
            'li',
            {
              key: Math.random(),
              className: 'blx-sortable-list-item',
              onDragLeave: _this2.onDragLeave,
              onDrop: _this2.onDrop
            },
            child,
            React.createElement('span', {
              className: 'blx-icon blx-icon-drag',
              draggable: 'true'
            })
          );
        })
      );
    }
  }]);

  return SortableList;
}(React.Component);

SortableList.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  onDrop: PropTypes.func
};

SortableList.defaultProps = {
  className: '',
  style: null,
  onDrop: function onDrop() {}
};

module.exports = SortableList;