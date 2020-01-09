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
var NextIcon_1 = require("../icons/NextIcon");
function onToggle(e) {
    var section = e.target.parentNode;
    var panel = section.getElementsByClassName('blx-accordion-content')[0];
    if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
    }
    else {
        panel.style.maxHeight = panel.scrollHeight + "px";
    }
}
var AccordionSection = /** @class */ (function (_super) {
    __extends(AccordionSection, _super);
    function AccordionSection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AccordionSection.prototype.componentDidMount = function () {
        if (this.props.open) {
            this.content.style.maxHeight = this.content.scrollHeight + "px";
        }
    };
    AccordionSection.prototype.componentDidUpdate = function () {
        if (this.props.open) {
            this.content.style.maxHeight = this.content.scrollHeight + "px";
        }
    };
    AccordionSection.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { style: this.props.style, className: "blx-accordion-section " + this.props.className },
            React.createElement("input", { id: this.props.id, type: "checkbox", name: "blx-accordion-tab", defaultChecked: this.props.open, onChange: this.props.onToggle }),
            React.createElement("label", { htmlFor: this.props.id, className: "blx-accordion-trigger" },
                React.createElement(NextIcon_1["default"], { className: "blx-accordion-arrow" }),
                this.props.trigger),
            React.createElement("div", { className: "blx-accordion-content", ref: function (content) { return _this.content = content; } }, this.props.children)));
    };
    AccordionSection.defaultProps = {
        className: '',
        style: null,
        open: false,
        onToggle: onToggle
    };
    return AccordionSection;
}(React.Component));
AccordionSection.defaultProps = {
    className: '',
    style: null,
    open: false,
    onToggle: onToggle
};
exports["default"] = AccordionSection;
