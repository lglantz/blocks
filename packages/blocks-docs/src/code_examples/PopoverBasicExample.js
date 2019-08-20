import React from "react"

const { PopoverMenu, PopoverTrigger, DropdownItem } = require('blocks-react').Dropdowns;
const { MoreIcon } = require('blocks-react').Icons;

const testOptions = [
  {
    text: 'Action'
  },
  {
    text: 'Long Named Disabled Action',
    disabled: true
  },
  {
    text: 'Correct Action'
  },
  {
    text: 'Another Action'
  },
  {
    text: 'One More Action'
  }
];

const PopoverBasicExample = props => (
  <PopoverMenu
    scrollable
    trigger={
      <PopoverTrigger>
        <p className="blx-h5">More Actions</p>
        <MoreIcon />
      </PopoverTrigger>
    }
  >
    {
      testOptions.map((option, idx) => (
        <DropdownItem
          key={option.text}
          onClick={(e) => { console.log(option.text); }}
        >
          { option.text }
        </DropdownItem>
      ))
    }
  </PopoverMenu>
);

export default PopoverBasicExample;
