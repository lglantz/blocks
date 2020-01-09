"use strict";
exports.__esModule = true;
var React = require("react");
var classnames_1 = require("classnames");
var BaseModal_1 = require("./BaseModal");
var ButtonPrimary_1 = require("../buttons/ButtonPrimary");
var ButtonSecondary_1 = require("../buttons/ButtonSecondary");
var ButtonDanger_1 = require("../buttons/ButtonDanger");
var SuccessIcon_1 = require("../icons/SuccessIcon");
var InformationIcon_1 = require("../icons/InformationIcon");
var WarningIcon_1 = require("../icons/WarningIcon");
var ErrorIcon_1 = require("../icons/ErrorIcon");
var TYPE_MAP = {
    success: {
        className: 'blx-success-modal',
        icon: SuccessIcon_1["default"]
    },
    information: {
        className: 'blx-information-modal',
        icon: InformationIcon_1["default"]
    },
    warning: {
        className: 'blx-warning-modal',
        icon: WarningIcon_1["default"]
    },
    error: {
        className: 'blx-error-modal',
        icon: ErrorIcon_1["default"]
    }
};
var ActionModal = function (props) {
    if (props.isHidden)
        return null;
    var confirmButton = null;
    if (props.onConfirm && props.confirmText) {
        var Button = props.variant === 'warning' ? ButtonDanger_1["default"] : ButtonPrimary_1["default"];
        confirmButton = (React.createElement(Button
        //@ts-ignore
        , { 
            //@ts-ignore
            text: props.confirmText, onClick: props.onConfirm }));
    }
    var cancelButton = null;
    if (props.onCancel && props.cancelText) {
        cancelButton = (React.createElement(ButtonSecondary_1["default"]
        //@ts-ignore
        , { 
            //@ts-ignore
            text: props.cancelText, onClick: props.onCancel }));
    }
    var buttonBar = null;
    if (confirmButton || cancelButton) {
        buttonBar = (React.createElement("div", { className: "blx-h-button-group blx-modal-buttons" },
            cancelButton,
            confirmButton));
    }
    var actionInfo = null;
    if (props.actionInfo) {
        actionInfo = (React.createElement("p", null, props.actionInfo));
    }
    var Icon = TYPE_MAP[props.variant].icon;
    return (React.createElement(BaseModal_1["default"], { style: props.style, className: classnames_1["default"]('blx-action-modal', props.className, TYPE_MAP[props.variant].className), isHidden: props.isHidden, onClose: props.onClose },
        React.createElement("div", { className: "blx-modal-content" },
            React.createElement("div", { className: "blx-modal-title" },
                React.createElement(Icon, { className: "blx-modal-icon" }),
                React.createElement("h4", null, props.title)),
            props.children),
        buttonBar));
};
ActionModal.defaultProps = {
    actionInfo: undefined,
    className: '',
    style: null,
    isHidden: true,
    title: '',
    confirmText: '',
    onConfirm: null,
    cancelText: '',
    onCancel: null,
    onClose: function () { },
    variant: 'success',
    children: null
};
exports["default"] = ActionModal;
