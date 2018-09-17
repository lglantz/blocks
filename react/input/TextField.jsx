const React = require('react');
const PropTypes = require('prop-types');

class TextField extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isValid: props.isValid(props.value)
    };
  }

  updateValidity() {
    this.setState({
      isValid: this.props.isValid(this.props.value)
    });
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

    // prefix element
    let prefixElement = null;
    if (this.props.prefix) {
      prefixElement = <span className="blx-text-field-prefix">{this.props.prefix}</span>;
    }

    // suffix element
    let suffixElement = null;
    if (this.props.suffix) {
      suffixElement = <span className="blx-text-field-suffix">{this.props.suffix}</span>;
    }

    const textInputElement = (
      <input
        type={this.props.type}
        name={this.props.name}
        value={this.props.value}
        placeholder={this.props.placeholder}
        disabled={this.props.isDisabled}
        autoComplete={this.props.autoComplete}
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
          if (e.keyCode === 13) { // ENTER
            e.target.blur();
          }
          // If an invalid message has already appeared via blur,
          // do the user a favor and update validity once they fix it (before another blur)
          if (!this.state.isValid) {
            this.updateValidity();
          }
        }}
        onKeyDown={this.props.onKeyDown}
      />
    );

    return (
      <div className={`blx-text-field ${this.props.isDisabled ? 'blx-disabled' : ''}`}>
        <div>
          {this.props.label && <label className="blx-text-field-label">{this.props.label}</label>}
          {invalidLabelMarker}
        </div>
        <div className="blx-text-field-container">
          {prefixElement}
          {suffixElement}
          {textInputElement}
        </div>
        {invalidLabelMessage}
      </div>
    );
  }
}

TextField.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  prefix: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ]),
  suffix: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ]),
  isDisabled: PropTypes.bool,
  isValid: PropTypes.func,
  invalidErrorMessage: PropTypes.string,
  onChange: PropTypes.func,
  onKeyUp: PropTypes.func,
  onKeyDown: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  autoComplete: PropTypes.string,
  readOnly: PropTypes.bool
};

TextField.defaultProps = {
  type: 'text',
  name: '',
  value: '',
  label: '',
  placeholder: 'Text input',
  prefix: null,
  suffix: null,
  isDisabled: false,
  isValid: () => true,
  invalidErrorMessage: '',
  onChange: null,
  onKeyUp: null,
  onKeyDown: null,
  onFocus: null,
  onBlur: null,
  autoComplete: '',
  readOnly: false
};

module.exports = TextField;

