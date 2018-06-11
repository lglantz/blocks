const React = require('react');
const PropTypes = require('prop-types');

const BaseModal = require('./BaseModal.jsx');
const ButtonPrimary = require('../buttons/ButtonPrimary.jsx');
const ButtonSecondary = require('../buttons/ButtonSecondary.jsx');


class BasicModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hidden: true
    };

    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.confirm = this.confirm.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  open() {
    this.setState({
      hidden: false
    });
  }

  close() {
    this.setState({
      hidden: true
    });
  }

  confirm() {
    if (typeof this.props.onConfirm === 'function') {
      this.props.onConfirm();
    }
    this.close();
  }

  cancel() {
    if (typeof this.props.onCancel === 'function') {
      this.props.onCancel();
    }
    this.close();
  }

  render() {
    let confirmButton = null;
    if (this.props.onConfirm && this.props.confirmText) {
      confirmButton = (
        <ButtonPrimary
          text={this.props.confirmText}
          onClick={this.confirm}
        />
      );
    }

    let cancelButton = null;
    if (this.props.onCancel && this.props.cancelText) {
      cancelButton = (
        <ButtonSecondary
          text={this.props.cancelText}
          onClick={this.cancel}
        />
      );
    }

    let buttonBar = null;
    if (confirmButton || cancelButton) {
      buttonBar = (
        <div className="modal-buttons">
          {cancelButton}
          {confirmButton}
        </div>
      );
    }

    let actionInfo = null;
    if (this.props.actionInfo) {
      actionInfo = (
        <p className="text-emph">{this.props.actionInfo}</p>
      );
    }

    let modalContent = null;
    if (!this.state.hidden) {
      modalContent = (
        <div>
          <span className="heading-medium">{this.props.title}</span>
          <p>{this.props.message}</p>
          {actionInfo}
          {buttonBar}
        </div>
      );
    }

    return (
      <div className="modal-container">
        <ButtonPrimary
          text={this.props.toggleText}
          onClick={this.open}
        />
        <BaseModal
          isHidden={this.state.hidden}
          onClose={this.close}
        >
          { modalContent }
        </BaseModal>
      </div>
    );
  }
}

BasicModal.propTypes = {
  toggleText: PropTypes.string,
  title: PropTypes.string,
  message: PropTypes.string,
  actionInfo: PropTypes.string,
  confirmText: PropTypes.string,
  cancelText: PropTypes.string,
  onConfirm: PropTypes.func,
  onCancel: PropTypes.func
};

BasicModal.defaultProps = {
  toggleText: 'Click',
  title: '',
  message: '',
  actionInfo: '',
  confirmText: '',
  cancelText: '',
  onConfirm: null,
  onCancel: null
};

module.exports = BasicModal;
