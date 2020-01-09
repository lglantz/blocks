"use strict";
exports.__esModule = true;
var React = require("react");
var classnames_1 = require("classnames");
var closeOnClick_1 = require("../wrappers/closeOnClick");
var Tooltip = function (props) {
    var messageClasses = classnames_1["default"]("blx-tooltip-" + props.position, {
        'blx-hidden': !props.isOpen,
        'blx-light-bg': props.lightBg,
        'blx-dark-bg': !props.lightBg,
        'blx-tooltip-titled-message': props.title,
        'blx-tooltip-message': !props.title
    });
    return (React.createElement("div", { style: props.style, className: classnames_1["default"]('blx-tooltip', props.className), ref: props.forwardedRef },
        React.createElement("button", { className: "blx-tooltip-trigger", onClick: function (e) {
                e.currentTarget.focus();
                props.toggle(e);
            } }, props.trigger),
        React.createElement("div", { className: messageClasses },
            props.title && React.createElement("h5", { className: "blx-tooltip-titled-message-title" }, props.title),
            React.createElement("p", null, props.text))));
};
Tooltip.defaultProps = {
    style: null,
    className: '',
    title: '',
    trigger: null,
    lightBg: false,
    position: 'bottom',
    text: '',
    isOpen: false
};
exports["default"] = closeOnClick_1["default"](Tooltip);
