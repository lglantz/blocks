const React = require('react');

const getPreviewComponent = (caption, component) => ([
  <span className="doc-state-title blx-caption" key={caption}>
    {caption}
  </span>,

  <div className="doc-state-content" key={`${caption}-component`}>
    {component}
  </div>
]);

module.exports = getPreviewComponent;