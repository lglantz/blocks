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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var React = require("react");
var classnames_1 = require("classnames");
var Link_1 = require("react-router-dom/Link");
var DropdownItem = /** @class */ (function (_super) {
    __extends(DropdownItem, _super);
    function DropdownItem(props) {
        var _this = _super.call(this, props) || this;
        _this.onClick = function (e) {
            e.stopPropagation();
            _this.props.onSelect(e, _this.props.option);
        };
        _this.onKeyDown = function (e) {
            _this.props.onKeyDown(e, _this.props.option);
        };
        _this.onKeyUp = function (e) {
            _this.props.onKeyUp(e, _this.props.option);
        };
        return _this;
    }
    DropdownItem.prototype.getLinkItem = function () {
        if (this.props.option.useReactLink) {
            return (
            //@ts-ignore
            React.createElement(Link_1["default"], { to: this.props.option.href, disabled: this.props.option.disabled, onKeyDown: this.onKeyDown, onKeyUp: this.onKeyUp, onClick: this.onClick }, this.props.option.text || this.props.option.element));
        }
        return (React.createElement("a", { href: this.props.option.href, target: this.props.option.newTab ? '_blank' : null, 
            //@ts-ignore
            disabled: this.props.option.disabled, title: this.props.option.text, onKeyDown: this.onKeyDown, onKeyUp: this.onKeyUp, onClick: this.onClick }, this.props.option.text || this.props.option.element));
    };
    DropdownItem.prototype.getButtonItem = function () {
        return (React.createElement("button", { disabled: this.props.option.disabled, title: this.props.option.text, onKeyDown: this.onKeyDown, onKeyUp: this.onKeyUp, onClick: this.onClick }, this.props.option.text || this.props.option.element));
    };
    DropdownItem.prototype.render = function () {
        var item = null;
        if (this.props.option.href) {
            item = this.getLinkItem();
        }
        else {
            item = this.getButtonItem();
        }
        var classes = classnames_1["default"]('blx-dropdown-item', this.props.className, {
            'blx-disabled': this.props.option.disabled,
            'blx-selected': this.props.selected
        });
        return (React.createElement("li", { style: this.props.style, className: classes, ref: this.props.forwardedRef }, item));
    };
    DropdownItem.defaultProps = {
        className: '',
        style: null,
        selected: false,
        onKeyDown: function () { },
        onKeyUp: function () { },
        onSelect: function () { }
    };
    return DropdownItem;
}(React.Component));
DropdownItem.defaultProps = {
    className: '',
    style: null,
    selected: false,
    onKeyDown: function () { },
    onKeyUp: function () { },
    onSelect: function () { }
};
exports["default"] = React.forwardRef(function (props, ref) { return (React.createElement(DropdownItem, __assign({}, props, { forwardedRef: ref }))); });
