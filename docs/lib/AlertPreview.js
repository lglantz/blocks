!function o(a,l,c){function i(t,e){if(!l[t]){if(!a[t]){var r="function"==typeof require&&require;if(!e&&r)return r(t,!0);if(p)return p(t,!0);var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}var n=l[t]={exports:{}};a[t][0].call(n.exports,function(e){return i(a[t][1][e]||e)},n,n.exports,o,a,l,c)}return l[t].exports}for(var p="function"==typeof require&&require,e=0;e<c.length;e++)i(c[e]);return i}({"/Users/emmacarlson/work/blocks/docs/_javascript/AlertPreview.jsx":[function(e,t,r){"use strict";var s=e("react"),n=e("react-dom"),o=e("../../react/alerts/SuccessAlert.jsx"),a=e("../../react/alerts/InformationalAlert.jsx"),l=e("../../react/alerts/WarningAlert.jsx"),c=e("../../react/alerts/ErrorAlert.jsx"),i=document.getElementById("react-preview");n.render(s.createElement(function(){return s.createElement("div",null,s.createElement(o,{message:"Additional information or directions go here. Brevity is the soul of wit, however, text may wrap to another line in the off chance that we want the user hooked on phonics."}),s.createElement(a,{message:"Additional information or directions go here. We may decide this particular information is very important and remove the option to close it. If users can’t get rid of it, maybe they’ll read it."}),s.createElement(l,{message:"An explanation of the warning goes here."}),s.createElement(c,{message:"An explanation of the error goes here. This should be the scariest looking banner — but not too scary. Maybe we’ll choose to add a button on this banner."}))},null),i)},{"../../react/alerts/ErrorAlert.jsx":"/Users/emmacarlson/work/blocks/react/alerts/ErrorAlert.jsx","../../react/alerts/InformationalAlert.jsx":"/Users/emmacarlson/work/blocks/react/alerts/InformationalAlert.jsx","../../react/alerts/SuccessAlert.jsx":"/Users/emmacarlson/work/blocks/react/alerts/SuccessAlert.jsx","../../react/alerts/WarningAlert.jsx":"/Users/emmacarlson/work/blocks/react/alerts/WarningAlert.jsx",react:"react","react-dom":"react-dom"}],"/Users/emmacarlson/work/blocks/react/alerts/AlertBanner.jsx":[function(e,t,r){"use strict";var s=function(){function s(e,t){for(var r=0;r<t.length;r++){var s=t[r];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(e,t,r){return t&&s(e.prototype,t),r&&s(e,r),e}}();var n=e("react"),o=e("prop-types"),a=function(e){function r(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r);var t=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,e));return t.state={hidden:!1},t.onClose=t.onClose.bind(t),t}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(r,n.Component),s(r,[{key:"onClose",value:function(){"function"==typeof this.props.onClose&&this.props.onClose(),this.setState({hidden:!0})}},{key:"render",value:function(){var e=null;return this.props.closable&&(e=n.createElement("button",{className:"blx-icon blx-icon-close",onClick:this.onClose})),n.createElement("div",{className:"blx-alert blx-"+this.props.type+" "+(this.state.hidden?"blx-hidden":"")},n.createElement("div",{className:"blx-alert-icon-container"},n.createElement("div",{className:"blx-alert-icon-background"}),n.createElement("div",{className:"blx-alert-icon"})),n.createElement("div",{className:"blx-alert-text"},n.createElement("span",{className:"blx-subtitle blx-"+this.props.type},this.props.title),n.createElement("p",null,this.props.message)),e)}}]),r}();a.propTypes={type:o.string,title:o.string,message:o.string,closable:o.bool,onClose:o.func},a.defaultProps={type:"",title:"",message:"",closable:!1,onClose:null},t.exports=a},{"prop-types":"prop-types",react:"react"}],"/Users/emmacarlson/work/blocks/react/alerts/ErrorAlert.jsx":[function(e,t,r){"use strict";var s=e("react"),n=e("prop-types"),o=e("./AlertBanner.jsx"),a=function(e){return s.createElement(o,{type:"error",title:e.title,message:e.message})};a.propTypes={title:n.string,message:n.string},a.defaultProps={title:"Error",message:""},t.exports=a},{"./AlertBanner.jsx":"/Users/emmacarlson/work/blocks/react/alerts/AlertBanner.jsx","prop-types":"prop-types",react:"react"}],"/Users/emmacarlson/work/blocks/react/alerts/InformationalAlert.jsx":[function(e,t,r){"use strict";var s=e("react"),n=e("prop-types"),o=e("./AlertBanner.jsx"),a=function(e){return s.createElement(o,{type:"information",title:e.title,message:e.message})};a.propTypes={title:n.string,message:n.string},a.defaultProps={title:"Information",message:""},t.exports=a},{"./AlertBanner.jsx":"/Users/emmacarlson/work/blocks/react/alerts/AlertBanner.jsx","prop-types":"prop-types",react:"react"}],"/Users/emmacarlson/work/blocks/react/alerts/SuccessAlert.jsx":[function(e,t,r){"use strict";var s=e("react"),n=e("prop-types"),o=e("./AlertBanner.jsx"),a=function(e){return s.createElement(o,{type:"success",title:e.title,message:e.message,closable:!0,onClose:e.onClose})};a.propTypes={title:n.string,message:n.string,onClose:n.func},a.defaultProps={title:"Success",message:"",onClose:null},t.exports=a},{"./AlertBanner.jsx":"/Users/emmacarlson/work/blocks/react/alerts/AlertBanner.jsx","prop-types":"prop-types",react:"react"}],"/Users/emmacarlson/work/blocks/react/alerts/WarningAlert.jsx":[function(e,t,r){"use strict";var s=e("react"),n=e("prop-types"),o=e("./AlertBanner.jsx"),a=function(e){return s.createElement(o,{type:"warning",title:e.title,message:e.message,closable:!0})};a.propTypes={title:n.string,message:n.string},a.defaultProps={title:"Warning",message:""},t.exports=a},{"./AlertBanner.jsx":"/Users/emmacarlson/work/blocks/react/alerts/AlertBanner.jsx","prop-types":"prop-types",react:"react"}]},{},["/Users/emmacarlson/work/blocks/docs/_javascript/AlertPreview.jsx"]);