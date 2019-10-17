import React from "react"

const { BaseModal } = require('blocks-react').Modals;
const { ButtonPrimary } = require('blocks-react').Buttons;

class ModalExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalVisible: false
    };
  }

  render() {
    return (
      <div>
        <BaseModal
          key="baseModal"
          isHidden={!this.state.modalVisible}
          onClose={() => this.setState(prevState => ({ modalVisible: !prevState.modalVisible }))}
        >
          <div className="blx-modal-title">
            <h4>Base Modal</h4>
          </div>
          <p>Hello! This is a base modal.</p>
        </BaseModal>
        <ButtonPrimary
          text="Open Base Modal"
          onClick={() => this.setState(prevState => ({ modalVisible: !prevState.modalVisible }))}
        />
      </div>
    );
  }
}

export default ModalExample;
