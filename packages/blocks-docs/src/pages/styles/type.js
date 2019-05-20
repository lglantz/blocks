import React from "react"

import Layout from "../../components/layout"
import Header from "../../components/header"
import ExampleSection from "../../components/examples"
import Snippet from "../../components/snippet"

import TypeHeadlineExample from "../../code_examples/TypeHeadlineExample"
import TypeExample from "../../code_examples/TypeExample"

const TypePage = () => (
  <Layout>
    <Header
      title="Type"
    >
      Rules about the appearance of text in relation to other text.
    </Header>
    <ExampleSection>
      <h5 className="blx-with-margin">Headlines</h5>
      <Snippet
        name="TypeHeadlineExample"
        example={<TypeHeadlineExample />}
      />

      <h5 className="blx-with-margin">Text</h5>
      <Snippet
        name="TypeExample"
        example={<TypeExample />}
      />
    </ExampleSection>
  </Layout>
);

export default TypePage;