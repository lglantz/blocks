'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var m = require('mithril');

var Button = require('./Button.js');

var ButtonPrimary = {
  view: function view(vnode) {
    var props = vnode.attrs;
    var Component = Button;
    return m(Component, _extends({}, props, {
      classes: 'blx-primary'
    }));
  }
};

module.exports = ButtonPrimary;