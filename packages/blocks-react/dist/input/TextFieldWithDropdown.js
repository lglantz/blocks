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
exports.__esModule = true;
var React = require("react");
var classnames_1 = require("classnames");
var TextField_1 = require("./TextField");
var Dropdown_1 = require("../dropdowns/Dropdown");
var TextFieldWithDropdown = function (props) {
    var classes = classnames_1["default"]('blx-text-field-with-dropdown', props.className, {
        'blx-disabled': props.disabled
    });
    return (React.createElement("div", { style: props.style, className: classes },
        //@ts-ignore 
        React.createElement(TextField_1["default"], __assign({}, props.textField)),
        //@ts-ignore 
        React.createElement(Dropdown_1["default"], __assign({}, props.dropdown))));
};
TextFieldWithDropdown.defaultProps = {
    className: '',
    style: null,
    disabled: false,
    textField: {
        label: null,
        onChange: function () { },
        name: '',
        type: 'text',
        placeholder: 'Text input',
        invalidErrorMessage: '',
        value: '',
        isValid: true
    },
    dropdown: {
        text: 'Choose an option',
        onChange: function () { },
        options: [],
        value: null
    }
};
exports["default"] = TextFieldWithDropdown;
