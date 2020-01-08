"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
/**
 * Text Area Block
 */
var TextArea = /** @class */ (function (_super) {
    __extends(TextArea, _super);
    function TextArea(props) {
        var _this = _super.call(this, props) || this;
        _this.textAreaRef = React.createRef();
        return _this;
    }
    TextArea.prototype.componentDidMount = function () {
        this.resizeTextArea();
    };
    // resize the text area to fit only the height of its content
    TextArea.prototype.resizeTextArea = function () {
        if (!this.textAreaRef)
            return;
        // set height to 1px so scrollHeight will be total height of content
        this.textAreaRef.current.style.height = '1px';
        // reset to be correct height
        this.textAreaRef.current.style.height = this.textAreaRef.current.scrollHeight + "px";
    };
    TextArea.prototype.render = function () {
        var _this = this;
        var _a = this.props, isValid = _a.isValid, invalidErrorMessage = _a.invalidErrorMessage, label = _a.label, style = _a.style, className = _a.className, onKeyUp = _a.onKeyUp, other = __rest(_a, ["isValid", "invalidErrorMessage", "label", "style", "className", "onKeyUp"]);
        // text input element itself
        // invalid message and class
        var invalidLabelMessage = null;
        if (!isValid) {
            invalidLabelMessage = React.createElement("span", { className: "blx-invalid-input-message" }, invalidErrorMessage);
        }
        // label
        var labelElement = null;
        if (label) {
            labelElement = React.createElement("label", { className: "blx-ui-text" }, label);
        }
        var classes = classnames_1["default"]('blx-text-field', className, {
            'blx-disabled': other.disabled
        });
        var textAreaClasses = classnames_1["default"]({ 'blx-invalid': !isValid });
        return (React.createElement("div", { style: style, className: classes },
            labelElement,
            React.createElement("div", { className: "blx-text-field-container" },
                React.createElement("textarea", __assign({ className: textAreaClasses, ref: this.textAreaRef, onKeyUp: function (e) {
                        if (onKeyUp)
                            onKeyUp(e);
                        _this.resizeTextArea();
                    } }, other))),
            invalidLabelMessage));
    };
    TextArea.defaultProps = {
        className: '',
        style: null,
        label: '',
        disabled: false,
        isValid: true,
        invalidErrorMessage: '',
        onKeyUp: null
    };
    return TextArea;
}(React.Component));
exports["default"] = TextArea;
