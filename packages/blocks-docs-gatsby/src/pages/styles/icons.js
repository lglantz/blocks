import React from "react"

import Layout from "../../components/layout"
import Header from "../../components/header"
import ExampleSection from "../../components/examples"
import Snippet from "../../components/snippet"

import IconBaseExample from "../../code_examples/IconBaseExample"
import IconArrowExample from "../../code_examples/IconArrowExample"
import IconNotificationExample from "../../code_examples/IconNotificationExample"


const IconPage = () => (
  <Layout>
    <Header
      title="Icons"
    >
      Some concepts and phrases an be expressed better with a simple graphic. Icons add a robust cohesion to a product’s aesthetic, and can be used as a control, noun, verb, adjective, and adverb. 
    </Header>
    <ExampleSection>
      <h5 className="blx-with-margin">Basic icons</h5>
      <Snippet
        name="IconBaseExample"
        example={<IconBaseExample />}
      />

      <h5 className="blx-with-margin">Arrow icons</h5>
      <Snippet
        name="IconArrowExample"
        example={<IconArrowExample />}
      />

      <h5 className="blx-with-margin">Notification icons</h5>
      <Snippet
        name="IconNotificationExample"
        example={<IconNotificationExample />}
      />
      
    </ExampleSection>
  </Layout>
);

export default IconPage;
