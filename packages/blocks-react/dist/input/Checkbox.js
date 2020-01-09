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
var classnames_1 = require("classnames");
var Checkbox = function (_a) {
    var style = _a.style, className = _a.className, children = _a.children, other = __rest(_a, ["style", "className", "children"]);
    var classes = classnames_1["default"]('blx-checkbox', className, {
        'blx-disabled': other.disabled
    });
    return (React.createElement("label", { style: style, className: classes },
        React.createElement("div", { className: "blx-label" }, children),
        React.createElement("input", __assign({ type: "checkbox" }, other)),
        React.createElement("span", { className: "blx-checkmark" })));
};
Checkbox.defaultProps = {
    style: null,
    className: '',
    disabled: false
};
exports["default"] = Checkbox;
