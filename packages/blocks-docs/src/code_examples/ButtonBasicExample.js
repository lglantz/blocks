import React from "react"

const {
  ButtonPrimary,
  ButtonSecondary,
  ButtonDanger,
  ButtonDark } = require('blocks-react').Buttons;

const ButtonBasicExample = () => (
  <div className="blx-v-button-group">
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
    <ButtonDark
      text="Dark Button"
      onClick={() => {}}
    />
  </div>
);

export default ButtonBasicExample;
