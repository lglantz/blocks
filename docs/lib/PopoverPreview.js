!function i(c,l,s){function a(t,e){if(!l[t]){if(!c[t]){var n="function"==typeof require&&require;if(!e&&n)return n(t,!0);if(p)return p(t,!0);var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}var r=l[t]={exports:{}};c[t][0].call(r.exports,function(e){return a(c[t][1][e]||e)},r,r.exports,i,c,l,s)}return l[t].exports}for(var p="function"==typeof require&&require,e=0;e<s.length;e++)a(s[e]);return a}({1:[function(e,t,n){"use strict";var o=function(){function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}}();var r=e("react"),i=e("react-dom"),c=e("./common/getPreviewComponent.jsx"),l=e("../../react/dropdowns/PopoverMenu.jsx"),s=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Component),o(t,[{key:"render",value:function(){return r.createElement("div",{className:"l-flex-vertical"},r.createElement("div",{className:"l-flex-horizontal"},c("Default",r.createElement(l,{text:"More Actions",options:[{text:"Action",onClick:function(){}},{text:"Disabled Action",disabled:!0,onClick:function(){}},{text:"Correct Action",onClick:function(){}},{text:"Another one",onClick:function(){}}]})),c("Default right",r.createElement(l,{text:"More Actions",isLeft:!1,options:[{text:"Action",onClick:function(){}},{text:"Disabled Action",disabled:!0,onClick:function(){}},{text:"Correct Action",onClick:function(){}},{text:"Another one",onClick:function(){}}]}))),r.createElement("div",{className:"l-flex-horizontal"},c("Arrow icon",r.createElement(l,{text:"More Actions",icon:"down",isLeft:!1,options:[{text:"Action",onClick:function(){}},{text:"Disabled Action",disabled:!0,onClick:function(){}},{text:"Correct Action",onClick:function(){}},{text:"Another one",onClick:function(){}}]}))))}}]),t}(),a=document.getElementById("react-preview");i.render(r.createElement(s,null),a)},{"../../react/dropdowns/PopoverMenu.jsx":3,"./common/getPreviewComponent.jsx":2,react:"react","react-dom":"react-dom"}],2:[function(e,t,n){"use strict";var o=e("react");t.exports=function(e,t){return[o.createElement("span",{className:"doc-state-title blx-caption",key:e},e),o.createElement("div",{className:"doc-state-content",key:e+"-component"},t)]}},{react:"react"}],3:[function(e,t,n){"use strict";var o=e("react"),r=e("prop-types"),i=(e("react-dom"),e("../wrappers/closeOnClick.jsx")),c=function(e){return o.createElement("div",{className:"blx-dropdown-wrapper"},e.text&&o.createElement("span",{className:"blx-subtitle blx-popover-text"},e.text),o.createElement("div",{className:"blx-dropdown blx-popover"},o.createElement("button",{className:"blx-popover-trigger",onClick:e.toggle},o.createElement("span",{className:"blx-icon blx-icon-"+e.icon})),o.createElement("ul",{className:"blx-dropdown-menu "+(e.isOpen?"":"blx-hidden")+" "+(e.isLeft?"blx-popover-is-left":"blx-popover-is-right")},e.options.map(function(e){var t=null;return t=e.element?e.element:e.href?o.createElement("a",{href:e.href,target:e.newTab?"_blank":null},e.text):o.createElement("button",{onClick:e.onClick},e.text),o.createElement("li",{className:"blx-dropdown-item "+(e.disabled?"blx-disabled":""),key:e.text},t)}))))};c.propTypes={text:r.string,isOpen:r.bool,isLeft:r.bool,options:r.arrayOf(r.shape({text:r.string,onClick:r.func,href:r.string,newTab:r.bool,element:r.object})),toggle:r.func.isRequired,icon:r.string},c.defaultProps={text:null,isOpen:!1,isLeft:!0,options:[],icon:"more"},t.exports=i(c)},{"../wrappers/closeOnClick.jsx":4,"prop-types":"prop-types",react:"react","react-dom":"react-dom"}],4:[function(e,t,n){"use strict";var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},i=function(){function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}}();var c=e("react"),l=e("prop-types");t.exports=function(o){var e=function(e){function n(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n);var t=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.state={isOpen:!!e.isOpen},t.open=t.open.bind(t),t.close=t.close.bind(t),t.toggle=t.toggle.bind(t),t.closeOnClick=t.closeOnClick.bind(t),t}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,c.Component),i(n,[{key:"componentDidMount",value:function(){document.body.addEventListener("click",this.closeOnClick)}},{key:"componentWillUnmount",value:function(){document.body.removeEventListener("click",this.closeOnClick)}},{key:"open",value:function(){this.setState({isOpen:!0})}},{key:"close",value:function(){this.setState({isOpen:!1})}},{key:"toggle",value:function(){this.state.isOpen?this.close():this.open()}},{key:"closeOnClick",value:function(e){this.domElement&&(e.target===this.domElement||this.domElement.contains(e.target)||(this.close(),this.props.afterCloseOnClick&&this.props.afterCloseOnClick()))}},{key:"render",value:function(){var t=this;return c.createElement("div",{ref:function(e){t.domElement=e}},c.createElement(o,r({},this.props,this.state,{isOpen:this.state.isOpen,toggle:this.toggle,open:this.open,close:this.close})))}}]),n}();return e.propTypes={isOpen:l.bool,afterCloseOnClick:l.func},e.defaultProps={isOpen:!1,afterCloseOnClick:null},e}},{"prop-types":"prop-types",react:"react"}]},{},[1]);