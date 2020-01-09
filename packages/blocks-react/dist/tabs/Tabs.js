"use strict";
exports.__esModule = true;
var React = require("react");
var classnames_1 = require("classnames");
var Tabs = function (props) {
    var classes = classnames_1["default"](props.className, {
        'blx-vertical-tabs': props.vertical,
        'blx-horizontal-tabs': !props.vertical,
        'blx-disabled': props.disabled
    });
    var children = React.Children.map(props.children, function (child) { return (
    //@ts-ignore
    React.cloneElement(child, {
        tabIndex: props.disabled ? "-1" : undefined
    })); });
    return (React.createElement("ul", { style: props.style, className: classes }, children));
};
Tabs.defaultProps = {
    className: '',
    style: null,
    disabled: false,
    vertical: false
};
exports["default"] = Tabs;
