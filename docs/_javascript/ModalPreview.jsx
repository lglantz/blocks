const React = require('react');

const BaseModal = require('../../react-index.js').Modals.BaseModal;
const ButtonPrimary = require('../../react-index.js').Buttons.ButtonPrimary;

class ModalPreview extends React.Component {
  constructor() {
    super();

    this.state = {
      isBaseModalHidden: true
    };
  }

  render() {
    return (
      <div className="l-flex-vertical doc-section">
        <h4>Modals</h4>
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
      </div>
    );
  }
}

module.exports = ModalPreview;
