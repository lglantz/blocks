import React from "react"

import PopoverMenu from 'blocks-react/dist/dropdowns/PopoverMenu';
import MoreVerticalIcon from 'blocks-react/dist/icons/MoreVerticalIcon';
import MoreIcon from 'blocks-react/dist/icons/MoreIcon';

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

const PopoverIconExample = () => (
  <div>
    <PopoverMenu
      icon={<MoreVerticalIcon />}
      options={exampleOptions}
    />
    <PopoverMenu
      icon={<MoreIcon />}
      options={exampleOptions}
      disabled
    />
  </div>
);

export default PopoverIconExample;
