const React = require('react');

const getPreviewComponent = (caption, component) => ([
  <span className="doc-state-title blx-caption">
    {caption}
  </span>,

  <div className="doc-state-content">
    {component}
  </div>
]);

module.exports = getPreviewComponent;