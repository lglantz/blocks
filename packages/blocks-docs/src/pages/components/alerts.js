import React from "react"

import Layout from "../../components/layout"
import Header from "../../components/header"
import ExampleSection from "../../components/examples"
import Snippet from "../../components/snippet"

import AlertSuccessExample from "../../code_examples/AlertSuccessExample"
import AlertInformationalExample from "../../code_examples/AlertInformationalExample"
import AlertWarningExample from "../../code_examples/AlertWarningExample"
import AlertErrorExample from "../../code_examples/AlertErrorExample"

const AlertsPage = () => (
  <Layout>
    <Header
      title="Alerts"
    >
      Feedback indicators that direct the attention of the user to a change in the state of the application.
    </Header>
    <ExampleSection>
      <p className="blx-with-margin">
        Banners communicate one of the following states: success, information, warning, or error.
      </p>
      
      <h5 className="blx-with-margin">Success Alert</h5>
      <Snippet
        name="AlertSuccessExample"
        example={<AlertSuccessExample />}
      />

      <h5 className="blx-with-margin">Informational Alert</h5>
      <Snippet
        name="AlertInformationalExample"
        example={<AlertInformationalExample />}
      />

      <h5 className="blx-with-margin">Warning Alert</h5>
      <Snippet
        name="AlertWarningExample"
        example={<AlertWarningExample />}
      />

      <h5 className="blx-with-margin">Error Alert</h5>
      <Snippet
        name="AlertErrorExample"
        example={<AlertErrorExample />}
      />

      <h5 className="blx-with-margin">Placement</h5>
      <p className="blx-with-margin">
        Banners show at the top of the page or section they apply to on top of (z-wise) other content on the page. Try to avoid covering critical content / actions.
      </p>
      <h5 className="blx-with-margin">Content & Timing</h5>
      <p className="blx-with-margin">
        Titles and text should be concise. Errors and warnings should be actionable if applicable. Let the user know how to remedy the situation. Some banners may be dismissable and/or have additional buttons or in-line links for secondary actions. Banners will time out after 2 seconds or until they are dismissed (optional via “x”). There is no need to have duplicate close actions.  
      </p>
    </ExampleSection>
  </Layout>
);

export default AlertsPage;
