import React from "react"

import Layout from "../../components/layout"
import Header from "../../components/header"
import ExampleSection from "../../components/examples"
import Snippet from "../../components/snippet"

import ButtonBasicExample from "../../code_examples/ButtonBasicExample"
import ButtonTextIconExample from "../../code_examples/ButtonTextIconExample"
import ButtonIconExample from "../../code_examples/ButtonIconExample"
import ButtonLinkExample from "../../code_examples/ButtonLinkExample"
import ButtonLoadingExample from "../../code_examples/ButtonLoadingExample"

const ButtonsPage = () => (
  <Layout>
    <Header
      title="Buttons"
    >
      Buttons perform actions, like saving, cancelling or sending, or call users to those actions. They should not be used for navigation (“Back” or “Home”), unless the button’s action has navigational implications (“Save and close”). 
    </Header>
    <ExampleSection>
      <p className="blx-with-margin">
        A screen can have lots of buttons, but only two of them can be the primary button style. The rest must be secondary. Up to three buttons can be grouped together in a row or columns, but only the last one in the group can be primary.
      </p>
      <p className="blx-with-margin">
         Text on button labels should be written in sentence case: capitalize only the first word and any proper nouns. Button text should always start with a verb that describes the button’s action, and should be no longer than three words.
      </p>
      <p className="blx-with-margin">
        Only use danger buttons for actions that are destructive, irreversible, or are otherwise scary. If your user could lose time or work, consider this button. Don’t use them as cancel buttons.
      </p>

      <h5 className="blx-with-margin">Default</h5>
      <Snippet
        name="ButtonBasicExample"
        example={<ButtonBasicExample />}
      />

      <h5 className="blx-with-margin">Text and Icons</h5>
      <Snippet
        name="ButtonTextIconExample"
        example={<ButtonTextIconExample />}
      />

      <h5 className="blx-with-margin">Icon Buttons</h5>
      <Snippet
        name="ButtonIconExample"
        example={<ButtonIconExample />}
      />

      <h5 className="blx-with-margin">Link Buttons</h5>
      <Snippet
        name="ButtonLinkExample"
        example={<ButtonLinkExample />}
      />

      <h5 className="blx-with-margin">Loading Buttons</h5>
      <p className="blx-with-margin">
        Use loading buttons to combine animated loading indicators with the actions that invoked them.  These buttons can give users immediate feedback when they perform an action or inform users when they will be able to perform an action.
      </p>
      <p className="blx-with-margin">
        Loading buttons are disabled while the page loads or while the invoked action completes. They should indicate loading and success through a spinning (clockwise) loading indicator. 
      </p>
      <p className="blx-with-margin">
        The loaded success indicator should time out after 0.5s. The button text may also change to a success message which times out with the success checkmark. 
      </p>
      <Snippet
        name="ButtonLoadingExample"
        example={<ButtonLoadingExample />}
      />

    </ExampleSection>
  </Layout>
);

export default ButtonsPage;
