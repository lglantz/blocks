import React from "react"

const { ButtonPrimary, ButtonSecondary, ButtonDanger, ButtonDark } = require('blocks-react').Buttons;
const { AddIcon, BackIcon, CloseIcon, ErrorIcon } = require('blocks-react').Icons;
const { Colors } = require('blocks-base');

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
      text="Oh no"
      onClick={() => {}}
      rightIcon={<ErrorIcon />}
    />
    <ButtonDark
      text="Exit"
      onClick={() => {}}
      leftIcon={<CloseIcon fill={Colors.SECONDARY_00} />}
    />
  </div>
);

export default ButtonTextIconExample;
