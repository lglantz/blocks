import React from "react"

import DocsIcon from "../components/svgs/docs-icon"
import TalksIcon from "../components/svgs/talks-icon"
import ToolboxIcon from "../components/svgs/toolbox-icon"

const MainContent = () => (
  <section className="design-page-section">
    <div className="l-flex-vertical doc-section">
      <div className="l-flex-horizontal">
        <div className="blocks-equation">
          <TalksIcon />
          <h3 className="blx-with-margin">Talks</h3>
          <p className="blx-with-margin">
            Shared approach, language, and communication between design, engineering, and product teams
          </p>
        </div>
        <div className="blocks-equation">
          <DocsIcon />
          <h3 className="blx-with-margin">Docs</h3>
          <p className="blx-with-margin">
            Documentation describing how products should look and feel, proper use cases for patterns, editorial and implementation guidelines, etc
          </p>
        </div>
        <div className="blocks-equation">
          <ToolboxIcon />
          <h3 className="blx-with-margin">Toolbox</h3>
          <p className="blx-with-margin">
            Library of reusable UI and code components that are used to solve a variety of design problems and to prevent inconsistent user experiences
          </p>
        </div>
      </div>
    </div>
    <div className="doc-section">
      <h2 className="blx-with-margin">Blocks Principles</h2>
      <div className="doc-subsection">
        <h4 className="blx-with-margin">Product Principle (n.) – an accepted rule of action or conduct to guide the product process. </h4>
      </div>
      <div className="doc-subsection">
        <p className="blx-with-margin">Our product principles are the glue that holds our products together. They apply to the way we approach product design and engineering and help guide individual and team decision making. </p>
      </div>
    </div>
    <div className="doc-section">
      <div className="doc-subsection">
        <h3 className="blx-with-margin">Alignment over Assumption</h3>
      </div>
      <div className="doc-subsection">
        <h4 className="blx-with-margin">Everyone is different and no one is omniscient. Take some time to really understand your collaborators and your users before drawing any conclusions. Good products prioritize effective communication.</h4>
      </div>
      <ul className="principle-list">
        <li>
          Listen to new ideas with an open mind until you have mutual understanding. 
        </li>
        <li>
          Don’t automatically move forward with an idea backed by the majority. Connection is more important than consensus.
        </li>
        <li>
          Ask yourself:
          <ul>
            <li>
              “Whom else could I include?” 
            </li>
            <li>
              “What don’t I understand?” 
            </li>
            <li>
              “Can I state others’ ideas in my own words?”
            </li>
          </ul>
        </li>
      </ul>

      <div className="principle-insight-box">
        <h5 className="blx-with-margin">Principle Insight</h5>
        <p className="blx-with-margin">When you present a new solution to a collaborator or user, give some context. Help others understand what conversations or research went into the solution.</p>
      </div>
    </div>

    <div className="doc-section">
      <div className="doc-subsection">
        <h3 className="blx-with-margin">Confirmation over Creation</h3>
      </div>
      <div className="doc-subsection">
        <h4 className="blx-with-margin">Sometimes you have to make decisions for your team, your product, or your users, about things you don’t know that much about. That’s ok! No one is an expert in everything. But you can do your homework ahead of time.</h4>
      </div>
      <div className="doc-subsection">
        <h4 className="blx-with-margin">Be an informed advisor.</h4>
      </div>

      <ul className="principle-list">
        <li>
          Never present a blank slate; do the heavy lifting and present a complete solution to the problem at hand.
        </li>
        <li>
          Reduce the number of decisions someone has to make in order to complete a task.
        </li>
        <li>
          Ask specific, contextual questions to get better feedback.
        </li>
      </ul>

      <div className="principle-insight-box">
        <h5 className="blx-with-margin">Principle Insight</h5>
        <p className="blx-with-margin">Ask specific, contextual questions to get better feedback.</p>
      </div>
    </div>

    <div className="doc-section">
      <div className="doc-subsection">
        <h3 className="blx-with-margin">Progress over Perfection</h3>
      </div>
      <div className="doc-subsection">
        <h4 className="blx-with-margin">The first solution you test will probably miss the mark. The second solution will probably be wrong too. But it’s impossible to evaluate if a solution is good or bad until you test it.</h4>
      </div>
      <div className="doc-subsection">
        <h4 className="blx-with-margin">If you keep testing new ideas in real world scenarios, eventually your wrong solution will evolve into a right one. </h4>
      </div>

      <ul className="principle-list">
        <li>
          Try new things, make mistakes, and learn from them.
        </li>
        <li>
          Iterate on products and features outside of the sandbox.
        </li>
        <li>
          Turn ideas into testable hypotheses.
        </li>
      </ul>

      <div className="principle-insight-box">
        <h5 className="blx-with-margin">Principle Insight</h5>
        <p className="blx-with-margin">When it feels like conversation is stagnating or going in circles, try user testing instead of internal discussion.</p>
      </div>
    </div>
  </section>
);

export default MainContent;