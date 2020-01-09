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
exports.__esModule = true;
var React = require("react");
function closeOnClick(WrappedComponent) {
    var ComponentWithCloseOnClick = /** @class */ (function (_super) {
        __extends(ComponentWithCloseOnClick, _super);
        function ComponentWithCloseOnClick(props) {
            var _this = _super.call(this, props) || this;
            _this.state = { isOpen: !!props.isOpen };
            _this.open = _this.open.bind(_this);
            _this.close = _this.close.bind(_this);
            _this.toggle = _this.toggle.bind(_this);
            _this.closeOnClick = _this.closeOnClick.bind(_this);
            _this.ref = React.createRef();
            return _this;
        }
        ComponentWithCloseOnClick.prototype.open = function () {
            var _this = this;
            this.setState({
                isOpen: true
            }, function () {
                document.body.addEventListener('click', _this.closeOnClick);
            });
        };
        ComponentWithCloseOnClick.prototype.close = function (e) {
            var _this = this;
            this.setState({
                isOpen: false
            }, function () {
                document.body.removeEventListener('click', _this.closeOnClick);
            });
            e.stopPropagation();
        };
        ComponentWithCloseOnClick.prototype.toggle = function (e) {
            e.stopPropagation();
            e.preventDefault();
            if (this.state.isOpen) {
                this.close(e);
            }
            else {
                this.open();
            }
        };
        ComponentWithCloseOnClick.prototype.closeOnClick = function (e) {
            if (!this.ref.current)
                return;
            if (e.target === this.ref.current || this.ref.current.contains(e.target))
                return;
            this.close(e);
            if (this.props.afterCloseOnClick)
                this.props.afterCloseOnClick(); // anything that needs to happen when the dropdown closes by clicking outside of it
        };
        ComponentWithCloseOnClick.prototype.render = function () {
            return (React.createElement(WrappedComponent, __assign({}, this.props, this.state, { forwardedRef: this.ref, isOpen: this.state.isOpen, toggle: this.toggle, open: this.open, close: this.close })));
        };
        ComponentWithCloseOnClick.defaultProps = {
            isOpen: false,
            afterCloseOnClick: null
        };
        return ComponentWithCloseOnClick;
    }(React.Component));
    return ComponentWithCloseOnClick;
}
exports["default"] = closeOnClick;
