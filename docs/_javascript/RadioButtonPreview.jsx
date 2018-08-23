const React = require('react');

const getPreviewComponent = require('./getPreviewComponent.jsx');

const RadioButtonGroup = require('../../react-index.js').Input.RadioButtonGroup;

const RadioButtonPreview = () => (
  <div className="l-flex-vertical doc-section">
    <h4>Radio Buttons</h4>
    <div className="l-flex-vertical">
      <div className="l-flex-horizontal">
        { getPreviewComponent('Unselected',
            <RadioButtonGroup
              name="radio-1"
              options={['Unselected', 'Unselected 2']}
              onChange={() => {}}
            />
        )}
      </div>
      <div className="l-flex-horizontal">
        { getPreviewComponent('Selected',
            <RadioButtonGroup
              name="radio-2"
              options={['Selected', 'Selected 2']}
              checkedIndex={0}
              onChange={() => {}}
            />
        )}
      </div>
      <div className="l-flex-horizontal">
        { getPreviewComponent('Unselected, Disabled',
            <RadioButtonGroup
              name="radio-3"
              options={['Unselected, Disabled']}
              isDisabled
              onChange={() => {}}
            />
        ) }
      </div>
      <div className="l-flex-horizontal">
        { getPreviewComponent('Selected, Disabled',
            <RadioButtonGroup
              name="radio-4"
              options={['Selected, Disabled']}
              isDisabled
              checkedIndex={0}
              onChange={() => {}}
            />
        ) }
      </div>
    </div>
  </div>
);

module.exports = RadioButtonPreview;
