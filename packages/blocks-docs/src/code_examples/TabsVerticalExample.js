import React from "react"

const { Tabs } = require('blocks-react');

const TabsVerticalExample = () => (
  <Tabs vertical>
    <Tabs.LinkItem
      key="vertical-tabs-1"
      name="vertical-tabs-example"
      href="/"
      text="Link Tab 1"
    />
    <Tabs.LinkItem
      key="vertical-tabs-2"
      name="vertical-tabs-example"
      href="/patterns/tabs"
      active={true}
      text="Link Tab 2"
    />
    <Tabs.LinkItem
      key="vertical-tabs-3"
      name="vertical-tabs-example"
      href="/"
      text="Link Tab 3"
    />
    <Tabs.LinkItem
      key="vertical-tabs-4"
      name="vertical-tabs-example"
      href="/"
      text="Link Tab 4"
    />
  </Tabs>
);

export default TabsVerticalExample;
