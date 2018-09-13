!function s(a,l,i){function c(t,e){if(!l[t]){if(!a[t]){var n="function"==typeof require&&require;if(!e&&n)return n(t,!0);if(u)return u(t,!0);var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}var o=l[t]={exports:{}};a[t][0].call(o.exports,function(e){return c(a[t][1][e]||e)},o,o.exports,s,a,l,i)}return l[t].exports}for(var u="function"==typeof require&&require,e=0;e<i.length;e++)c(i[e]);return c}({1:[function(e,t,n){"use strict";var r=function(){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}();var o=e("react"),s=e("react-dom"),a=e("../../react/modals/BaseModal.jsx"),l=e("../../react/buttons/ButtonPrimary.jsx"),i=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={isBaseModalHidden:!0},e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),r(t,[{key:"render",value:function(){var e=this;return o.createElement("div",null,o.createElement(a,{isHidden:this.state.isBaseModalHidden,onClose:function(){return e.setState(function(e){return{isBaseModalHidden:!e.isBaseModalHidden}})}},o.createElement("h4",null,"Base Modal"),o.createElement("p",null,"Hello! This is a base modal.")),o.createElement(l,{text:"Open Base Modal",onClick:function(){return e.setState(function(e){return{isBaseModalHidden:!e.isBaseModalHidden}})}}))}}]),t}(),c=document.getElementById("react-preview");s.render(o.createElement(i,null),c)},{"../../react/buttons/ButtonPrimary.jsx":3,"../../react/modals/BaseModal.jsx":5,react:"react","react-dom":"react-dom"}],2:[function(e,t,n){"use strict";var r=e("react"),o=e("prop-types"),s=function(e){return r.createElement("button",{className:"blx-button "+e.classes+" "+(e.isDisabled?"blx-disabled":""),onClick:e.onClick,disabled:e.isDisabled,autoFocus:e.autoFocus,onKeyDown:e.onKeyDown,onKeyUp:e.onKeyUp,ref:e.setRef},e.leftIcon&&r.createElement("span",{className:"blx-icon blx-icon-"+e.leftIcon}),r.createElement("span",null,e.text),e.rightIcon&&r.createElement("span",{className:"blx-icon blx-icon-"+e.rightIcon}))};s.propTypes={text:o.string.isRequired,onClick:o.func.isRequired,classes:o.string,isDisabled:o.bool,leftIcon:o.string,rightIcon:o.string,autoFocus:o.bool,onKeyDown:o.func,onKeyUp:o.func,setRef:o.func},s.defaultProps={classes:"blx-primary",isDisabled:!1,leftIcon:null,rightIcon:null,autoFocus:!1,onKeyDown:function(){},onKeyUp:function(){},setRef:function(){}},t.exports=s},{"prop-types":"prop-types",react:"react"}],3:[function(e,t,n){"use strict";var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=e("react"),s=e("prop-types"),a=e("./Button.jsx"),l=e("./LinkButton.jsx");function i(e){var t=e.href?l:a;return o.createElement(t,r({},e,{classes:"blx-primary"}))}i.propTypes={text:s.string.isRequired,onClick:s.func,href:s.string,isDisabled:s.bool},i.defaultProps={isDisabled:!1,onClick:null,href:""},t.exports=i},{"./Button.jsx":2,"./LinkButton.jsx":4,"prop-types":"prop-types",react:"react"}],4:[function(e,t,n){"use strict";var r=e("react"),o=e("prop-types"),s=e("react-router-dom").Link;function a(e){var t="blx-button "+e.classes+" "+(e.isDisabled?"blx-disabled":"");return e.useReactLink?r.createElement(s,{className:t,to:e.href,disabled:e.isDisabled},e.leftIcon&&r.createElement("span",{className:"blx-icon blx-icon-"+e.leftIcon}),r.createElement("span",null,e.text),e.rightIcon&&r.createElement("span",{className:"blx-icon blx-icon-"+e.rightIcon})):r.createElement("a",{className:t,href:e.href,disabled:e.isDisabled,target:e.isExternal?"_blank":"_self"},e.leftIcon&&r.createElement("span",{className:"blx-icon blx-icon-"+e.leftIcon}),r.createElement("span",null,e.text),e.rightIcon&&r.createElement("span",{className:"blx-icon blx-icon-"+e.rightIcon}))}a.propTypes={text:o.string.isRequired,href:o.string.isRequired,classes:o.string,isDisabled:o.bool,isExternal:o.bool,useReactLink:o.bool,leftIcon:o.string,rightIcon:o.string},a.defaultProps={classes:"blx-primary",isDisabled:!1,isExternal:!1,useReactLink:!1,leftIcon:null,rightIcon:null},t.exports=a},{"prop-types":"prop-types",react:"react","react-router-dom":"react-router-dom"}],5:[function(e,t,n){"use strict";var r=e("react"),o=e("prop-types"),s=function(e){return e.isHidden?null:r.createElement("div",null,r.createElement("div",{className:"blx-modal-overlay",onClick:e.onClose}),r.createElement("div",{className:"blx-modal"},r.createElement("button",{className:"blx-icon blx-icon-close",onClick:e.onClose}),r.createElement("div",null,e.children)))};s.propTypes={isHidden:o.bool,onClose:o.func,children:o.node.isRequired},s.defaultProps={isHidden:!0,onClose:function(){}},t.exports=s},{"prop-types":"prop-types",react:"react"}]},{},[1]);