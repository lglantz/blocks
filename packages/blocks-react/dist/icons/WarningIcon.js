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
var Icon_1 = require("./Icon");
var WarningIcon = function (props) {
    return (React.createElement(Icon_1["default"], __assign({}, props),
        React.createElement("path", { d: "M9 5v2.286L9.5 13h1l.5-5.714V5z" }),
        React.createElement("circle", { cx: "10", cy: "15", r: "1" })));
};
exports["default"] = WarningIcon;
