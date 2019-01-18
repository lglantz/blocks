const React = require('react');
const ReactDOM = require('react-dom');

const getPreviewComponent = require('./common/getPreviewComponent.jsx');

const RadioButtonGroup = require('../../react/input/RadioButtonGroup.jsx');

const RadioButtonPreview = () => (
  <div>
    <div className="l-flex-horizontal">
      { getPreviewComponent('Unselected',
          <RadioButtonGroup
            name="radio-1"
            options={[
              { text: 'Unselected' },
              { text: 'Unselected 2'}
            ]}
            onChange={() => {}}
          />
      )}
    </div>
    <div className="l-flex-horizontal">
      { getPreviewComponent('Selected',
          <RadioButtonGroup
            name="radio-2"
            options={[
              { text: 'Selected'},
              { text:'Selected 2'}
            ]}
            checkedIndex={0}
            onChange={() => {}}
          />
      )}
    </div>
    <div className="l-flex-horizontal">
      { getPreviewComponent('Disabled',
          <RadioButtonGroup
            name="radio-3"
            options={[
              { text: 'Selected, Disabled' },
              { text: 'Unselected, Disabled'}
            ]}
            isDisabled
            checkedIndex={0}
            onChange={() => {}}
          />
      ) }
    </div>
    <div className="l-flex-horizontal">
      { getPreviewComponent('Invalid',
          <RadioButtonGroup
            name="radio-4"
            options={[
              { text: 'Selected, Invalid', isValid: false },
              { text: 'Unselected, Invalid', isValid: false }
            ]}
            checkedIndex={0}
            onChange={() => {}}
          />
      ) }
    </div>
  </div>
);

const rootElement = document.getElementById('react-preview');
ReactDOM.render(<RadioButtonPreview />, rootElement);
