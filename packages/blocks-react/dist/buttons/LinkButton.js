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
var React = require("react");
var classnames_1 = require("classnames");
var Link_1 = require("react-router-dom/Link");
var LinkButton = React.forwardRef(function (props, ref) {
    var icon = props.icon, className = props.className, leftIcon = props.leftIcon, text = props.text, rightIcon = props.rightIcon, href = props.href, useReactLink = props.useReactLink, isExternal = props.isExternal, other = __rest(props, ["icon", "className", "leftIcon", "text", "rightIcon", "href", "useReactLink", "isExternal"]);
    var classes = classnames_1["default"]('blx-button', className, {
        'blx-icon-button': !!icon,
        'blx-disabled': other.disabled
    });
    if (useReactLink) {
        return (
        //@ts-ignore
        React.createElement(Link_1["default"], __assign({ className: classes, to: href, ref: ref }, other),
            leftIcon,
            text && React.createElement("span", null, text),
            icon,
            rightIcon));
    }
    return (React.createElement("a", __assign({ className: classes, href: href, target: isExternal ? '_blank' : '_self', ref: ref }, other),
        leftIcon,
        text && React.createElement("span", null, text),
        icon,
        rightIcon));
});
LinkButton.defaultProps = {
    className: 'blx-primary',
    text: '',
    isExternal: false,
    useReactLink: false,
    leftIcon: null,
    rightIcon: null,
    icon: null,
    disabled: false
};
exports["default"] = LinkButton;
