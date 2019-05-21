import React from "react"

const { PopoverMenu } = require('blocks-react').Dropdowns;
const { DownIcon } = require('blocks-react').Icons;

const exampleOptions = [
  {
    text: 'Action',
    onClick: () => {}
  },
  {
    text: 'Long Named Disabled Action',
    disabled: true,
    onClick: () => {}
  },
  {
    text: 'Correct Action',
    onClick: () => {}
  },
  {
    text: 'Another Action',
    onClick: () => {}
  },
  {
    text: 'One More Action',
    onClick: () => {}
  }
];

const PopoverFlipExample = () => (
  <div>
    <PopoverMenu
      text="Left menu"
      icon={<DownIcon />}
      isLeft={true}
      options={exampleOptions}
    />
  </div>
);

export default PopoverFlipExample;
