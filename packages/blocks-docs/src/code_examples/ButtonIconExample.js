import React from "react"

const { ButtonPrimary, ButtonSecondary, ButtonDanger, ButtonDark } = require('blocks-react').Buttons;
const { UpIcon, MoreIcon, SuccessIcon, CloseIcon, AddIcon, BackIcon, NextIcon, DownIcon } = require('blocks-react').Icons;

const ButtonIconExample = () => (
  <div className="blx-h-button-group">
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
    <ButtonDark
      onClick={() => {}}
      icon={<CloseIcon fill="var(--secondary-00)" />}
    />
    <ButtonPrimary
      disabled
      onClick={() => {}}
      icon={<AddIcon />}
    />
    <ButtonSecondary
      disabled
      onClick={() => {}}
      icon={<BackIcon />}
    />
    <ButtonDanger
      disabled
      onClick={() => {}}
      icon={<NextIcon />}
    />
    <ButtonDark
      disabled
      onClick={() => {}}
      icon={<DownIcon fill="var(--secondary-00)" />}
    />
  </div>
);

export default ButtonIconExample;
