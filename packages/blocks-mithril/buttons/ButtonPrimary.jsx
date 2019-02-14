const m = require('mithril');

const Button = require('./Button.jsx');

const ButtonPrimary = {
  view: (vnode) => {
    const props = vnode.attrs;
    const Component = Button;
    return (
     <Component
        {...props}
        classes="blx-primary"
      />
    );
  }
};

module.exports = ButtonPrimary;

