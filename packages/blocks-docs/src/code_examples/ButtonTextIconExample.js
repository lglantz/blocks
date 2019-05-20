import React from "react"

const { ButtonPrimary, ButtonSecondary, ButtonDanger } = require('blocks-react').Buttons;
const { AddIcon, BackIcon, CloseIcon } = require('blocks-react').Icons;

const ButtonTextIconExample = () => (
  <div className="blx-h-button-group">
    <ButtonPrimary
      text="Add something"
      onClick={() => {}}
      rightIcon={<AddIcon />}
    />
    <ButtonSecondary
      text="Go back"
      onClick={() => {}}
      leftIcon={<BackIcon />}
    />
    <ButtonDanger
      text="Exit"
      onClick={() => {}}
      rightIcon={<CloseIcon />}
    />
  </div>
);

export default ButtonTextIconExample;
