import React from "react"

import Layout from "../../components/layout"
import Header from "../../components/header"
import ExampleSection from "../../components/examples"
import Snippet from "../../components/snippet"

import ToggleBasicExample from "../../code_examples/ToggleBasicExample"

const TogglesPage = () => (
  <Layout>
    <Header
      title="Toggles"
    >
      A toggle is a horizontal set of two or more buttons that affect an object, state, or view. Only one toggle button in a set should be active at any given time.
    </Header>
    <ExampleSection>
      <p className="blx-with-margin">
        The first option in a toggle should be the default selection based on usage. Toggles may be used as switches to turn features, modes, or other functionality on and off.
      </p>
      <Snippet
        name="ToggleBasicExample"
        example={<ToggleBasicExample />}
      />
    </ExampleSection>
  </Layout>
);

export default TogglesPage;
