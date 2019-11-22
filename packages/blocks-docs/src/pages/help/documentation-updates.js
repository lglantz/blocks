import React from "react"

import Layout from "../../components/layout"
import Header from "../../components/header"

const WritingGuidelinesPage = () => (
  <Layout>
    <Header title="How to update the docs"></Header>
    <div className="l-flex-vertical doc-section">
      <div className="help-text-container">
        <h2 className="blx-h3">Everyone</h2>
        <p className="blx-with-margin">
          <ul className="help-text-list">
            <li>Follow the <a href="/help/writing">Blocks Writing Guidelines</a></li>
            <li>
              Documentation updates are managed through Clubhouse and
              prioritized by PMs just like other work.
            </li>
            <li>
              The guiding principle is "ease of contribution". For now, it’s ok
              to have blank sections to be filled in later.
            </li>
          </ul>
        </p>
        <h2 className="blx-h3">Design</h2>
        <p className="blx-with-margin">TBD</p>
        <h2 className="blx-h3">Engineering</h2>
        <ul className="help-text-list">
          <li>
            Engineers have authority to update eng-related sections of the docs
            without design input. Updates to design sections of docs need to get
            design feedback.
          </li>
          <li>
            Updates to the docs are made by pull request. Getting a single
            review and approval is enough, Blocks team members are allowed to
            make documentation changes without review.
          </li>
          <li>
            Every change made to components needs to be reflected in the eng
            section of the docs before the change is merged. This ensures
            components are tested and documentation and implementation are in
            sync.
          </li>
          <li>
            “Every” significant variant of a component should have its own
            interactive example. (Use your judgement.)
            <ul className="help-text-list">
              <li>This ensures complete documentation and easier testing.</li>
              <li>If this becomes overwhelming, we’ll reevaluate.</li>
            </ul>
          </li>
          <li>
            Components that are “in progress” can live in a “Experimental”
            section. Here, incomplete work is especially ok.
          </li>
        </ul>
      </div>
      <em>Last Updated: November 2019</em>
    </div>
  </Layout>
)

export default WritingGuidelinesPage
