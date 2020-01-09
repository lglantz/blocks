"use strict";
exports.__esModule = true;
var React = require("react");
var classnames_1 = require("classnames");
var Link_1 = require("react-router-dom/Link");
var LinkSubTabItem = function (props) {
    var classes = classnames_1["default"]('blx-sub-tab', {
        'blx-active': props.active,
        'blx-hidden': !props.visible,
        'blx-disabled': props.disabled
    });
    var link = props.useReactLink
        //@ts-ignore
        ? React.createElement(Link_1["default"], { className: classes, to: props.href }, props.text)
        : React.createElement("a", { className: classes, href: props.href }, props.text);
    return (React.createElement("div", { style: props.style, className: props.className },
        link,
        props.children));
};
LinkSubTabItem.defaultProps = {
    className: '',
    style: null,
    visible: true,
    active: false,
    disabled: false,
    href: undefined,
    useReactLink: false
};
exports["default"] = LinkSubTabItem;
