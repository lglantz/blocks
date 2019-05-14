import React from "react"

import Layout from "../../components/layout"
import Header from "../../components/header"
import ExampleSection from "../../components/examples"
import Snippet from "../../components/snippet"

import TooltipBasicExample from "../../code_examples/TooltipBasicExample"

const TooltipsPage = () => (
  <Layout>
    <Header
      title="Tooltips"
    >
      Tooltips are brief floating messages intended to help a user understand a specific item or feature.
    </Header>
    <ExampleSection>
      <ul>
        <li>
          Tooltips typically are triggered by hovering/focusing or by clicking. This must be specified for each instance. Triggering by hover should be limited as this implementation doesn’t work for touch devices.
        </li>
        <li>
          Tooltips that are triggered by hover or focus should disappear when focus shifts or the user mouses away from the target.
        </li>
        <li>
          Tooltips that are triggered by clicking should disappear when the user clicks away from the tooltip.
        </li>
        <li>
          Tooltips should be brief. They should not contain rich information like images or buttons.
        </li>
      </ul>
      <h4 className="blx-with-margin">Placement</h4>
      <p className="blx-with-margin">Tooltips should be centered on their target. If the tooltip is cut off by the edge of the viewport, flip its orientation. </p>
    
      <h5 className="blx-with-margin">Default</h5>
      <Snippet
        name="TooltipBasicExample"
        example={<TooltipBasicExample />}
      />
    </ExampleSection>
  </Layout>
);

export default TooltipsPage;
