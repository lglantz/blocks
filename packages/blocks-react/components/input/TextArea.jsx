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
    const {
      isValid,
      invalidErrorMessage,
      label,
      style,
      className,
      onKeyUp,
      ...other
    } = this.props;
    // text input element itself
    let textFieldClasses = '';

    // invalid message and class
    let invalidLabelMessage = null;
    if (!isValid) {
      invalidLabelMessage = <span className="blx-invalid-input-message">{invalidErrorMessage}</span>;
      textFieldClasses += ' blx-invalid';
    }

    // label
    let labelElement = null;
    if (label) {
      labelElement = <label className="blx-ui-text">{label}</label>;
    }

    let classes = 'blx-text-field ';
    if (other.disabled) classes += 'blx-disabled ';

    return (
      <div
        style={style}
        className={`${classes} ${className}`}
      >
        {labelElement}
        <div className="blx-text-field-container">
          <textarea
            className={textFieldClasses}
            ref={this.textAreaRef}
            onKeyUp={(e) => {
              if (onKeyUp) onKeyUp(e);
              this.resizeTextArea();
            }}
            {...other}
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
  label: PropTypes.string,
  disabled: PropTypes.bool,
  isValid: PropTypes.bool,
  invalidErrorMessage: PropTypes.string,
  onKeyUp: PropTypes.func
};

TextArea.defaultProps = {
  className: '',
  style: null,
  label: '',
  disabled: false,
  isValid: true,
  invalidErrorMessage: '',
  onKeyUp: null
};

module.exports = TextArea;

