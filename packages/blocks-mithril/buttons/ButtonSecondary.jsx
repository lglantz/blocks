const m = require('mithril');

const Button = require('./Button.jsx');

const ButtonSecondary = {
  view: (vnode) => {
    const props = vnode.attrs;
    return (
     <Button
        {...props}
        classes="blx-secondary"
      />
    );
  }
};

module.exports = ButtonSecondary;

