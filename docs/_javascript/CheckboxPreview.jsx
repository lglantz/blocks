const React = require('react');

const getPreviewComponent = require('./getPreviewComponent.jsx');

const Checkbox = require('../../react-index.js').Input.Checkbox;

const CheckboxPreview = () => (
  <div className="l-flex-vertical doc-section">
    <h4>Checkboxes</h4>
    <div className="l-flex-vertical">
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
  </div>
);

module.exports = CheckboxPreview;
