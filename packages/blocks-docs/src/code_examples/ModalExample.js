import React from "react"

const { BaseModal } = require('blocks-react').Modals;
const { Button } = require('blocks-react').Buttons;

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
          <h4>Base Modal</h4>
          <p>Hello! This is a base modal.</p>
        </BaseModal>
        <Button
          color="primary"
          onClick={() => this.setState(prevState => ({ modalVisible: !prevState.modalVisible }))}
        >
          <span>Open Base Modal</span>
        </Button>
      </div>
    );
  }
}

export default ModalExample;
