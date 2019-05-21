import React from "react"
import PropTypes from "prop-types"


const ContentLayout = ({ children }) => (
  <section className="design-page-section">
    <div className="l-flex-vertical doc-section">
      <h3 id="Examples" className="blx-with-margin">
        Examples & Guidelines
      </h3>
      {children}
    </div>
  </section>
);

ContentLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContentLayout;
