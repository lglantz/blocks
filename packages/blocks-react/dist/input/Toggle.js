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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
//@ts-check
var react_1 = require("react");
// import PropTypes from 'prop-types';
var classnames_1 = require("classnames");
;
/**
 * This is a toggle, it can have many options.
 */
var Toggle = function (_a) {
    var className = _a.className, style = _a.style, options = _a.options, value = _a.value, _b = _a.label, label = _b === void 0 ? 'toggle' : _b, _c = _a.disabled, disabled = _c === void 0 ? false : _c, other = __rest(_a, ["className", "style", "options", "value", "label", "disabled"]);
    var classes = classnames_1["default"]('blx-toggle', className, {
        'blx-disabled': disabled
    });
    return (react_1["default"].createElement("div", { style: style, className: classes, role: "radiogroup", "aria-label": label }, options.map(function (option, idx) { return (react_1["default"].createElement("label", { className: "blx-toggle-container", key: option.text },
        react_1["default"].createElement("input", __assign({ type: "radio", id: "toggle-option-" + idx, value: option.value, checked: option.value === value, disabled: disabled }, other)),
        react_1["default"].createElement("span", { className: "blx-toggle-text" }, option.text))); })));
};
// Toggle.propTypes = {
//   style: PropTypes.object,
//   className: PropTypes.string,
//   value: PropTypes.oneOfType([
//     PropTypes.string,
//     PropTypes.number
//   ]).isRequired,
//   options: PropTypes.arrayOf(PropTypes.shape({
//     text: PropTypes.string.isRequired,
//     value: PropTypes.oneOfType([
//       PropTypes.string,
//       PropTypes.number
//     ]).isRequired
//   })).isRequired,
//   disabled: PropTypes.bool,
//   label: PropTypes.string
// };
// Toggle.defaultProps = {
//   disabled: false,
//   label: 'toggle'
// };
exports["default"] = Toggle;
// module.exports = Toggle;
