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
var MoreVerticalIcon = function (props) {
    return (React.createElement(Icon_1["default"], __assign({}, props),
        React.createElement("path", { fillRule: "nonzero", transform: "rotate(90 10 10)", d: "M10 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm8 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM2 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" })));
};
exports["default"] = MoreVerticalIcon;
