"use strict";
exports.__esModule = true;
var React = require("react");
var classnames_1 = require("classnames");
var Link_1 = require("react-router-dom/Link");
var LinkTabItem = function (props) {
    var classes = classnames_1["default"]('blx-tab-item', {
        'blx-active': props.active
    });
    var link = props.useReactLink
        //@ts-ignore
        ? React.createElement(Link_1["default"], { className: classes, to: props.href }, props.text)
        : React.createElement("a", { className: classes, href: props.href }, props.text);
    return (React.createElement("li", { style: props.style, className: props.className },
        link,
        props.children));
};
LinkTabItem.defaultProps = {
    className: '',
    style: null,
    active: false,
    useReactLink: false
};
exports["default"] = LinkTabItem;
