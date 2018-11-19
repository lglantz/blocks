const React = require('react');
const ReactDOM = require('react-dom');

const getPreviewComponent = require('./common/getPreviewComponent.jsx');

const SortableList = require('../../react/lists/SortableList.jsx');

const SortableListPreview = () => (
  <div className='sortable-list-preview'>
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
);

const rootElement = document.getElementById('react-preview');
ReactDOM.render(<SortableListPreview />, rootElement);
