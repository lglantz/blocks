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
var AlertBanner_1 = require("./AlertBanner");
var WarningIcon_1 = require("../icons/WarningIcon");
var WarningAlert = function (props) { return (React.createElement(AlertBanner_1["default"], __assign({}, props, { className: "blx-warning " + props.className, icon: React.createElement(WarningIcon_1["default"], { className: "blx-alert-icon" }) }))); };
WarningAlert.defaultProps = {
    className: '',
    title: 'Warning',
    closable: true
};
exports["default"] = WarningAlert;
