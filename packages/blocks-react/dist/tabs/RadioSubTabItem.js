"use strict";
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
var React = require("react");
var RadioSubTabItem = function (_a) {
    var visible = _a.visible, style = _a.style, className = _a.className, text = _a.text, children = _a.children, other = __rest(_a, ["visible", "style", "className", "text", "children"]);
    var classes = '';
    if (!visible)
        classes += 'blx-hidden ';
    return (React.createElement("label", { style: style, className: classes + " " + className },
        React.createElement("input", __assign({ type: "radio" }, other)),
        React.createElement("span", { className: "blx-sub-tab" }, text),
        children));
};
RadioSubTabItem.defaultProps = {
    className: '',
    style: null,
    visible: true
};
exports["default"] = RadioSubTabItem;
