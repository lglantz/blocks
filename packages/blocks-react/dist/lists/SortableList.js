"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var React = require("react");
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
        if (element.className.indexOf(className) < 0)
            element.className += " " + className;
    }
    else {
        element.className = element.className.replace(" " + className, '');
    }
}
var SortableList = /** @class */ (function (_super) {
    __extends(SortableList, _super);
    function SortableList(props) {
        var _this = _super.call(this, props) || this;
        _this.listDOM = React.createRef();
        _this.source = null;
        _this.onDragStart = _this.onDragStart.bind(_this);
        _this.onDragOver = _this.onDragOver.bind(_this);
        _this.onDragLeave = _this.onDragLeave.bind(_this);
        _this.onDragEnd = _this.onDragEnd.bind(_this);
        _this.onDrop = _this.onDrop.bind(_this);
        return _this;
    }
    SortableList.prototype.componentDidMount = function () {
        if (this.listDOM.current) {
            this.listDOM.current.addEventListener('dragstart', this.onDragStart);
            this.listDOM.current.addEventListener('dragover', this.onDragOver);
            this.listDOM.current.addEventListener('dragend', this.onDragEnd);
        }
    };
    // check whether a given DOM element is inside this sortable list at any depth
    SortableList.prototype.isInList = function (element) {
        var node = element;
        while (node) {
            if (node === this.listDOM.current)
                return true;
            node = node.parentNode;
        }
        return false;
    };
    // return the list element <li> that the given element is a child of
    // for these lists, the actual draggable element is the icon, but
    // we want to ignore the icons always and pretend like the list items
    // are the draggable elements
    SortableList.prototype.getListElement = function (child) {
        if (!this.isInList(child))
            return null;
        var node = child;
        while (node && node.tagName !== 'LI') {
            node = node.parentNode;
        }
        return node;
    };
    SortableList.prototype.getDragTarget = function (e) {
        if (!this.isInList(e.target))
            return null;
        var listItem = this.getListElement(e.target);
        if (listItem === this.source)
            return null;
        return listItem;
    };
    SortableList.prototype.onDragOver = function (e) {
        if (!this.source)
            return;
        e.preventDefault();
        var target = this.getDragTarget(e);
        if (!target)
            return;
        if (isBefore(this.source, target)) {
            addOrRemoveClass(target, 'blx-dragover-top', true);
        }
        else {
            addOrRemoveClass(target, 'blx-dragover-bottom', true);
        }
    };
    SortableList.prototype.onDragLeave = function (e) {
        if (!this.source)
            return;
        var target = this.getDragTarget(e);
        if (!target)
            return;
        addOrRemoveClass(target, 'blx-dragover-top', false);
        addOrRemoveClass(target, 'blx-dragover-bottom', false);
    };
    SortableList.prototype.onDrop = function (e) {
        if (!this.source)
            return;
        e.preventDefault();
        var target = this.getDragTarget(e);
        if (!target)
            return;
        var listChildren = Array.prototype.slice.call(this.listDOM.current.children);
        var sourceStartIndex = listChildren.indexOf(this.source);
        if (isBefore(this.source, target)) {
            target.parentNode.insertBefore(this.source, target);
        }
        else {
            target.parentNode.insertBefore(this.source, target.nextSibling);
        }
        addOrRemoveClass(target, 'blx-dragover-top', false);
        addOrRemoveClass(target, 'blx-dragover-bottom', false);
        addOrRemoveClass(this.source, 'blx-dragging', false);
        listChildren = Array.prototype.slice.call(this.listDOM.current.children);
        var sourceEndIndex = listChildren.indexOf(this.source);
        this.props.onDrop(sourceStartIndex, sourceEndIndex);
        this.source = null;
    };
    SortableList.prototype.onDragStart = function (e) {
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
    };
    SortableList.prototype.onDragEnd = function (e) {
        if (!this.source)
            return;
        addOrRemoveClass(this.source, 'blx-dragging', false);
        this.source = null;
    };
    SortableList.prototype.render = function () {
        var _this = this;
        return (React.createElement("ul", { style: this.props.style, className: "blx-sortable-list " + this.props.className, ref: this.listDOM }, React.Children.map(this.props.children, function (child) { return (React.createElement("li", { key: Math.random(), className: "blx-sortable-list-item", onDragLeave: _this.onDragLeave, onDrop: _this.onDrop },
            child,
            React.createElement("span", { className: "blx-icon blx-icon-drag", draggable: true }))); })));
    };
    SortableList.defaultProps = {
        className: '',
        style: null,
        onDrop: function () { }
    };
    return SortableList;
}(React.Component));
exports["default"] = SortableList;
