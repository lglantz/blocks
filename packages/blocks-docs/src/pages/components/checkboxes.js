import React from "react"

import Layout from "../../components/layout"
import Header from "../../components/header"
import ExampleSection from "../../components/examples"
import Snippet from "../../components/snippet"

import CheckboxBasicExample from "../../code_examples/CheckboxBasicExample"

const CheckboxesPage = () => (
  <Layout>
    <Header
      title="Checkboxes"
    >
      Inputs used to multi-select options from a list where 0 or more items can be selected. 
    </Header>
    <ExampleSection>
      <Snippet
        name="CheckboxBasicExample"
        example={<CheckboxBasicExample />}
      />
    </ExampleSection>
  </Layout>
);

export default CheckboxesPage;
