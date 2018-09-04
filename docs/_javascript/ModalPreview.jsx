const React = require('react');
const ReactDOM = require('react-dom');

const BaseModal = require('../../react/modals/BaseModal.jsx');
const ButtonPrimary = require('../../react/buttons/ButtonPrimary.jsx');

class ModalPreview extends React.Component {
  constructor() {
    super();

    this.state = {
      isBaseModalHidden: true
    };
  }

  render() {
    return (
      <div>
        <BaseModal
          isHidden={this.state.isBaseModalHidden}
          onClose={() => this.setState(prevState => ({ isBaseModalHidden: !prevState.isBaseModalHidden })) }
        >
          <h4>Base Modal</h4>
          <p>Hello! This is a base modal.</p>
        </BaseModal>

        <ButtonPrimary
          text="Open Base Modal"
          onClick={() => this.setState(prevState => ({ isBaseModalHidden: !prevState.isBaseModalHidden })) }
        />
      </div>
    );
  }
}

const rootElement = document.getElementById('react-preview');
ReactDOM.render(<ModalPreview />, rootElement);
