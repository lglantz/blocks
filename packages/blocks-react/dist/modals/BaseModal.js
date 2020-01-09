"use strict";
exports.__esModule = true;
var React = require("react");
var classnames_1 = require("classnames");
var CloseIcon_1 = require("../icons/CloseIcon");
var BaseModal = function (_a) {
    var classes = _a.classes, className = _a.className, style = _a.style, isHidden = _a.isHidden, isClosable = _a.isClosable, onClose = _a.onClose, children = _a.children;
    if (isHidden)
        return null;
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: classnames_1["default"]('blx-modal-overlay', classes.overlay), onClick: onClose }),
        React.createElement("div", { className: classnames_1["default"]('blx-modal', classes.root, className), style: style },
            isClosable && (React.createElement("button", { className: classnames_1["default"]('blx-modal-close', classes.close), "aria-label": "close", onClick: onClose },
                React.createElement(CloseIcon_1["default"], null))),
            children)));
};
BaseModal.defaultProps = {
    classes: {
        root: '',
        close: '',
        overlay: ''
    },
    className: '',
    style: null,
    isHidden: true,
    isClosable: true,
    onClose: function () { },
    children: null
};
exports["default"] = BaseModal;
