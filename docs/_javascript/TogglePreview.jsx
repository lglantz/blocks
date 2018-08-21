const React = require('react');

const BlocksReact = require('../../react-index.js');
const Toggle = BlocksReact.Input.Toggle;

const TogglePreview = () => (
  <div className="l-flex-vertical doc-section">
    <h4>Toggles</h4>
    <div>
      <Toggle
        name="design-page-toggle"
        options={
          [
            { text: 'Option 1', isChecked: true },
            { text: 'Option 2' },
            { text: 'Option 3' }
          ]
        }
      />
      <Toggle
        name="design-page-toggle-disabled"
        options={
          [
            { text: 'I am', isChecked: true },
            { text: 'a disabled' },
            { text: 'toggle' }
          ]
        }
        isDisabled
      />
    </div>
  </div>
);

module.exports = TogglePreview;
