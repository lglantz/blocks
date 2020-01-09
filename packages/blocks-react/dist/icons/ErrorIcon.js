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
var ErrorIcon = function (props) {
    return (React.createElement(Icon_1["default"], __assign({}, props),
        React.createElement("path", { fillRule: "evenodd", d: "M10 3c-3.85 0-7 3.15-7 7s3.15 7 7 7 7-3.15 7-7-3.15-7-7-7zm0 12.6c-1.008 0-1.96-.29-2.8-.812l.056-.058 6.72-8.698.112-.232C15.04 6.902 15.6 8.293 15.6 9.801c0 3.19-2.52 5.799-5.6 5.799zm0-11.2c1.008 0 1.96.29 2.8.812v.058l-6.72 8.698-.112.232A5.87 5.87 0 0 1 4.4 10.199C4.4 7.009 6.92 4.4 10 4.4z" })));
};
exports["default"] = ErrorIcon;
