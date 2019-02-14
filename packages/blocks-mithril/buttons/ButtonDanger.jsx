const m = require('mithril');

const Button = require('./Button.jsx');

const ButtonDanger = {
  view: (vnode) => {
    const props = vnode.attrs;
    return (
     <Button
        {...props}
        classes="blx-danger"
      />
    );
  }
};

module.exports = ButtonDanger;

