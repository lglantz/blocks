"use strict";
exports.__esModule = true;
var React = require("react");
var Breadcrumbs = function (props) { return (React.createElement("nav", { style: props.style, className: "blx-breadcrumbs " + props.className },
    React.createElement("ul", null, props.breadcrumbs.map(function (breadcrumb) { return (React.createElement("li", { key: breadcrumb.text },
        React.createElement("a", { href: breadcrumb.href, title: breadcrumb.text }, breadcrumb.text))); })))); };
Breadcrumbs.defaultProps = {
    className: '',
    style: null,
    breadcrumbs: []
};
exports["default"] = Breadcrumbs;
