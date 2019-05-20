import React from "react"

import Layout from "../../components/layout"
import Header from "../../components/header"
import ExampleSection from "../../components/examples"
import Snippet from "../../components/snippet"

import TabsHorizontalExample from "../../code_examples/TabsHorizontalExample"
import TabsVerticalExample from "../../code_examples/TabsVerticalExample"
import TabsDisabledExample from "../../code_examples/TabsDisabledExample"
import TabsNestedExample from "../../code_examples/TabsNestedExample"


const TabsPage = () => (
  <Layout>
    <Header
      title="Tabs"
    >
      Tabs are used to quickly navigate between sections of the application, usually within the same context. Tab labels are concise (maximum 3 words) and describe the contents of each section. 
    </Header>
    <ExampleSection>
      <p className="blx-with-margin">
        Avoid designs with 6 or more horizontal tabs particularly for mobile contexts. It should be easy to remember the relative placement and order of tabs. 
      </p>
      <h5 className="blx-with-margin">Horizontal Tabs</h5>
      <Snippet
        name="TabsHorizontalExample"
        example={<TabsHorizontalExample />}
      />

      <h5 className="blx-with-margin">Vertical Tabs</h5>
      <Snippet
        name="TabsVerticalExample"
        example={<TabsVerticalExample />}
      />

      <h5 className="blx-with-margin">Disabled Tabs</h5>
      <Snippet
        name="TabsDisabledExample"
        example={<TabsDisabledExample />}
      />

      <h4 className="blx-with-margin">Nested Tabs</h4>
      <p className="blx-with-margin">
        Vertical accordion tabs are collapsible. Multiple vertical accordion tabs can be expanded at the same time. The same is not true for default vertical tabs and their sub-tabs. Sub-tabs are only visible when a vertical tab is active. Sub-tabs can be used to quickly navigate or scroll to sections of a single page view rather than between multiple page views. 
      </p>

      <h5 className="blx-with-margin">Nested Tabs</h5>
      <Snippet
        name="TabsNestedExample"
        example={<TabsNestedExample />}
      />
    </ExampleSection>
  </Layout>
);

export default TabsPage;
