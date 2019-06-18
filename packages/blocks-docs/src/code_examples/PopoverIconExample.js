import React from "react"

const { PopoverMenu } = require('blocks-react').Dropdowns;
const { MoreVerticalIcon, MoreIcon } = require('blocks-react').Icons;

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

const PopoverIconExample = () => (
  <div>
    <PopoverMenu
      icon={<MoreVerticalIcon />}
      options={exampleOptions}
    />
    <PopoverMenu
      icon={<MoreIcon />}
      options={exampleOptions}
      isDisabled
    />
  </div>
);

export default PopoverIconExample;
