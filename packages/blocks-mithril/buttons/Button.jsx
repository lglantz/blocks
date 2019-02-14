const m = require('mithril');

const BasicButton = {
  view: (vnode) => {
    const props = vnode.attrs;
    return (
      <button
        className={`blx-button ${props.classes} ${props.iconName ? 'blx-icon-button' : ''} ${props.isDisabled ? 'blx-disabled' : ''}`}
        onClick={props.onClick}
        disabled={props.isDisabled}
        autoFocus={props.autoFocus}
        onKeyDown={props.onKeyDown}
        onKeyUp={props.onKeyUp}
      >
        { props.leftIcon && <span className={`blx-icon blx-icon-${props.leftIcon}`} /> }
        { props.text && <span>{props.text}</span> }
        { props.iconName && <span className={`blx-icon blx-icon-${props.iconName}`} /> }
        { props.rightIcon && <span className={`blx-icon blx-icon-${props.rightIcon}`} /> }
      </button>
    );
  }
};

module.exports = BasicButton;
