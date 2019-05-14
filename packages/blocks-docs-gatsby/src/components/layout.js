import React from "react"
import PropTypes from "prop-types"

import Navigation from "./navigation"

const Layout = ({ children }) => (
  <div className="l-root">
    <div className="l-flex-horizontal l-page">
      <Navigation />
      <div className="design-page">
        <main className="design-page-content">
          { children }
        </main>
      </div>
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;
