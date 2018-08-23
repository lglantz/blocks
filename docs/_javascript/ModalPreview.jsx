const React = require('react');

const BaseModal = require('../../react-index.js').Modals.BaseModal;
const ButtonPrimary = require('../../react-index.js').Buttons.ButtonPrimary;

const ModalPreview = (props) => (
  <div className="l-flex-vertical doc-section">
    <h4>Modals</h4>
    <div>
      <BaseModal
        isHidden={props.isHidden}
        onClose={props.onClose}
      >
        <h4>Base Modal</h4>
        <p>Hello! This is a base modal.</p>
      </BaseModal>

      <ButtonPrimary
        text="Open Base Modal"
        onClick={props.onClick}
      />
    </div>
  </div>
);

module.exports = ModalPreview;
