import React from "react"

import Layout from "../../components/layout"
import Header from "../../components/header"
import ExampleSection from "../../components/examples"
import Snippet from "../../components/snippet"

import LinkExample from "../../code_examples/LinkExample"


const LinksPage = () => (
  <Layout>
    <Header
      title="Links"
    >
      Links lead the user away from their current context .
    </Header>
    <ExampleSection>
      <Snippet
        name="LinkExample"
        example={<LinkExample />}
      />
    </ExampleSection>
  </Layout>
);

export default LinksPage;
