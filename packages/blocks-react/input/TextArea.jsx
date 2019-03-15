const React = require('react');
const PropTypes = require('prop-types');


class TextArea extends React.Component {
  constructor(props) {
    super(props);

    this.textAreaRef = React.createRef();
  }

  componentDidMount() {
    this.resizeTextArea();
  }

  // resize the text area to fit only the height of its content
  resizeTextArea() {
    if (!this.textAreaRef) return;
    // set height to 1px so scrollHeight will be total height of content
    this.textAreaRef.current.style.height = '1px';
    // reset to be correct height
    this.textAreaRef.current.style.height = `${this.textAreaRef.current.scrollHeight}px`;
  }

  render() {
    // text input element itself
    let textFieldClasses = '';

    // invalid message and class
    let invalidLabelMessage = null;
    if (!this.props.isValid) {
      invalidLabelMessage = <span className="blx-invalid-input-message">{this.props.invalidErrorMessage}</span>;
      textFieldClasses += ' blx-invalid';
    }

    // label
    let labelElement = null;
    if (this.props.label) {
      labelElement = <label className="blx-ui-text">{this.props.label}</label>;
    }

    let classes = 'blx-text-field ';
    if (this.props.isDisabled) classes += 'blx-disabled ';

    return (
      <div
        style={this.props.style}
        className={`${classes} ${this.props.className}`}
      >
        {labelElement}
        <div className="blx-text-field-container">
          <textarea
            className={textFieldClasses}
            name={this.props.name}
            value={this.props.value}
            placeholder={this.props.placeholder}
            disabled={this.props.isDisabled}
            readOnly={this.props.readOnly}
            onChange={this.props.onChange}
            onFocus={this.props.onFocus}
            onBlur={this.props.onBlur}
            onKeyUp={(e) => {
              if (this.props.onKeyUp) this.props.onKeyUp(e);
              this.resizeTextArea();
            }}
            onKeyDown={this.props.onKeyDown}
            ref={this.textAreaRef}
            autoFocus={this.props.autoFocus}
          />
        </div>
        {invalidLabelMessage}
      </div>
    );
  }
}

TextArea.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  isDisabled: PropTypes.bool,
  isValid: PropTypes.bool,
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
  className: '',
  style: null,
  type: 'text',
  name: '',
  value: '',
  label: '',
  placeholder: '',
  isDisabled: false,
  isValid: true,
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

