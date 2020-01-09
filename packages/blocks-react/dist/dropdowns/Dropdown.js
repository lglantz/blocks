"use strict";
exports.__esModule = true;
var React = require("react");
var classnames_1 = require("classnames");
var DropdownItem_1 = require("./DropdownItem");
var DownIcon_1 = require("../icons/DownIcon");
var closeOnClick_1 = require("../wrappers/closeOnClick");
var keyControlledMenu_1 = require("../wrappers/keyControlledMenu");
var DropdownMenu = function (props) {
    var triggerContent = props.text;
    var triggerClassNames = classnames_1["default"]('blx-dropdown-trigger', {
        'blx-active': props.isOpen,
        'blx-disabled': props.disabled,
        'blx-invalid': !props.isValid
    });
    if (props.value) {
        for (var i = 0; i < props.options.length; i++) {
            var option = props.options[i];
            if (option.value === props.value) {
                triggerContent = option.text || option.triggerContent || option.element;
                break;
            }
        }
    }
    return (React.createElement("div", { style: props.style, className: classnames_1["default"]('blx-dropdown-wrapper', props.className), 
        //@ts-ignore
        ref: props.forwardedRef },
        React.createElement("div", { className: "blx-dropdown" },
            props.label && React.createElement("label", { className: "blx-ui-text " + (props.disabled ? 'blx-disabled' : '') }, props.label),
            React.createElement("button", { className: triggerClassNames, disabled: props.disabled, onClick: props.toggle, title: triggerContent, autoFocus: props.autoFocus, onKeyDown: props.onKeyDown, onFocus: props.onTriggerFocus },
                props.icon,
                React.createElement("span", { className: props.value ? 'blx-dropdown-text' : 'blx-dropdown-placeholder' }, triggerContent),
                React.createElement(DownIcon_1["default"], { className: "blx-dropdown-arrow" })),
            React.createElement("div", { className: classnames_1["default"]('blx-dropdown-menu', { 'blx-hidden': !props.isOpen }) },
                React.createElement("ul", { className: classnames_1["default"]('blx-dropdown-list', { 'blx-scrollable': props.scrollable }) }, props.options.map(function (option, idx) { return (React.createElement(DropdownItem_1["default"], { key: option.text || option.key, 
                    //@ts-ignore
                    option: option, ref: props.optionsRefs[idx], selected: props.value === option.value, onKeyDown: props.onKeyDown, onKeyUp: props.onKeyUp, onSelect: props.onSelect })); })))),
        !props.isValid && React.createElement("span", { className: "blx-invalid-input-message" }, props.invalidErrorMessage)));
};
DropdownMenu.defaultProps = {
    className: '',
    style: null,
    isOpen: false,
    scrollable: false,
    options: [],
    text: 'Choose an option',
    icon: null,
    label: '',
    value: null,
    triggerContent: null,
    onSelect: function () { },
    autoFocus: false,
    isValid: true,
    invalidErrorMessage: null
};
exports["default"] = closeOnClick_1["default"](keyControlledMenu_1["default"](DropdownMenu));
