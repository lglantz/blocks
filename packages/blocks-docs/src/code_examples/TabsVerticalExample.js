import React from "react"
import Tabs from 'blocks-react/dist/tabs/Tabs';
import LinkTabItem from 'blocks-react/dist/tabs/LinkTabItem';

const TabsVerticalExample = () => (
  <Tabs vertical>
    <LinkTabItem
      key="vertical-tabs-1"
      name="vertical-tabs-example"
      href="/"
      text="Link Tab 1"
    />
    <LinkTabItem
      key="vertical-tabs-2"
      name="vertical-tabs-example"
      href="/patterns/tabs"
      active={true}
      text="Link Tab 2"
    />
    <LinkTabItem
      key="vertical-tabs-3"
      name="vertical-tabs-example"
      href="/"
      text="Link Tab 3"
    />
    <LinkTabItem
      key="vertical-tabs-4"
      name="vertical-tabs-example"
      href="/"
      text="Link Tab 4"
    />
  </Tabs>
);

export default TabsVerticalExample;
