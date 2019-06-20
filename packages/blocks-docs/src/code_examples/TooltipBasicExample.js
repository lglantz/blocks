import React from "react"

const { Tooltip, TooltipTrigger, TooltipContent } = require('blocks-react').Tooltip;
const { Button } = require('blocks-react').Buttons;
const { HelpIcon } = require('blocks-react').Icons;

const TooltipBasicExample = () => (
  <div>
    <Tooltip>
      <TooltipTrigger>
        <HelpIcon />
      </TooltipTrigger>
      <TooltipContent
        position="left"
        lightBg
      >
        Left tooltip
      </TooltipContent>
    </Tooltip>

    <Tooltip>
      <TooltipTrigger>
        <HelpIcon />
      </TooltipTrigger>
      <TooltipContent
        position="top"
        title="Top tooltip"
      >
        In the late summer of that year we lived in a house in a village that looked across the river and the plain. In the late summer of that year we lived in a house in a village that
      </TooltipContent>
    </Tooltip>

    <Tooltip>
      <TooltipTrigger>
        <HelpIcon />
      </TooltipTrigger>
      <TooltipContent
        position="bottom"
      >
        Bottom tooltip
      </TooltipContent>
    </Tooltip>

    <Tooltip>
      <TooltipTrigger>
        <HelpIcon />
      </TooltipTrigger>
      <TooltipContent
        position="right"
        lightBg
      >
        Right tooltip
      </TooltipContent>
    </Tooltip>

    <Tooltip>
      <TooltipTrigger>
        <HelpIcon />
      </TooltipTrigger>
      <TooltipContent
        position="right"
      >
        <Button color="secondary" onClick={() => {}}>
          Click me
        </Button>
      </TooltipContent>
    </Tooltip>
  </div>
);

export default TooltipBasicExample;
