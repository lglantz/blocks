const React = require('react');
const ReactDOM = require('react-dom');

const getPreviewComponent = require('./common/getPreviewComponent.jsx');

const RadioButtonGroup = require('../../react/input/RadioButtonGroup.jsx');

class RadioButtonPreview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isValid: true
    };
  }
  render() {
    return(
      <div>
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
          { getPreviewComponent('Disabled',
              <RadioButtonGroup
                name="radio-3"
                options={['Selected, Disabled','Unselected, Disabled']}
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
                options={['Selected, Invalid', 'Unselected, Invalid']}
                checkedIndex={0}
                isValid={false}
                onChange={() => {}}
              />
          ) }
        </div>
      </div>
    )};
}

const rootElement = document.getElementById('react-preview');
ReactDOM.render(<RadioButtonPreview />, rootElement);
