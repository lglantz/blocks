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
var InformationIcon = function (props) {
    return (React.createElement(Icon_1["default"], __assign({}, props),
        React.createElement("circle", { cx: "9.529", cy: "15.027", r: "1" }),
        React.createElement("path", { fillRule: "nonzero", d: "M10.409 12.809H8.645v-3.02l.237-.012c2-.102 3.155-1.041 3.155-2.402 0-1.045-.744-1.846-1.894-1.846-1.068 0-1.707.505-1.783 1.686l-.015.237-1.656-.023.004-.25c.033-2.062 1.386-3.206 3.594-3.206 2.103 0 3.466 1.484 3.466 3.354 0 1.855-1.24 3.355-3.344 3.777v1.705z" })));
};
exports["default"] = InformationIcon;
