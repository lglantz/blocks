import React from "react"

const { Tooltip } = require('blocks-react');
const { Button } = require('blocks-react').Buttons;
const { HelpIcon } = require('blocks-react').Icons;

const TooltipBasicExample = () => (
  <div>
    <Tooltip.Wrapper>
      <Tooltip.Trigger>
        <HelpIcon />
      </Tooltip.Trigger>
      <Tooltip.Content
        position="left"
        lightBg
      >
        Left tooltip
      </Tooltip.Content>
    </Tooltip.Wrapper>

    <Tooltip.Wrapper>
      <Tooltip.Trigger>
        <HelpIcon />
      </Tooltip.Trigger>
      <Tooltip.Content
        position="top"
        title="Top tooltip"
      >
        In the late summer of that year we lived in a house in a village that looked across the river and the plain. In the late summer of that year we lived in a house in a village that
      </Tooltip.Content>
    </Tooltip.Wrapper>

    <Tooltip.Wrapper>
      <Tooltip.Trigger>
        <HelpIcon />
      </Tooltip.Trigger>
      <Tooltip.Content
        position="bottom"
      >
        Bottom tooltip
      </Tooltip.Content>
    </Tooltip.Wrapper>

    <Tooltip.Wrapper>
      <Tooltip.Trigger>
        <HelpIcon />
      </Tooltip.Trigger>
      <Tooltip.Content
        position="right"
        lightBg
      >
        Right tooltip
      </Tooltip.Content>
    </Tooltip.Wrapper>

    <Tooltip.Wrapper>
      <Tooltip.Trigger>
        <HelpIcon />
      </Tooltip.Trigger>
      <Tooltip.Content
        position="right"
      >
        <Button color="secondary" onClick={() => {}}>
          Click me
        </Button>
      </Tooltip.Content>
    </Tooltip.Wrapper>
  </div>
);

export default TooltipBasicExample;
