const m = require('mithril');

const getPreviewComponent = (caption, component) => ([
  <span className="doc-state-title blx-ui-small" key={caption}>
    {caption}
  </span>,

  <div className="doc-state-content" key={`${caption}-component`}>
    {component}
  </div>
]);

module.exports = getPreviewComponent;