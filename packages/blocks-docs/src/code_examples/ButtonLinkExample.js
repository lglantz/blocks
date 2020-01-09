import React from "react"

import ButtonPrimary from 'blocks-react/dist/buttons/ButtonPrimary';
import ButtonSecondary from 'blocks-react/dist/buttons/ButtonSecondary';

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
