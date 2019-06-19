import React from "react"

const { Button } = require('blocks-react').Buttons;

const ButtonLinkExample = () => (
  <div className="blx-v-button-group">
    <Button color="primary" isExternal href="https://www.google.com">
      Go to Google
    </Button>
    <Button color="secondary" href="/">
      Go to Blocks
    </Button>
    <Button color="dark" isExternal href="https://www.google.com">
      Go to Google
    </Button>
    <Button color="secondary" disabled={true} href="/">
      Go to Blocks
    </Button>
  </div>
);

export default ButtonLinkExample;
