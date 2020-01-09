"use strict";
exports.__esModule = true;
var React = require("react");
var classnames_1 = require("classnames");
var DropdownItem_1 = require("./DropdownItem");
var MoreIcon_1 = require("../icons/MoreIcon");
var closeOnClick_1 = require("../wrappers/closeOnClick");
var keyControlledMenu_1 = require("../wrappers/keyControlledMenu");
var PopoverMenu = function (props) {
    var classes = classnames_1["default"]('blx-popover-wrapper', props.className);
    var triggerClasses = classnames_1["default"]('blx-popover-trigger', {
        'blx-active': props.isOpen,
        'blx-disabled': props.disabled
    });
    var menuClasses = classnames_1["default"]('blx-popover-menu', {
        'blx-hidden': !props.isOpen,
        'blx-popover-is-left': props.position === 'left',
        'blx-popover-is-right': props.position === 'right',
        'blx-popover-is-center': props.position === 'center'
    });
    return (React.createElement("div", { style: props.style, className: classes, 
        //@ts-ignore
        ref: props.forwardedRef },
        props.text &&
            React.createElement("span", { className: "blx-h5" }, props.text),
        React.createElement("div", { className: "blx-dropdown blx-popover" },
            React.createElement("button", { className: triggerClasses, disabled: props.disabled, onClick: props.toggle, title: props.text, autoFocus: props.autoFocus, onKeyDown: props.onKeyDown, onFocus: props.onTriggerFocus }, props.icon),
            React.createElement("div", { className: menuClasses },
                React.createElement("div", { className: "blx-popover-menu-wrapper" },
                    React.createElement("ul", { className: "blx-dropdown-list " + (props.scrollable ? 'blx-scrollable' : '') }, props.options.map(function (option, idx) { return (React.createElement(DropdownItem_1["default"], { key: option.text || option.key, 
                        //@ts-ignore
                        option: option, ref: props.optionsRefs[idx], onKeyDown: props.onKeyDown, onKeyUp: props.onKeyUp, onSelect: props.onSelect })); })))))));
};
PopoverMenu.defaultProps = {
    className: '',
    style: null,
    isOpen: false,
    scrollable: false,
    position: 'center',
    options: [],
    text: null,
    icon: React.createElement(MoreIcon_1["default"], null),
    value: null,
    onChange: function () { },
    autoFocus: false
};
exports["default"] = closeOnClick_1["default"](keyControlledMenu_1["default"](PopoverMenu));
