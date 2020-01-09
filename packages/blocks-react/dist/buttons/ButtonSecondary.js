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
exports.__esModule = true;
var React = require("react");
var Button_1 = require("./Button");
var LinkButton_1 = require("./LinkButton");
var ButtonSecondary = React.forwardRef(function (props, ref) {
    var Component = props.href ? LinkButton_1["default"] : Button_1["default"];
    return (React.createElement(Component, __assign({}, props, { href: props.href, ref: ref, className: "blx-secondary " + props.className })));
});
ButtonSecondary.defaultProps = {
    className: '',
    href: undefined,
    style: null
};
exports["default"] = ButtonSecondary;
