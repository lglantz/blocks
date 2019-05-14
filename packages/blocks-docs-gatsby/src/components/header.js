import PropTypes from "prop-types"
import React from "react"

const Header = ({ title, children }) => (
  <header>
    <div className="design-page-header">
      <h1 className="blx-with-margin">
        {title}
      </h1>
      <p className="blx-ui-text blx-with-margin">
        {children}
      </p>
    </div>
  </header>
);

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header
