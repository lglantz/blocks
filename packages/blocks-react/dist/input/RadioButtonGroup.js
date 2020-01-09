"use strict";
exports.__esModule = true;
var React = require("react");
var RadioButton_1 = require("./RadioButton");
var RadioButtonGroup = function (props) { return (React.createElement("div", { style: props.style, className: props.className }, props.options.map(function (option, idx) { return (React.createElement(RadioButton_1["default"], { key: option.text, 
    //@ts-ignore
    name: props.name, text: option.text, value: option.text, disabled: props.disabled, onChange: props.onChange, checked: idx === props.checkedIndex, isValid: option.isValid === false ? option.isValid : true })); }))); };
RadioButtonGroup.defaultProps = {
    className: '',
    style: null,
    options: [],
    disabled: false,
    checkedIndex: -1
};
exports["default"] = RadioButtonGroup;
