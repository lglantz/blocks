const React = require('react');
const PropTypes = require('prop-types');


class TextArea extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isValid: props.isValid(props.value)
    };

    this.textAreaRef = React.createRef();
  }

  componentDidMount() {
    if (this.props.isMultiline) {
      this.resizeTextArea();
    }
  }

  updateValidity() {
    this.setState({
      isValid: this.props.isValid(this.props.value)
    });
  }

  resizeTextArea() {
    if (!this.textAreaRef) return;
    this.textAreaRef.current.style.height = '1px';
    this.textAreaRef.current.style.height = `${this.textAreaRef.current.scrollHeight}px`;
  }

  getTextArea() {
    return (
      <textarea
        name={this.props.name}
        value={this.props.value || ''}
        placeholder={this.props.placeholder}
        disabled={this.props.isDisabled}
        readOnly={this.props.readOnly}
        onChange={this.props.onChange}
        onFocus={this.props.onFocus}
        onBlur={(e) => {
          this.updateValidity();
          if (this.props.onBlur) {
            this.props.onBlur(e);
          }
        }}
        onKeyUp={(e) => {
          if (this.props.onKeyUp) this.props.onKeyUp(e);
          this.resizeTextArea();
          // If an invalid message has already appeared via blur,
          // do the user a favor and update validity once they fix it (before another blur)
          if (!this.state.isValid) {
            this.updateValidity();
          }
        }}
        onKeyDown={this.props.onKeyDown}
        ref={this.textAreaRef}
        autoFocus={this.props.autoFocus}
      />
    );
  }

  render() {
    // text input element itself
    let textFieldClasses = '';

    // red asterisk if the value is invalid
    let invalidLabelMarker = null;
    let invalidLabelMessage = null;
    if (!this.state.isValid) {
      invalidLabelMarker = <span className="blx-invalid-text-field-marker">*</span>;
      invalidLabelMessage = <span className="blx-invalid-text-field-message">{this.props.invalidErrorMessage}</span>;
      textFieldClasses += ' blx-invalid';
    }

    return (
      <div className={`blx-text-field ${this.props.isDisabled ? 'blx-disabled' : ''}`}>
        <div>
          {this.props.label && <label className="blx-ui-text">{this.props.label}</label>}
          {invalidLabelMarker}
        </div>
        <div className="blx-text-field-container">
          {this.getTextArea()}
        </div>
        {invalidLabelMessage}
      </div>
    );
  }
}

TextArea.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  isDisabled: PropTypes.bool,
  isMultiline: PropTypes.bool,
  isValid: PropTypes.func,
  invalidErrorMessage: PropTypes.string,
  onChange: PropTypes.func,
  onKeyUp: PropTypes.func,
  onKeyDown: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  readOnly: PropTypes.bool,
  autoFocus: PropTypes.bool
};

TextArea.defaultProps = {
  type: 'text',
  name: '',
  value: '',
  label: '',
  placeholder: '',
  isDisabled: false,
  isMultiline: false,
  isValid: () => true,
  invalidErrorMessage: '',
  onChange: null,
  onKeyUp: null,
  onKeyDown: null,
  onFocus: null,
  onBlur: null,
  readOnly: false,
  autoFocus: false
};

module.exports = TextArea;

