import React from "react"

const { ButtonPrimary, ButtonSecondary } = require('blocks-react').Buttons;

const ButtonLinkExample = () => (
  <div className="blx-h-button-group">
    <ButtonPrimary
      text="Go to Google"
      href="https://www.google.com"
      isExternal
    />
    <ButtonSecondary
      text="Go to Blocks"
      href="/"
    />
  </div>
);

export default ButtonLinkExample;
