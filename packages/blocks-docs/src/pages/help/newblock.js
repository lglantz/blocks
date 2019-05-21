import React from "react"

import Layout from "../../components/layout"
import Header from "../../components/header"

import Flowchart from "../../components/svgs/flowchart"

const NewBlockGuidelinesPage = () => (
  <Layout>
    <Header
      title="New Block Flowchart"
    >
      You have a great idea for a component or you’ve already built one and you think it would fit perfectly in the Blocks library. Awesome! Use this handy flowchart to see how to proceed.
    </Header>
    <div className="l-flex-vertical doc-section">
      <Flowchart />
    </div>
  </Layout>
);

export default NewBlockGuidelinesPage;
