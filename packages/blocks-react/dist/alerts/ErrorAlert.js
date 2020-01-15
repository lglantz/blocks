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
var PropTypes = require("prop-types");
var AlertBanner_1 = require("./AlertBanner");
var ErrorIcon_1 = require("../icons/ErrorIcon");
/** ErrorAlert */
var ErrorAlert = function (props) { return (React.createElement(AlertBanner_1["default"], __assign({}, props, { className: "blx-error " + props.className, icon: React.createElement(ErrorIcon_1["default"], { className: "blx-alert-icon" }) }))); };
ErrorAlert.propTypes = {
    className: PropTypes.string.isRequired,
    closable: PropTypes.bool,
    message: PropTypes.string,
    onClose: PropTypes.func,
    title: PropTypes.string
};
ErrorAlert.defaultProps = {
    className: '',
    title: 'Error',
    closable: false
};
exports["default"] = ErrorAlert;
