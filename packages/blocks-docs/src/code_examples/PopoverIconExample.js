import React from "react"

const { PopoverMenu, PopoverTrigger, DropdownItem } = require('blocks-react').Dropdowns;
const { MoreVerticalIcon, MoreIcon } = require('blocks-react').Icons;

const exampleOptions = [
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

const PopoverIconExample = props => (
  <React.Fragment>
    <PopoverMenu
      position="left"
      trigger={
        <PopoverTrigger>
          <MoreVerticalIcon />
        </PopoverTrigger>
      }
    >
      {
        exampleOptions.map((option, idx) => (
          <DropdownItem
            key={option.text}
            onClick={(e) => { console.log(option.text); }}
          >
            { option.text }
          </DropdownItem>
        ))
      }
    </PopoverMenu>
    <PopoverMenu
      disabled
      trigger={
        <PopoverTrigger>
          <MoreIcon />
        </PopoverTrigger>
      }
    >
      {
        exampleOptions.map((option, idx) => (
          <DropdownItem
            key={option.text}
            onClick={(e) => { console.log(option.text); }}
          >
            { option.text }
          </DropdownItem>
        ))
      }
    </PopoverMenu>
  </React.Fragment>
);

export default PopoverIconExample;
