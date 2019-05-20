import React from "react"
import PropTypes from "prop-types"


const ExampleSection = ({ children }) => (
  <div className="l-flex-vertical doc-section">
    <h3 id="Examples" className="blx-with-margin">
      Examples & Guidelines
    </h3>
    {children}
  </div>
);

ExampleSection.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ExampleSection;
