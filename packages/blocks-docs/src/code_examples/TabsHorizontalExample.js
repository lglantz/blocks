import React from "react"

const { Tabs } = require('blocks-react');

class TabsHorizontalExample extends React.Component {
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
      <Tabs>
        <Tabs.RadioItem
          key="horizontal-tabs-1"
          name="horizontal-tabs-example"
          value="tab1"
          checked={this.state.selectedTab === 'tab1'}
          onChange={(e) => this.setState({ selectedTab: e.target.value })}
          text="Tab 1"
        />
        <Tabs.RadioItem
          key="horizontal-tabs-2"
          name="horizontal-tabs-example"
          value="tab2"
          checked={this.state.selectedTab === 'tab2'}
          onChange={(e) => this.setState({ selectedTab: e.target.value })}
          text="Tab 2"
        />
        <Tabs.RadioItem
          key="horizontal-tabs-3"
          name="horizontal-tabs-example"
          value="tab3"
          checked={this.state.selectedTab === 'tab3'}
          onChange={(e) => this.setState({ selectedTab: e.target.value })}
          text="Tab 3"
        />
        <Tabs.RadioItem
          key="horizontal-tabs-4"
          name="horizontal-tabs-example"
          value="tab4"
          checked={this.state.selectedTab === 'tab4'}
          onChange={(e) => this.setState({ selectedTab: e.target.value })}
          text="Tab 4"
        />
      </Tabs>
    );
  }
}

export default TabsHorizontalExample;
