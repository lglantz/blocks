import React from "react"

import Layout from "../../components/layout"
import Header from "../../components/header"
import ExampleSection from "../../components/examples"
import Snippet from "../../components/snippet"

import PopoverBasicExample from "../../code_examples/PopoverBasicExample"
import PopoverFlipExample from "../../code_examples/PopoverFlipExample"
import PopoverIconExample from "../../code_examples/PopoverIconExample"

const PopoversPage = () => (
  <Layout>
    <Header
      title="Popovers"
    >
      Popovers are inline dropdown menus that are revealed when the user clicks on a button. Unlike a dropdown, which lets the user select an option from a list, a popover contains a list of actions. Otherwise, they look and behave just like dropdown menus.
    </Header>
    <ExampleSection>
      <ul>
        <li>Sort the list in a logical order. Put the most popular choice at the top.</li>
        <li>A popover should have no fewer than 2 options. If there’s only one option, use a button instead.</li>
        <li>If a popover has more than ten items, it’s probably too long. Think about refactoring your design.</li>
        <li>When a popover is open, the button it came out of should be in its Active state.</li>
      </ul>

      <h4 className="blx-with-margin">Positioning</h4>
      <p className="blx-with-margin">
        Popovers like to be centered with the button that they come out of. But if there isn’t room on screen, they reposition themselves to be fully visible.
      </p>

      <h5 className="blx-with-margin">Default</h5>
      <Snippet
        name="PopoverBasicExample"
        example={<PopoverBasicExample />}
      />

      <h5 className="blx-with-margin">Flipped menu</h5>
      <Snippet
        name="PopoverFlipExample"
        example={<PopoverFlipExample />}
      />

      <h5 className="blx-with-margin">Icon only</h5>
      <Snippet
        name="PopoverIconExample"
        example={<PopoverIconExample />}
      />
    </ExampleSection>
  </Layout>
);

export default PopoversPage;
