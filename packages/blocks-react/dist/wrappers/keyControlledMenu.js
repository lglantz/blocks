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
function keyControlledMenu(WrappedComponent) {
    var GenericDropdown = /** @class */ (function (_super) {
        __extends(GenericDropdown, _super);
        function GenericDropdown(props) {
            var _this = _super.call(this, props) || this;
            var optionsRefs = [];
            for (var i = 0; i < _this.props.options.length; i++) {
                optionsRefs[i] = React.createRef();
            }
            _this.state = {
                onFocusIdx: -1,
                optionsRefs: optionsRefs
            };
            _this.onSelect = _this.onSelect.bind(_this);
            _this.onKeyDown = _this.onKeyDown.bind(_this);
            _this.onKeyUp = _this.onKeyUp.bind(_this);
            _this.onTriggerFocus = _this.onTriggerFocus.bind(_this);
            return _this;
        }
        GenericDropdown.prototype.componentDidUpdate = function (prevProps) {
            if (prevProps.options !== this.props.options) {
                var optionsRefs = [];
                for (var i = 0; i < this.props.options.length; i++) {
                    optionsRefs[i] = React.createRef();
                }
                this.setState({ optionsRefs: optionsRefs });
            }
        };
        GenericDropdown.prototype.onSelect = function (e, option) {
            if (option.onClick) {
                option.onClick(e);
            }
            else if (this.props.onChange) {
                this.props.onChange(option);
            }
            this.props.close(e);
        };
        GenericDropdown.prototype.onKeyDown = function (e) {
            if (e.key === 'Tab' && this.props.isOpen) {
                this.props.close(e);
            }
            else if (['ArrowDown', ' '].indexOf(e.key) > -1 && !this.props.isOpen) {
                e.preventDefault();
                this.props.open();
            }
            else {
                if (['ArrowDown', 'ArrowUp', 'Enter', ' '].indexOf(e.key) > -1)
                    e.preventDefault();
                this.moveFocusUsingKey(e.key);
            }
        };
        GenericDropdown.prototype.onKeyUp = function (e, option) {
            if (['Enter', ' '].indexOf(e.key) > -1) {
                this.onSelect(e, option);
            }
            else if (e.key === 'Escape') {
                this.props.close(e);
            }
        };
        GenericDropdown.prototype.onTriggerFocus = function () {
            this.setState({
                onFocusIdx: -1
            });
        };
        GenericDropdown.prototype.moveFocusUsingKey = function (keyName) {
            var _this = this;
            this.setState({
                onFocusIdx: this.getFocusIndexAfterKeyPress(keyName)
            }, function () { return _this.focusOption(_this.state.onFocusIdx); });
        };
        GenericDropdown.prototype.getFocusIndexAfterKeyPress = function (keyName) {
            if (keyName === 'ArrowDown')
                return Math.min(this.state.onFocusIdx + 1, this.props.options.length - 1);
            if (keyName === 'ArrowUp')
                return Math.max(this.state.onFocusIdx - 1, 0);
            for (var i = 0; i < this.props.options.length; i++) {
                var option = this.props.options[i];
                if (option.text && option.text[0].toLowerCase() === keyName)
                    return i;
            }
            return this.state.onFocusIdx;
        };
        GenericDropdown.prototype.focusOption = function (idx) {
            if (idx < 0)
                return;
            var optionRef = this.state.optionsRefs[idx].current;
            if (optionRef) {
                // ref is to the li item that contains the dropdown elements
                // search for a focusable child
                // (particularly important for custom elements)
                for (var i = 0; i < optionRef.childNodes.length; i++) {
                    var child = optionRef.childNodes[i];
                    if (typeof child.focus === 'function') {
                        child.focus();
                        break;
                    }
                }
            }
        };
        GenericDropdown.prototype.render = function () {
            return (React.createElement(WrappedComponent, __assign({}, this.props, { optionsRefs: this.state.optionsRefs, onKeyDown: this.onKeyDown, onKeyUp: this.onKeyUp, onSelect: this.onSelect, onTriggerFocus: this.onTriggerFocus })));
        };
        GenericDropdown.defaultProps = {
            isOpen: false,
            options: [],
            onChange: function () { }
        };
        return GenericDropdown;
    }(React.Component));
    return GenericDropdown;
}
exports["default"] = keyControlledMenu;
// export default keyControlledMenu;
