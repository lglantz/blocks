!function i(l,a,s){function p(t,e){if(!a[t]){if(!l[t]){var n="function"==typeof require&&require;if(!e&&n)return n(t,!0);if(c)return c(t,!0);var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}var o=a[t]={exports:{}};l[t][0].call(o.exports,function(e){return p(l[t][1][e]||e)},o,o.exports,i,l,a,s)}return a[t].exports}for(var c="function"==typeof require&&require,e=0;e<s.length;e++)p(s[e]);return p}({1:[function(e,t,n){"use strict";var r=function(){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}();var o=e("react"),i=e("react-dom"),l=e("./common/getPreviewComponent.jsx"),a=e("../../react/input/TextField.jsx"),s=e("../../react/input/TextFieldWithDropdown.jsx"),p="Wrong",c=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={invalidInputValue:p,unitValue:"ft"},e.onChangeUnit=e.onChangeUnit.bind(e),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),r(t,[{key:"onChangeUnit",value:function(e){this.setState({unitValue:e.value})}},{key:"render",value:function(){var t=this;return o.createElement("div",null,o.createElement("div",{className:"l-flex-horizontal"},l("Default",o.createElement(a,{label:"Text input label",placeholder:"e.g. Text input"}))),o.createElement("div",{className:"l-flex-horizontal"},l("Disabled",o.createElement(a,{label:"Text input label",placeholder:"e.g. Text input",isDisabled:!0}))),o.createElement("div",{className:"l-flex-horizontal"},l("Idle, Filled",o.createElement(a,{label:"Text input label",value:"More than a placeholder",onChange:function(){}}))),o.createElement("div",{className:"l-flex-horizontal"},l("Validation",o.createElement(a,{label:"Text input label",isValid:function(e){return e!==p},invalidErrorMessage:"This text is invalid. Enter any value other than Wrong to make it valid.",value:this.state.invalidInputValue,onChange:function(e){return t.setState({invalidInputValue:e.target.value})}}))),o.createElement("div",{className:"l-flex-horizontal"},l("Prefix/Suffix",o.createElement(a,{label:"Text input label",prefix:"$",suffix:"USD"}))),o.createElement("div",{className:"l-flex-horizontal"},l("Text Field with Dropdown",o.createElement(s,{textField:{label:"Text input label",placeholder:"100,000"},dropdown:{options:[{text:"ft",value:"ft"},{text:"cm",value:"cm"},{text:"m",value:"m"}],value:this.state.unitValue,onChange:this.onChangeUnit}}))))}}]),t}(),u=document.getElementById("react-preview");i.render(o.createElement(c,null),u)},{"../../react/input/TextField.jsx":4,"../../react/input/TextFieldWithDropdown.jsx":5,"./common/getPreviewComponent.jsx":2,react:"react","react-dom":"react-dom"}],2:[function(e,t,n){"use strict";var r=e("react");t.exports=function(e,t){return[r.createElement("span",{className:"doc-state-title blx-caption",key:e},e),r.createElement("div",{className:"doc-state-content",key:e+"-component"},t)]}},{react:"react"}],3:[function(e,t,n){"use strict";var r=function(){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}();var o=e("react"),i=e("prop-types"),l=(e("react-dom"),e("../wrappers/closeOnClick.jsx")),a=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),r(t,[{key:"onSelect",value:function(e){this.props.onChange&&this.props.onChange(e),this.props.close()}},{key:"getOptionTrigger",value:function(){var e=this.props.text;if(this.props.value)for(var t=0;t<this.props.options.length;t++){var n=this.props.options[t];if(n.value==this.props.value){e=n.text;break}}return o.createElement("button",{className:"blx-dropdown-trigger "+(this.props.isOpen?"blx-active":"")+" "+(this.props.isDisabled?"blx-disabled":"")+" "+(this.props.value?"":"blx-dropdown-trigger-placeholder"),disabled:this.props.isDisabled,onClick:this.props.toggle},e)}},{key:"render",value:function(){var n=this;return o.createElement("div",{className:"blx-dropdown-wrapper"},o.createElement("div",{className:"blx-dropdown"},this.props.description&&o.createElement("div",null,o.createElement("label",{className:"blx-dropdown-description"},this.props.description)),this.getOptionTrigger(),o.createElement("ul",{className:"blx-dropdown-menu "+(this.props.isOpen?"":"blx-hidden")},this.props.options.map(function(e){var t=null;return t=e.href?o.createElement("a",{href:e.href},e.text):o.createElement("button",{onClick:function(){return n.onSelect(e)}},e.text),o.createElement("li",{className:"blx-dropdown-item",key:e.text},t)}))))}}]),t}();a.propTypes={isOpen:i.bool,toggle:i.func.isRequired,close:i.func.isRequired,text:i.string,description:i.string,value:i.oneOfType([i.string,i.number]),options:i.arrayOf(i.shape({text:i.oneOfType([i.string,i.number]),value:i.oneOfType([i.string,i.number]),href:i.string})),isDisabled:i.bool,onChange:i.func},a.defaultProps={isOpen:!1,options:[],text:"Choose an option",description:"",value:null,onChange:function(){}},t.exports=l(a)},{"../wrappers/closeOnClick.jsx":6,"prop-types":"prop-types",react:"react","react-dom":"react-dom"}],4:[function(e,t,n){"use strict";var r=function(){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}();var l=e("react"),o=e("prop-types"),i=function(e){function n(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n);var t=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.state={isValid:e.isValid(e.value)},t}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,l.Component),r(n,[{key:"updateValidity",value:function(){this.setState({isValid:this.props.isValid(this.props.value)})}},{key:"render",value:function(){var t=this,e=null,n=null;this.state.isValid||(e=l.createElement("span",{className:"blx-invalid-text-field-marker"},"*"),n=l.createElement("span",{className:"blx-invalid-text-field-message"},this.props.invalidErrorMessage));var r=null;this.props.prefix&&(r=l.createElement("span",{className:"blx-text-field-prefix"},this.props.prefix));var o=null;this.props.suffix&&(o=l.createElement("span",{className:"blx-text-field-suffix"},this.props.suffix));var i=l.createElement("input",{type:this.props.type,name:this.props.name,value:this.props.value,placeholder:this.props.placeholder,disabled:this.props.isDisabled,autoComplete:this.props.autoComplete,readOnly:this.props.readOnly,onChange:this.props.onChange,onFocus:this.props.onFocus,onBlur:function(e){t.updateValidity(),t.props.onBlur&&t.props.onBlur(e)},onKeyUp:function(e){t.props.onKeyUp&&t.props.onKeyUp(e),13===e.keyCode&&e.target.blur(),t.state.isValid||t.updateValidity()},onKeyDown:this.props.onKeyDown});return l.createElement("div",{className:"blx-text-field "+(this.props.isDisabled?"blx-disabled":"")},l.createElement("div",null,this.props.label&&l.createElement("label",{className:"blx-text-field-label"},this.props.label),e),l.createElement("div",{className:"blx-text-field-container"},r,o,i),n)}}]),n}();i.propTypes={type:o.string,name:o.string,value:o.string,label:o.string,placeholder:o.string,prefix:o.string,suffix:o.oneOfType([o.string,o.object]),isDisabled:o.bool,isValid:o.func,invalidErrorMessage:o.string,onChange:o.func,onKeyUp:o.func,onKeyDown:o.func,onFocus:o.func,onBlur:o.func,autoComplete:o.string,readOnly:o.bool},i.defaultProps={type:"text",name:"",value:"",label:"",placeholder:"Text input",prefix:null,suffix:null,isDisabled:!1,isValid:function(){return!0},invalidErrorMessage:"",onChange:null,onKeyUp:null,onKeyDown:null,onFocus:null,onBlur:null,autoComplete:"",readOnly:!1},t.exports=i},{"prop-types":"prop-types",react:"react"}],5:[function(e,t,n){"use strict";var r=e("react"),o=e("prop-types"),i=e("./TextField.jsx"),l=e("../dropdowns/Dropdown.jsx"),a=function(e){return r.createElement("div",{className:"blx-text-field-with-dropdown "+(e.isDisabled?"blx-disabled":"")},r.createElement(i,e.textField),r.createElement(l,e.dropdown))};a.propTypes={isDisabled:o.bool,textField:o.shape({label:o.string,onChange:o.func,name:o.string,type:o.string,placeholder:o.string,invalidErrorMessage:o.string,value:o.string,isValid:o.func}),dropdown:o.shape({text:o.string,onChange:o.func,options:o.arrayOf(o.shape({text:o.oneOfType([o.string,o.number]),value:o.oneOfType([o.string,o.number]),href:o.string,disabled:o.bool})),value:o.oneOfType([o.string,o.number])})},a.defaultProps={isDisabled:!1,textField:{label:null,onChange:function(){},name:"",type:"text",placeholder:"Text input",invalidErrorMessage:"",value:"",isValid:function(){return!0}},dropdown:{text:"Choose an option",onChange:function(){},options:[],value:null}},t.exports=a},{"../dropdowns/Dropdown.jsx":3,"./TextField.jsx":4,"prop-types":"prop-types",react:"react"}],6:[function(e,t,n){"use strict";var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=function(){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}();var l=e("react"),a=e("prop-types");t.exports=function(r){var e=function(e){function n(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n);var t=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.state={isOpen:!!e.isOpen},t.open=t.open.bind(t),t.close=t.close.bind(t),t.toggle=t.toggle.bind(t),t.closeOnClick=t.closeOnClick.bind(t),t}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,l.Component),i(n,[{key:"componentDidMount",value:function(){document.body.addEventListener("click",this.closeOnClick)}},{key:"componentWillUnmount",value:function(){document.body.removeEventListener("click",this.closeOnClick)}},{key:"open",value:function(){this.setState({isOpen:!0})}},{key:"close",value:function(){this.setState({isOpen:!1})}},{key:"toggle",value:function(){this.state.isOpen?this.close():this.open()}},{key:"closeOnClick",value:function(e){this.domElement&&(e.target===this.domElement||this.domElement.contains(e.target)||(this.close(),this.props.afterCloseOnClick&&this.props.afterCloseOnClick()))}},{key:"render",value:function(){var t=this;return l.createElement("div",{ref:function(e){t.domElement=e}},l.createElement(r,o({},this.props,this.state,{isOpen:this.state.isOpen,toggle:this.toggle,open:this.open,close:this.close})))}}]),n}();return e.propTypes={isOpen:a.bool,afterCloseOnClick:a.func},e.defaultProps={isOpen:!1,afterCloseOnClick:null},e}},{"prop-types":"prop-types",react:"react"}]},{},[1]);