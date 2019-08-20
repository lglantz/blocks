import React from "react"

const { Dropdown, DropdownTrigger, DropdownItem } = require('blocks-react').Dropdowns;

class DropdownBasicExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedIdx: -1
    };

    this.testOptions = [
      {
        text: 'One Option'
      },
      {
        text: 'Another option'
      },
      {
        text: 'Best option'
      },
      {
        text: 'Different option'
      },
      {
        text: 'Longer named option that should overflow'
      }
    ];
  }

  render() {
    return (
      <Dropdown
        scrollable
        trigger={
          <DropdownTrigger>
            { this.state.selectedIdx >= 0 ?
                this.testOptions[this.state.selectedIdx].text :
                null
            }
          </DropdownTrigger>
        }
      >
        {
          this.testOptions.map((option, idx) => (
            <DropdownItem
              key={option.text}
              selected={idx === this.state.selectedIdx}
              onClick={(e) => this.setState({ selectedIdx: idx })}
            >
              { option.text }
            </DropdownItem>
          ))
        }
      </Dropdown>
    );
  }
}

export default DropdownBasicExample;
