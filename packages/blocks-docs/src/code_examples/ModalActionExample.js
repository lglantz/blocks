import React from "react"
import ActionModal from 'blocks-react/dist/modals/ActionModal';
import ButtonPrimary from 'blocks-react/dist/buttons/ButtonPrimary';

const MODAL_TYPES = {
  SUCCESS: 'success',
  INFORMATION: 'information',
  WARNING: 'warning',
  ERROR: 'error'
}

class ModalActionExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalVisible: false,
      modalType: null
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
          title="Action title"
          confirmText="Do it"
          onConfirm={() => this.closeModal()}
          cancelText="Cancel"
          onCancel={() => this.closeModal()}
          variant={this.state.modalType}
        >
          <p>Are you sure you want to do this?</p>
        </ActionModal>
        <div className="blx-v-button-group">
          <ButtonPrimary
            text="Open Success Modal"
            onClick={() => this.setState({ modalVisible: true, modalType: MODAL_TYPES.SUCCESS })}
          />
          <ButtonPrimary
            text="Open Information Modal"
            onClick={() => this.setState({ modalVisible: true, modalType: MODAL_TYPES.INFORMATION })}
          />
          <ButtonPrimary
            text="Open Warning Modal"
            onClick={() => this.setState({ modalVisible: true, modalType: MODAL_TYPES.WARNING })}
          />
          <ButtonPrimary
            text="Open Error Modal"
            onClick={() => this.setState({ modalVisible: true, modalType: MODAL_TYPES.ERROR })}
          />
        </div>
      </div>
    );
  }
}

export default ModalActionExample;
