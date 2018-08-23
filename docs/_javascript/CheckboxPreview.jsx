const React = require('react');
const ReactDOM = require('react-dom');

const getPreviewComponent = require('./getPreviewComponent.jsx');

const Checkbox = require('../../react-index.js').Input.Checkbox;

const CheckboxPreview = () => (
  <div>
    <div className="l-flex-horizontal">
      { getPreviewComponent('Unselected', <Checkbox text="Unselected" />) }
    </div>
    <div className="l-flex-horizontal">
      { getPreviewComponent('Selected', <Checkbox text="Selected" isChecked />) }
    </div>
    <div className="l-flex-horizontal">
      { getPreviewComponent('Unselected, Disabled', <Checkbox text="Unselected" isDisabled />) }
    </div>
    <div className="l-flex-horizontal">
      { getPreviewComponent('Selected, Disabled', <Checkbox text="Selected, Disabled" isDisabled isChecked />) }
    </div>
  </div>
);

const rootElement = document.getElementById('react-preview');
ReactDOM.render(<CheckboxPreview />, rootElement);
