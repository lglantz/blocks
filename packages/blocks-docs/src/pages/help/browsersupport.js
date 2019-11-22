import React from "react"

import Layout from "../../components/layout"
import Header from "../../components/header"

const WritingGuidelinesPage = () => (
  <Layout>
    <Header title="Browser Support"></Header>
    <div className="l-flex-vertical doc-section">
      <div className="help-text-container">
        <h2 className="blx-h3" id="heading-current">
          Current browser support
        </h2>
        <p className="blx-with-margin">
          Currently, BlocksDS is only tested in and actively supports one
          browser:
        </p>
        <p className="blx-with-margin"></p>
        <ul className="help-text-list" aria-labelledby="heading-current">
          <li>Latest version of Chrome desktop</li>
        </ul>

        <h2 className="blx-h3" id="heading-future">
          Future browser support
        </h2>
        <p className="blx-with-margin">
          At some point in the future, BlocksDS will support the following
          browsers:
        </p>
        <ul className="help-text-list" aria-labelledby="heading-future">
          <li>Latest version of Chrome desktop</li>
          <li>Internet Explorer 11</li>
          <li>Latest Safari on iOS</li>
        </ul>
      </div>
      <em>Last Updated: November 2019</em>
    </div>
  </Layout>
)

export default WritingGuidelinesPage
