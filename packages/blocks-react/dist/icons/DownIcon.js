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
var DownIcon = function (props) {
    return (React.createElement(Icon_1["default"], __assign({}, props),
        React.createElement("path", { fillRule: "nonzero", d: "M9.986 12.578L16.384 6.2 17.8 7.611 9.986 15.4 2.2 7.64l1.416-1.412z" })));
};
exports["default"] = DownIcon;
