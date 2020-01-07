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
var React = require('react');
var PropTypes = require('prop-types');
var classnames = require('classnames');
;
var Toggle = function (_a) {
    var className = _a.className, style = _a.style, options = _a.options, value = _a.value, label = _a.label, other = __rest(_a, ["className", "style", "options", "value", "label"]);
    var classes = classnames('blx-toggle', className, {
        'blx-disabled': other.disabled
    });
    return (React.createElement("div", { style: style, className: classes, role: "radiogroup", "aria-label": label }, options.map(function (option, idx) { return (React.createElement("label", { className: "blx-toggle-container", key: option.text },
        React.createElement("input", __assign({ type: "radio", id: "toggle-option-" + idx, value: option.value, checked: option.value === value }, other)),
        React.createElement("span", { className: "blx-toggle-text" }, option.text))); })));
};
Toggle.propTypes = {
    style: PropTypes.object,
    className: PropTypes.string,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired,
    options: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired,
        value: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]).isRequired
    })).isRequired,
    disabled: PropTypes.bool,
    label: PropTypes.string
};
Toggle.defaultProps = {
    disabled: false,
    label: 'toggle'
};
module.exports = Toggle;
