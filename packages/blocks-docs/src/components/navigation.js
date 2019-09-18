import React from "react"

import { Link, StaticQuery, graphql } from "gatsby"

const Accordion = require('blocks-react').Accordion;
const Tabs = require('blocks-react').Tabs.Tabs;


const Navigation = () => (
  <StaticQuery
    query={graphql`
      query IndexQuery {
        dataJson {
          navigation {
            name,
            subsections {
              name,
              href
            }
          }
        }
      }
    `}
    render={data => (
      <div className="left-nav-panel">
        <div className="blocks-heading">
          <a href="/" aria-label="Blocks Home">
            <div className="blocks-logo"></div>
          </a>
        </div>
        <nav>
          {
            data.dataJson.navigation.map(section => (
              <Accordion
                id={`blx-nav-${section.name}`}
                key={`blx-nav-${section.name}`}
                trigger={<h5>{section.name}</h5>}
                open
              >
                <Tabs vertical>
                {
                  section.subsections.map(subsection => (
                    <li key={subsection.name}>
                      <Link
                        to={subsection.href}
                        activeClassName="blx-active"
                        className="blx-tab-item"
                      >
                        {subsection.name}
                      </Link>
                    </li>
                  ))
                }
                </Tabs>
              </Accordion>
            ))
          }
        </nav>
      </div>
    )}
  />
);

export default Navigation;
