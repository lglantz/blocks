!function n(s,o,l){function i(t,e){if(!o[t]){if(!s[t]){var r="function"==typeof require&&require;if(!e&&r)return r(t,!0);if(m)return m(t,!0);var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}var c=o[t]={exports:{}};s[t][0].call(c.exports,function(e){return i(s[t][1][e]||e)},c,c.exports,n,s,o,l)}return o[t].exports}for(var m="function"==typeof require&&require,e=0;e<l.length;e++)i(l[e]);return i}({"/Users/emmacarlson/work/blocks/docs/_javascript/CheckboxPreview.jsx":[function(e,t,r){"use strict";var a=e("react"),c=e("react-dom"),n=e("./common/getPreviewComponent.jsx"),s=e("../../react/input/Checkbox.jsx"),o=document.getElementById("react-preview");c.render(a.createElement(function(){return a.createElement("div",null,a.createElement("div",{className:"l-flex-horizontal"},n("Unselected",a.createElement(s,{text:"Unselected"}))),a.createElement("div",{className:"l-flex-horizontal"},n("Selected",a.createElement(s,{text:"Selected",isChecked:!0}))),a.createElement("div",{className:"l-flex-horizontal"},n("Unselected, Disabled",a.createElement(s,{text:"Unselected",isDisabled:!0}))),a.createElement("div",{className:"l-flex-horizontal"},n("Selected, Disabled",a.createElement(s,{text:"Selected, Disabled",isDisabled:!0,isChecked:!0}))))},null),o)},{"../../react/input/Checkbox.jsx":"/Users/emmacarlson/work/blocks/react/input/Checkbox.jsx","./common/getPreviewComponent.jsx":"/Users/emmacarlson/work/blocks/docs/_javascript/common/getPreviewComponent.jsx",react:"react","react-dom":"react-dom"}],"/Users/emmacarlson/work/blocks/docs/_javascript/common/getPreviewComponent.jsx":[function(e,t,r){"use strict";var a=e("react");t.exports=function(e,t){return[a.createElement("span",{className:"doc-state-title blx-caption",key:e},e),a.createElement("div",{className:"doc-state-content",key:e+"-component"},t)]}},{react:"react"}],"/Users/emmacarlson/work/blocks/react/input/Checkbox.jsx":[function(e,t,r){"use strict";var a=e("react"),c=e("prop-types"),n=function(e){return a.createElement("label",{className:"blx-checkbox"},a.createElement("div",{className:"blx-label",title:e.text},e.text),a.createElement("input",{type:"checkbox",name:e.name,value:e.value,defaultChecked:e.isChecked,disabled:e.isDisabled,onChange:e.onChange}),a.createElement("span",{className:"blx-checkmark "+(e.isDisabled?"blx-disabled":"")}))};n.propTypes={text:c.string,value:c.string,name:c.string,isDisabled:c.bool,isChecked:c.bool,onChange:c.func},n.defaultProps={text:"",value:"",name:"",isDisabled:!1,isChecked:!1,onChange:function(){}},t.exports=n},{"prop-types":"prop-types",react:"react"}]},{},["/Users/emmacarlson/work/blocks/docs/_javascript/CheckboxPreview.jsx"]);