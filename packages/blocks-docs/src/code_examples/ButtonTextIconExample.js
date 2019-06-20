import React from "react"

const { Button } = require('blocks-react').Buttons;
const { AddIcon, BackIcon, CloseIcon, NextIcon } = require('blocks-react').Icons;

const ButtonTextIconExample = () => (
  <div className="blx-v-button-group">
    <Button color="primary" onClick={() => {}}>
      <span>Add</span>
      <AddIcon fill="var(--secondary-00)" />
    </Button>
    <Button color="secondary" onClick={() => {}}>
      <BackIcon />
      <span>Back</span>
    </Button>
    <Button color="danger" onClick={() => {}}>
      <span>Exit</span>
      <CloseIcon fill="var(--secondary-00)" />
    </Button>
    <Button color="dark" onClick={() => {}}>
      <CloseIcon fill="var(--secondary-00)" />
      <span>Exit</span>
    </Button>
    <Button color="primary" disabled={true} onClick={() => {}}>
      <span>Next</span>
      <NextIcon fill="var(--secondary-00)" />
    </Button>
  </div>
);

export default ButtonTextIconExample;
