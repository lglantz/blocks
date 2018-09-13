const React = require('react');
const ReactDOM = require('react-dom');

const getPreviewComponent = require('./common/getPreviewComponent.jsx');

const Checkbox = require('../../react/input/Checkbox.jsx');

const CheckboxPreview = () => (
  <div>
    <div className="l-flex-horizontal">
      { getPreviewComponent('Unselected', <Checkbox>Unselected</Checkbox>) }
    </div>
    <div className="l-flex-horizontal">
      { getPreviewComponent('Selected', <Checkbox isChecked>Selected</Checkbox>) }
    </div>
    <div className="l-flex-horizontal">
      { getPreviewComponent('Unselected, Disabled', <Checkbox isDisabled>Unselected</Checkbox>) }
    </div>
    <div className="l-flex-horizontal">
      { getPreviewComponent('Selected, Disabled', <Checkbox isDisabled isChecked>Selected, Disabled</Checkbox>) }
    </div>
  </div>
);

const rootElement = document.getElementById('react-preview');
ReactDOM.render(<CheckboxPreview />, rootElement);
