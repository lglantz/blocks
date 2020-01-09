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
/**
 * This is a toggle, it can have many options.
 */
var Toggle = function (_a) {
    var className = _a.className, style = _a.style, options = _a.options, value = _a.value, label = _a.label, disabled = _a.disabled, other = __rest(_a, ["className", "style", "options", "value", "label", "disabled"]);
    var classes = classnames_1["default"]('blx-toggle', className, {
        'blx-disabled': disabled
    });
    return (React.createElement("div", { style: style, className: classes, role: "radiogroup", "aria-label": label }, options.map(function (option, idx) { return (React.createElement("label", { className: "blx-toggle-container", key: option.text },
        React.createElement("input", __assign({ type: "radio", id: "toggle-option-" + idx, value: option.value, checked: option.value === value, disabled: disabled }, other)),
        React.createElement("span", { className: "blx-toggle-text" }, option.text))); })));
};
Toggle.defaultProps = {
    label: 'toggle',
    disabled: false
};
exports["default"] = Toggle;
