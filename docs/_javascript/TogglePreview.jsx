const React = require('react');
const ReactDOM = require('react-dom');

const Toggle = require('../../react-index.js').Input.Toggle;

const TogglePreview = () => (
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
);

const rootElement = document.getElementById('react-preview');
ReactDOM.render(<TogglePreview />, rootElement);
