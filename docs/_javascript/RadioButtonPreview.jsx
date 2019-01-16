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
                isValid={this.state.isValid}
                isDisabled
                checkedIndex={0}
                onChange={() => {}}
              />
          ) }
        </div>
        <div className="l-flex-horizontal">
          { getPreviewComponent('Sinlge invalid radio button',
              <RadioButtonGroup
                name="radio-4"
                options={[
                  { text: 'Selected, Valid', isValid: true },
                  { text: 'Unselected, Invalid', isValid: false }
                ]}
                checkedIndex={0}
                onChange={() => {}}
              />
          ) }
        </div>
        <div className="l-flex-horizontal">
          { getPreviewComponent('Invalid radio button group',
              <RadioButtonGroup
                name="radio-5"
                options={[
                  { text: 'Selected, Invalid'},
                  { text: 'Unselected, Invalid'}
                ]}
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
