import React from "react"

const { ActionModal } = require('blocks-react').Modals;
const { ButtonPrimary } = require('blocks-react').Buttons;

class ModalActionExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalVisible: false
    };
  }

  closeModal() {
    this.setState({ modalVisible: false });
  }

  render() {
    return (
      <div>
        <ActionModal
          isHidden={!this.state.modalVisible}
          onClose={() => this.closeModal()}
          title="Confirm action"
          message="Are you sure you want to do this?"
          confirmText="Confirm"
          onConfirm={() => this.closeModal()}
          cancelText="Cancel"
          onCancel={() => this.closeModal()}
        />
        <ButtonPrimary
          text="Open Action Modal"
          onClick={() => this.setState(prevState => ({ modalVisible: !prevState.modalVisible }))}
        />
      </div>
    );
  }
}

export default ModalActionExample;
