const React = require('react');
const PropTypes = require('prop-types');


class TextField extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: this.props.value
    };

    this.onChange = this.onChange.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
  }

  onChange(e) {
    this.setState({
      value: e.target.value
    });
  }

  onBlur(e) {
    if (this.props.onBlur) {
      this.props.onBlur(e);
    }
  }

  onKeyUp(e) {
    if (e.keyCode === 13) { // ENTER
      e.target.blur();
    } else if (this.props.onKeyUp) {
      this.props.onKeyUp(e);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.props.value) {
      this.setState({
        value: nextProps.value
      });
    }
  }

  render() {
    // the label field
    let labelElement = null;
    if (this.props.label) {
      labelElement = (
        <label className="text-field-label">{this.props.label}</label>
      );
    }

    // text input element itself
    let textFieldClasses = 'text-field-input';

    // red asterisk if the value is invalid
    let invalidLabelMarker = null;
    let invalidLabelMessage = null;
    if (!this.props.isValid(this.state.value)) {
      invalidLabelMarker = (
        <span className="invalid-label-marker">*</span>
      );
      invalidLabelMessage = (
        <span className="invalid-label-message">{this.props.invalidErrorMessage}</span>
      );

      textFieldClasses += ' invalid';
    }

    // prefix element
    let prefixElement = null;
    if (this.props.prefix) {
      prefixElement = (
        <span className="text-field-prefix">{this.props.prefix}</span>
      );

      textFieldClasses += ' text-field-with-prefix';
    }

    // suffix element
    let suffixElement = null;
    if (this.props.suffix) {
      suffixElement = (
        <span className="text-field-suffix">{this.props.suffix}</span>
      );

      textFieldClasses += ' text-field-with-suffix';
    }

    const textInputElement = (
      <input
        type="text"
        className={textFieldClasses}
        value={this.state.value}
        placeholder={this.props.placeholder}
        disabled={this.props.isDisabled}
        onChange={this.onChange}
        onBlur={this.props.onBlur}
        onKeyUp={this.onKeyUp}
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
  onKeyUp: PropTypes.func,
  onBlur: PropTypes.func
};

TextField.defaultProps = {
  value: '',
  label: null,
  placeholder: 'Text input',
  prefix: null,
  suffix: null,
  isDisabled: false,
  isValid: () => (true),
  invalidErrorMessage: '',
  onKeyUp: null,
  onBlur: null
};

module.exports = TextField;

