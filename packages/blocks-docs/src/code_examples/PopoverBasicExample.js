import React from "react"

import PopoverMenu from 'blocks-react/dist/dropdowns/PopoverMenu';

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

const PopoverBasicExample = () => (
  <div>
    <PopoverMenu
      text="More Actions"
      options={exampleOptions}
    />
  </div>
);

export default PopoverBasicExample;
