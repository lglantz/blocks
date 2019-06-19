import React from "react"

const { Button } = require('blocks-react').Buttons;
const { UpIcon, MoreIcon, SuccessIcon, CloseIcon, AddIcon, BackIcon, NextIcon, DownIcon } = require('blocks-react').Icons;

const ButtonIconExample = () => (
  <div className="blx-h-button-group">
    <Button color="primary" type="icon" onClick={() => {}}>
      <SuccessIcon fill="var(--secondary-00)"/>
    </Button>
    <Button color="secondary" type="icon" onClick={() => {}}>
      <MoreIcon />
    </Button>
    <Button color="danger" type="icon" onClick={() => {}}>
      <UpIcon fill="var(--secondary-00)" />
    </Button>
    <Button color="dark" type="icon" onClick={() => {}}>
      <CloseIcon fill="var(--secondary-00)" />
    </Button>
    <Button color="primary" type="icon" disabled={true} onClick={() => {}}>
      <SuccessIcon fill="var(--secondary-00)" />
    </Button>
  </div>
);

export default ButtonIconExample;
