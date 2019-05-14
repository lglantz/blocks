import React from "react"

import Layout from "../../components/layout"
import Header from "../../components/header"
import ExampleSection from "../../components/examples"
import Snippet from "../../components/snippet"

import ModalExample from "../../code_examples/ModalExample"
import ModalActionExample from "../../code_examples/ModalActionExample"


const ModalsPage = () => (
  <Layout>
    <Header
      title="Modals"
    >
      Modal examples
    </Header>
    <ExampleSection>
      <h5 className="blx-with-margin">Basic modal</h5>
      <Snippet
        name="ModalExample"
        example={<ModalExample />}
      />

      <h5 className="blx-with-margin">Action modal</h5>
      <Snippet
        name="ModalActionExample"
        example={<ModalActionExample />}
      />
    </ExampleSection>
  </Layout>
);

export default ModalsPage;
