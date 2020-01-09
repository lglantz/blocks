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
var UpIcon = function (props) {
    return (React.createElement(Icon_1["default"], __assign({}, props),
        React.createElement("path", { fillRule: "nonzero", d: "M9.986 7.422l-6.37 6.35L2.2 12.36 9.986 4.6l7.814 7.789-1.416 1.411z" })));
};
exports["default"] = UpIcon;
