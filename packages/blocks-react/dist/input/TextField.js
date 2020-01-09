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
var TextField = function (_a) {
    var label = _a.label, isValid = _a.isValid, invalidErrorMessage = _a.invalidErrorMessage, prefix = _a.prefix, suffix = _a.suffix, icon = _a.icon, style = _a.style, className = _a.className, forwardedRef = _a.forwardedRef, helperText = _a.helperText, other = __rest(_a, ["label", "isValid", "invalidErrorMessage", "prefix", "suffix", "icon", "style", "className", "forwardedRef", "helperText"]);
    // label element
    var labelElement = null;
    if (label) {
        labelElement = React.createElement("label", { className: "blx-ui-text" }, label);
    }
    // invalid message and class
    var invalidLabelMessage = null;
    if (!isValid) {
        invalidLabelMessage = React.createElement("span", { className: "blx-invalid-input-message" }, invalidErrorMessage);
    }
    // prefix element
    var prefixElement = null;
    if (prefix) {
        prefixElement = React.createElement("span", { className: "blx-text-field-prefix" }, prefix);
    }
    // suffix element
    var suffixElement = null;
    if (suffix) {
        suffixElement = React.createElement("span", { className: "blx-text-field-suffix" }, suffix);
    }
    // icon element
    var iconElement = null;
    if (icon) {
        iconElement = React.createElement("span", { className: "blx-text-field-icon" }, icon);
    }
    // helper text
    var helperTextElement = null;
    if (other.maxLength) {
        helperTextElement = React.createElement("span", { className: "blx-text-field-helper-text" }, other.value.length + "/" + other.maxLength);
    }
    else if (helperText) {
        helperTextElement = React.createElement("span", { className: "blx-text-field-helper-text" }, "" + helperText);
    }
    // root level classes
    var classes = classnames_1["default"]('blx-text-field', className, {
        'blx-disabled': other.disabled
    });
    var textFieldClasses = classnames_1["default"]({ 'blx-invalid': !isValid });
    return (React.createElement("div", { style: style, className: classes },
        labelElement,
        React.createElement("div", { className: "blx-text-field-container" },
            prefixElement,
            suffixElement,
            React.createElement("input", __assign({ className: textFieldClasses, ref: forwardedRef }, other)),
            iconElement),
        invalidLabelMessage,
        helperTextElement));
};
TextField.defaultProps = {
    className: '',
    style: null,
    label: '',
    prefix: null,
    suffix: null,
    icon: null,
    disabled: false,
    isValid: true,
    invalidErrorMessage: '',
    helperText: null,
    value: []
};
exports["default"] = React.forwardRef(function (props, ref) { return (React.createElement(TextField, __assign({}, props, { forwardedRef: ref }))); });
