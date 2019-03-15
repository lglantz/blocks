const React = require('react');
const ReactDOM = require('react-dom');

const BaseModal = require('blocks-react').Modals.BaseModal;
const ActionModal = require('blocks-react').Modals.ActionModal;
const ButtonPrimary = require('blocks-react').Buttons.ButtonPrimary;
const getPreviewComponent = require('./common/getPreviewComponent.jsx');


class ModalPreview extends React.Component {
  constructor() {
    super();

    this.state = {
      isBaseModalHidden: true,
      isActionModalHidden: true
    };
  }


  render() {
    const closeActionModal = () => this.setState({ isActionModalHidden: true });

    return [
      <BaseModal
        key="baseModal"
        isHidden={this.state.isBaseModalHidden}
        onClose={() => this.setState(prevState => ({ isBaseModalHidden: !prevState.isBaseModalHidden }))}
      >
        <h4>Base Modal</h4>
        <p>Hello! This is a base modal.</p>
      </BaseModal>,

      <ActionModal
        key="actionModal"
        isHidden={this.state.isActionModalHidden}
        onClose={closeActionModal}
        title="Confirm action"
        message="Are you sure you want to do this?"
        confirmText="Confirm"
        onConfirm={closeActionModal}
        cancelText="Cancel"
        onCancel={closeActionModal}
      />,

      <div className="l-flex-vertical" key="modalButtons">
        <div className="l-flex-horizontal">
          {
            getPreviewComponent('Base Modal',
              <ButtonPrimary
                key="openBase"
                text="Open Base Modal"
                onClick={() => this.setState(prevState => ({ isBaseModalHidden: !prevState.isBaseModalHidden }))}
              />
            )
          }
          {
            getPreviewComponent('Action Modal',
              <ButtonPrimary
                key="openAction"
                text="Open Action Modal"
                onClick={() => this.setState(prevState => ({ isActionModalHidden: !prevState.isActionModalHidden }))}
              />
            )
          }
        </div>
      </div>
    ];
  }
}

const rootElement = document.getElementById('react-preview');
ReactDOM.render(<ModalPreview />, rootElement);
