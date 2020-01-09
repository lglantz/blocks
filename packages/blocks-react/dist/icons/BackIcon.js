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
var BackIcon = function (props) {
    return (React.createElement(Icon_1["default"], __assign({}, props),
        React.createElement("path", { fillRule: "nonzero", d: "M7.422 10.014l6.35 6.37L12.36 17.8 4.6 10.014 12.389 2.2 13.8 3.616z" })));
};
exports["default"] = BackIcon;
