import React from "react"

import Layout from "../../components/layout"
import Header from "../../components/header"
import ExampleSection from "../../components/examples"
import Snippet from "../../components/snippet"

import DropdownBasicExample from "../../code_examples/DropdownBasicExample"
import DropdownIconExample from "../../code_examples/DropdownIconExample"
import DropdownDisabledExample from "../../code_examples/DropdownDisabledExample"


const DropdownsPage = () => (
  <Layout>
    <Header
      title="Dropdowns"
    >
      An input that allows users to make a single selection from a pre-defined list of familar and/or quantitative options. Use radio buttons instead when the user needs to scan, compare, and evaluate multiple similar and/or qualitative options.
    </Header>
    <ExampleSection>
      <ul>
        <li>Sort the list in a logical order. Put the most popular choice at the top.</li>
        <li>A dropdown should have no fewer than 2 options.</li>
        <li>Lists that are longer than 12 options should allow autofill.</li>
      </ul>

      <h5 className="blx-with-margin">Default</h5>
      <Snippet
        name="DropdownBasicExample"
        example={<DropdownBasicExample />}
      />

      <h5 className="blx-with-margin">With Icon and Validation</h5>
      <Snippet
        name="DropdownIconExample"
        example={<DropdownIconExample />}
      />

      <h5 className="blx-with-margin">Disabled</h5>
      <Snippet
        name="DropdownDisabledExample"
        example={<DropdownDisabledExample />}
      />
    </ExampleSection>
  </Layout>
);

export default DropdownsPage;



