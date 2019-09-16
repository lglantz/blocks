import React from "react"

const { Tooltip } = require('blocks-react');
const { HelpIcon } = require('blocks-react').Icons;

const TooltipBasicExample = () => (
  <div>
    <Tooltip
      position="left"
      lightBg
      text="Left tooltip"
      trigger={<HelpIcon />}
    />
    <Tooltip
      position="top"
      title="Top tooltip"
      text="In the late summer of that year we lived in a house in a village that looked across the river and the plain. In the late summer of that year we lived in a house in a village that"
      trigger={<HelpIcon />}
    />
    <Tooltip
      position="bottom"
      text="Bottom tooltip"
      trigger={<HelpIcon />}
    />
    <Tooltip
      position="right"
      lightBg
      text="Right tooltip right tooltip right tooltip"
      trigger={<HelpIcon />}
    />
    <Tooltip
      position="left"
      text={<span>test with <a href="https://blocks.cbrebuild.com/">link</a></span>}
      trigger={<HelpIcon />}
    />
  </div>
);

export default TooltipBasicExample;
