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
var SuccessIcon_1 = require("../icons/SuccessIcon");
/** SuccessAlert */
var SuccessAlert = function (props) { return (React.createElement(AlertBanner_1["default"], __assign({}, props, { className: "blx-success " + props.className, icon: React.createElement(SuccessIcon_1["default"], { className: "blx-alert-icon" }) }))); };
SuccessAlert.defaultProps = {
    className: '',
    title: 'Success',
    closable: true
};
exports["default"] = SuccessAlert;
