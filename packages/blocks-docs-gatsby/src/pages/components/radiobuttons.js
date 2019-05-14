import React from "react"

import Layout from "../../components/layout"
import Header from "../../components/header"
import ExampleSection from "../../components/examples"
import Snippet from "../../components/snippet"

import RadioBasicExample from "../../code_examples/RadioBasicExample"

const RadioButtonsPage = () => (
  <Layout>
    <Header
      title="Radio Buttons"
    >
      Buttons that allow users to make a single selection from a list of similar and/or qualitative options. Use dropdowns instead when the user needs to select from a much longer list of familiar and/or quantitative options.
    </Header>
    <ExampleSection>
      <Snippet
        name="RadioBasicExample"
        example={<RadioBasicExample />}
      />
      <p className="blx-with-margin">
        Radio buttons are optimal for scenarios where the User is allowed to select only one option of several.
      </p>
      <p className="blx-with-margin">
        The optimal form is round with a fill to indicate “selected” and empty to indicate “unselected”.
      </p>
      <p className="blx-with-margin">
        This control is not ideal for scenarios with Boolean values, such as “yes” and “no” or “true” and “false”; or where a User can select one, none or multiple options from a list.
      </p>
    </ExampleSection>
  </Layout>
);

export default RadioButtonsPage;
