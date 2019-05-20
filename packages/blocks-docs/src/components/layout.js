import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"

import favicon from '../../favicon.png';
import Navigation from "./navigation"

const Layout = ({ children }) => (
  <div className="l-root">
    <Helmet
      meta={[
        { name: 'description', content: 'CBRE Build\'s Blocks design system.' }
      ]}
      link={[
        { rel: 'shortcut icon', type: 'image/png', href: `${favicon}` }
      ]}
      title="Blocks by CBRE Build"
    />
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
