import React from "react"

import PopoverMenu from 'blocks-react/dist/dropdowns/PopoverMenu';
import DownIcon from 'blocks-react/dist/icons/DownIcon';

const exampleOptions = [
  {
    text: 'Action',
    onClick: () => { }
  },
  {
    text: 'Long Named Disabled Action',
    disabled: true,
    onClick: () => { }
  },
  {
    text: 'Correct Action',
    onClick: () => { }
  },
  {
    text: 'Another Action',
    onClick: () => { }
  },
  {
    text: 'One More Action',
    onClick: () => { }
  }
];

const exampleOptions2 = [
  {
    text: 'Correct Action',
    onClick: () => { }
  },
  {
    text: 'Another Action',
    onClick: () => { }
  }
];

const PopoverFlipExample = () => (
  <div>
    <PopoverMenu
      text="Left menu"
      icon={<DownIcon />}
      position="left"
      options={exampleOptions}
      scrollable
    />
    <PopoverMenu
      text="Right menu"
      icon={<DownIcon />}
      position="right"
      options={exampleOptions2}
    />
  </div>
);

export default PopoverFlipExample;
