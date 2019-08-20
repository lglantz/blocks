import React from "react"

const { PopoverMenu, PopoverTrigger, DropdownItem } = require('blocks-react').Dropdowns;
const { DownIcon } = require('blocks-react').Icons;

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

const testOptions2 = [
  {
    text: 'Correct Action'
  },
  {
    text: 'Another Action'
  }
];

const PopoverFlipExample = props => (
  <React.Fragment>
    <PopoverMenu
      scrollable
      position="left"
      trigger={
        <PopoverTrigger>
          <p className="blx-h5">Left Menu</p>
          <DownIcon />
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
    <PopoverMenu
      scrollable
      position="right"
      trigger={
        <PopoverTrigger>
          <p className="blx-h5">Right Menu</p>
          <DownIcon />
        </PopoverTrigger>
      }
    >
      {
        testOptions2.map((option, idx) => (
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

export default PopoverFlipExample;
