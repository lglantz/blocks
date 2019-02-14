'use strict';

var m = require('mithril');

var BasicButton = {
  view: function view(vnode) {
    var props = vnode.attrs;
    return m(
      'button',
      {
        className: 'blx-button ' + props.classes + ' ' + (props.iconName ? 'blx-icon-button' : '') + ' ' + (props.isDisabled ? 'blx-disabled' : ''),
        onClick: props.onClick,
        disabled: props.isDisabled,
        autoFocus: props.autoFocus,
        onKeyDown: props.onKeyDown,
        onKeyUp: props.onKeyUp
      },
      props.leftIcon && m('span', { className: 'blx-icon blx-icon-' + props.leftIcon }),
      props.text && m(
        'span',
        null,
        props.text
      ),
      props.iconName && m('span', { className: 'blx-icon blx-icon-' + props.iconName }),
      props.rightIcon && m('span', { className: 'blx-icon blx-icon-' + props.rightIcon })
    );
  }
};

module.exports = BasicButton;