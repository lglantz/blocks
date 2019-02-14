const m = require('mithril');

const Button = require('./Button.jsx');

const ButtonPrimary = {
  view: (vnode) => {
    const props = vnode.attrs;
    return (
     <Button
        {...props}
        classes="blx-primary"
      />
    );
  }
};

module.exports = ButtonPrimary;

