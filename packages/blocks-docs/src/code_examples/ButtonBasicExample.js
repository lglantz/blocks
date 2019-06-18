import React from "react"

const { Button } = require('blocks-react').Buttons;

const ButtonBasicExample = () => (
  <div className="blx-v-button-group">
    <Button color="primary" onClick={() => {}}>
      Primary Button
    </Button>
    <Button color="secondary" onClick={() => {}}>
      Secondary Button
    </Button>
    <Button color="danger" onClick={() => {}}>
      Danger Button
    </Button>
    <Button color="dark" onClick={() => {}}>
      <span>Dark Button</span>
    </Button>
    <Button color="primary" disabled={true} onClick={() => {}}>
      Primary Button
    </Button>
  </div>
);

export default ButtonBasicExample;
