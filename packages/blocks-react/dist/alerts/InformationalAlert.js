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
var InformationIcon_1 = require("../icons/InformationIcon");
/** InformationalAlert */
var InformationalAlert = function (props) { return (React.createElement(AlertBanner_1["default"], __assign({}, props, { className: "blx-information " + props.className, icon: React.createElement(InformationIcon_1["default"], { className: "blx-alert-icon" }) }))); };
InformationalAlert.propTypes = {
    className: PropTypes.string.isRequired,
    closable: PropTypes.bool,
    message: PropTypes.string,
    onClose: PropTypes.func,
    title: PropTypes.string
};
InformationalAlert.defaultProps = {
    closable: false,
    message: '',
    title: 'Information',
    onClose: undefined
};
exports["default"] = InformationalAlert;
