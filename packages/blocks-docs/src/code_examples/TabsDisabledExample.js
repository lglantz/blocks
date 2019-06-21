import React from "react"

const { Tabs } = require('blocks-react');

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
      <Tabs disabled>
        <Tabs.RadioItem
          key="disabled-tabs-1"
          name="disabled-tabs-example"
          value="tab1"
          checked={this.state.selectedTab === 'tab1'}
          onChange={(e) => this.setState({ selectedTab: e.target.value })}
          text="Tab 1"
        />
        <Tabs.RadioItem
          key="disabled-tabs-2"
          name="disabled-tabs-example"
          value="tab2"
          checked={this.state.selectedTab === 'tab2'}
          onChange={(e) => this.setState({ selectedTab: e.target.value })}
          text="Tab 2"
        />
        <Tabs.RadioItem
          key="disabled-tabs-3"
          name="disabled-tabs-example"
          value="tab3"
          checked={this.state.selectedTab === 'tab3'}
          onChange={(e) => this.setState({ selectedTab: e.target.value })}
          text="Tab 3"
        />
        <Tabs.RadioItem
          key="disabled-tabs-4"
          name="disabled-tabs-example"
          value="tab4"
          checked={this.state.selectedTab === 'tab4'}
          onChange={(e) => this.setState({ selectedTab: e.target.value })}
          text="Tab 4"
        />
      </Tabs>
    );
  }
}

export default TabsDisabledExample;
