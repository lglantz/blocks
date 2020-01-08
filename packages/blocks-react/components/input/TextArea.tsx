import * as React from 'react';
import classnames from 'classnames';

type TextAreaProps = {
  label: string,
  isValid: boolean,
  invalidErrorMessage: string,
} & JSX.IntrinsicElements["textarea"]
/**
 * Text Area Block
 */
class TextArea extends React.Component<TextAreaProps> {
  textAreaRef: React.RefObject<any>;
  static defaultProps = {
    className: '',
    style: null,
    label: '',
    disabled: false,
    isValid: true,
    invalidErrorMessage: '',
    onKeyUp: null
  };

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

    // invalid message and class
    let invalidLabelMessage = null;
    if (!isValid) {
      invalidLabelMessage = <span className="blx-invalid-input-message">{invalidErrorMessage}</span>;
    }

    // label
    let labelElement = null;
    if (label) {
      labelElement = <label className="blx-ui-text">{label}</label>;
    }

    const classes = classnames('blx-text-field', className, {
      'blx-disabled': other.disabled
    });
    const textAreaClasses = classnames({ 'blx-invalid': !isValid });

    return (
      <div
        style={style}
        className={classes}
      >
        {labelElement}
        <div className="blx-text-field-container">
          <textarea
            className={textAreaClasses}
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

export default TextArea;
