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
    // the label field
    let labelElement = null;
    if (this.props.label) {
      labelElement = <label className="text-field-label">{this.props.label}</label>;
    }

    // text input element itself
    let textFieldClasses = 'text-field-input';

    // red asterisk if the value is invalid
    let invalidLabelMarker = null;
    let invalidLabelMessage = null;
    if (!this.state.isValid) {
      invalidLabelMarker = <span className="invalid-label-marker">*</span>;
      invalidLabelMessage = <span className="invalid-label-message">{this.props.invalidErrorMessage}</span>;
      textFieldClasses += ' invalid';
    }

    // prefix element
    let prefixElement = null;
    if (this.props.prefix) {
      prefixElement = <span className="text-field-prefix">{this.props.prefix}</span>;
      textFieldClasses += ' text-field-with-prefix';
    }

    // suffix element
    let suffixElement = null;
    if (this.props.suffix) {
      suffixElement = <span className="text-field-suffix">{this.props.suffix}</span>;
      textFieldClasses += ' text-field-with-suffix';
    }

    const textInputElement = (
      <input
        type={this.props.type}
        name={this.props.name}
        className={textFieldClasses}
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
      <div className={`text-field ${this.props.isDisabled ? 'disabled' : ''}`}>
        <div>
          {labelElement}
          {invalidLabelMarker}
        </div>
        <div className="text-field-container">
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
  prefix: PropTypes.string,
  suffix: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
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
  label: null,
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

