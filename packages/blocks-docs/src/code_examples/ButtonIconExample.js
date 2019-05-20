import React from "react"

const { ButtonPrimary, ButtonSecondary, ButtonDanger } = require('blocks-react').Buttons;
const { UpIcon, MoreIcon, SuccessIcon } = require('blocks-react').Icons;

const ButtonIconExample = () => (
  <div className="blx-v-button-group">
    <ButtonPrimary
      onClick={() => {}}
      icon={<SuccessIcon />}
    />
    <ButtonSecondary
      onClick={() => {}}
      icon={<MoreIcon />}
    />
    <ButtonDanger
      onClick={() => {}}
      icon={<UpIcon />}
    />
  </div>
);

export default ButtonIconExample;
