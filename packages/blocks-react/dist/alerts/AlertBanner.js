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
exports.__esModule = true;
var React = require("react");
var classnames_1 = require("classnames");
var CloseIcon_1 = require("../icons/CloseIcon");
/**
 * AlertBanner description!!!
 */
var AlertBanner = /** @class */ (function (_super) {
    __extends(AlertBanner, _super);
    function AlertBanner(props) {
        var _this = _super.call(this, props) || this;
        _this.onClose = function () {
            if (typeof _this.props.onClose === 'function') {
                _this.props.onClose();
            }
            _this.setState({
                hidden: true
            });
        };
        _this.state = {
            hidden: false
        };
        return _this;
        // this.onClose = this.onClose.bind(this);
    }
    // onClose() {
    // }
    AlertBanner.prototype.render = function () {
        var classes = classnames_1["default"]('blx-alert', this.props.className, {
            'blx-hidden': this.state.hidden
        });
        return (React.createElement("div", { style: this.props.style, className: classes },
            React.createElement("div", { className: "blx-alert-icon-container" },
                React.createElement("span", { className: "blx-alert-icon-background" }),
                this.props.icon),
            React.createElement("div", { className: "blx-alert-text" },
                React.createElement("h4", null, this.props.title),
                React.createElement("p", null, this.props.message)),
            this.props.closable &&
                React.createElement("button", { className: "blx-alert-close", "aria-label": "close", onClick: this.onClose },
                    React.createElement(CloseIcon_1["default"], null))));
    };
    AlertBanner.defaultProps = {
        className: '',
        style: null,
        title: '',
        icon: null,
        message: '',
        closable: false,
        onClose: null
    };
    return AlertBanner;
}(React.Component));
exports["default"] = AlertBanner;
