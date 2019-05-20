import React from "react"

const { ButtonPrimary, ButtonSecondary, ButtonDanger } = require('blocks-react').Buttons;

const ButtonBasicExample = () => (
  <div className="blx-h-button-group">
    <ButtonPrimary
      text="Primary Button"
      onClick={() => {}}
    />
    <ButtonSecondary
      text="Secondary Button"
      onClick={() => {}}
    />
    <ButtonDanger
      text="Danger Button"
      onClick={() => {}}
    />
  </div>
);

export default ButtonBasicExample;
