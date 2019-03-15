const React = require('react');

const getPreviewComponent = (caption, component) => ([
  <span className="doc-state-title blx-h5" key={caption}>
    {caption}
  </span>,

  <div className="doc-state-content" key={`${caption}-component`}>
    <div>
    {component}
    </div>
  </div>
]);

module.exports = getPreviewComponent;