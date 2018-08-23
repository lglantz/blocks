const React = require('react');

const getPreviewComponent = require('./getPreviewComponent.jsx');

const Dropdown = require('../../react-index.js').Dropdowns.Dropdown;

const DropdownPreview = () => (
  <div className="l-flex-vertical doc-section">
    <h4>Dropdowns</h4>
    <div className="l-flex-vertical">
      <div className="l-flex-horizontal">
        { getPreviewComponent('Default',
            <Dropdown
              text="Choose an option"
              options={
                [
                  { value: 'option1', text: 'One option' },
                  { value: 'option2', text: 'Another option' },
                  { value: 'option3', text: 'Best option' }
                ]
              }
            />
        ) }
      </div>
      <div className="l-flex-horizontal">
        { getPreviewComponent('Disabled',
            <Dropdown
              text="Choose an option"
              isDisabled
              options={
                [
                  { value: 'option1', text: 'One option' },
                  { value: 'option2', text: 'Another option' },
                  { value: 'option3', text: 'Best option' }
                ]
              }
            />
        ) }
      </div>
    </div>
  </div>
);

module.exports = DropdownPreview;
