const React = require('react');

const getPreviewComponent = require('./getPreviewComponent.jsx');

const BlocksReact = require('../../react-index.js');
const SortableList = BlocksReact.SortableList;

const SortableListPreview = () => (
  <div className="l-flex-vertical doc-section">
    <h4>Sortable List</h4>
    <div>
      <SortableList>
        <span>Item 1</span>
        <span>Item 2</span>
        <span>Item 3</span>
        <span>Item 4</span>
        <span>Item 5</span>
        <span>Item 6</span>
        <span>Item 7</span>
      </SortableList>
    </div>
  </div>
);

module.exports = SortableListPreview;
