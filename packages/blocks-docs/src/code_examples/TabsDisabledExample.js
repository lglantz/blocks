import React from "react"

const { Tabs, RadioTabItem } = require('blocks-react').Tabs;

class TabsDisabledExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedTab: 'tab1'
    };
  }

  onChange(e) {
    this.setState({ checkedValue: e.target.value })
  }

  render() {
    return (
      <Tabs isDisabled>
        <RadioTabItem
          key="disabled-tabs-1"
          name="disabled-tabs-example"
          value="tab1"
          isChecked={this.state.selectedTab === 'tab1'}
          onChange={(e) => this.setState({ selectedTab: e.target.value })}
          text="Tab 1"
        />
        <RadioTabItem
          key="disabled-tabs-2"
          name="disabled-tabs-example"
          value="tab2"
          isChecked={this.state.selectedTab === 'tab2'}
          onChange={(e) => this.setState({ selectedTab: e.target.value })}
          text="Tab 2"
        />
        <RadioTabItem
          key="disabled-tabs-3"
          name="disabled-tabs-example"
          value="tab3"
          isChecked={this.state.selectedTab === 'tab3'}
          onChange={(e) => this.setState({ selectedTab: e.target.value })}
          text="Tab 3"
        />
        <RadioTabItem
          key="disabled-tabs-4"
          name="disabled-tabs-example"
          value="tab4"
          isChecked={this.state.selectedTab === 'tab4'}
          onChange={(e) => this.setState({ selectedTab: e.target.value })}
          text="Tab 4"
        />
      </Tabs>
    );
  }
}

export default TabsDisabledExample;
