const React = require('react');
const PropTypes = require('prop-types');
const ReactDOM = require('react-dom');

const closeOnClick = require('../wrappers/closeOnClick.jsx');


class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      onFocusIdx: -1
    };
    
    this.optionsRefs = [];
    for (let i = 0; i < this.props.options.length; i++) {
      this.optionsRefs[i] = React.createRef();
    }

    this.onKeyDown = this.onKeyDown.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);

    this.getClickHandler = this.getClickHandler.bind(this);
    this.getKeyUpHandler = this.getKeyUpHandler.bind(this);
    
    this.moveFocusUsingKey = this.moveFocusUsingKey.bind(this);
    this.getFocusIndexAfterKeyPress = this.getFocusIndexAfterKeyPress.bind(this);
    this.focusOption = this.focusOption.bind(this);
  }

  componentDidMount() {
    for (let i = 0; i < this.optionsRefs.length; i++) {
      const optionRef = this.optionsRefs[i].current;
      for (let j = 0; j < optionRef.childNodes.length; j++) {
        const child = optionRef.childNodes[j];
        if (typeof child.focus === 'function') {
          child.addEventListener('keydown', this.onKeyDown);
          child.addEventListener('keyup', this.getKeyUpHandler(this.props.options[i]));
          child.addEventListener('click', this.getClickHandler(this.props.options[i]));
          break;
        }
      }
    }
  }

  componentWillUnmount() {
    for (let i = 0; i < this.optionsRefs.length; i++) {
      const optionRef = this.optionsRefs[i].current;
      for (let j = 0; j < optionRef.childNodes.length; j++) {
        const child = optionRef.childNodes[j];
        if (typeof child.focus === 'function') {
          child.removeEventListener('keydown', this.onKeyDown);
          child.removeEventListener('keyup', this.getKeyUpHandler(this.props.options[i]));
          child.removeEventListener('click', this.getClickHandler(this.props.options[i]));
          break;
        }
      }
    }
  }

  getClickHandler(option) {
    return () => {
      this.onSelect(option);
    };
  }

  onSelect(option) {
    if (this.props.onChange) this.props.onChange(option);
    this.props.close();
  }

  onKeyDown(e) {
    if (e.key === 'Tab' && this.props.isOpen) {
      this.props.close();
    } else if (['ArrowDown', ' '].indexOf(e.key) > -1 && !this.props.isOpen) {
      e.preventDefault();
      this.props.open();
    } else {
      if (['ArrowDown', 'ArrowUp', 'Enter', ' '].indexOf(e.key) > -1) e.preventDefault();
      this.moveFocusUsingKey(e.key);
    }
  }

  getKeyUpHandler(option) {
    return (e) => {
      this.onKeyUp(e, option);
    };
  }

  onKeyUp(e, option) {
    if (['Enter', ' '].indexOf(e.key) > -1) {
      this.onSelect(option);
    } else if (e.key === 'Escape') {
      this.props.close();
    }
  }

  moveFocusUsingKey(keyName) {
    this.setState({
      onFocusIdx: this.getFocusIndexAfterKeyPress(keyName)
    }, () => this.focusOption(this.state.onFocusIdx))
  }

  getFocusIndexAfterKeyPress(keyName) {
    if (keyName === 'ArrowDown') return Math.min(this.state.onFocusIdx + 1, this.props.options.length - 1);
    if (keyName === 'ArrowUp') return Math.max(this.state.onFocusIdx - 1, 0);
    for (let i = 0; i < this.props.options.length; i++) {
      const option = this.props.options[i];
      if (option.text && option.text[0].toLowerCase() === keyName) return i;
    }
    return this.state.onFocusIdx;
  }

  focusOption(idx) {
    if (idx < 0) return;
    const optionRef = this.optionsRefs[idx].current;
    if (optionRef) {
      // ref is to the li item that contains the dropdown elements
      // search for a focusable child
      // (particularly important for custom elements)
      for (let i = 0; i < optionRef.childNodes.length; i++) {
        const child = optionRef.childNodes[i];
        if (typeof child.focus === 'function') {
          child.focus();
          break;
        }
      }
    }
  }

  getOptionTrigger() {
    let content = this.props.text;
    if (this.props.value) {
      for (let i = 0; i < this.props.options.length; i++) {
        const option = this.props.options[i];
        if (option.value == this.props.value) {
          if (option.text) {
            content = option.text;
          } else if (option.element) {
            content = null;
          }
          break;
        }
      }
    }

    return (
      <button
        className={`blx-dropdown-trigger ${this.props.isOpen ? 'blx-active' : ''} ${this.props.isDisabled ? 'blx-disabled' : ''} ${!this.props.value ? 'blx-dropdown-trigger-placeholder' : ''}`}
        disabled={this.props.isDisabled}
        onClick={this.props.toggle}
        title={content}
        autoFocus={this.props.autoFocus}
        onKeyDown={this.onKeyDown}
        onFocus={() => this.setState({ onFocusIdx: -1 })}
      >
        { this.props.icon && 
          <span className={`blx-icon blx-icon-${this.props.icon}`} />
        }
        <span className={`blx-dropdown-text`}>{ content }</span>
      </button>
    );
  }

  render() {
    return (
      <div className="blx-dropdown-wrapper">
        <div className="blx-dropdown">
          {this.props.description && (
            <div>
              <label className="blx-ui-text">{this.props.description}</label>
            </div>
          )}
          {this.getOptionTrigger()}
          <ul className={`blx-dropdown-menu ${this.props.isOpen ? '' : 'blx-hidden'}`}>
            {
              this.props.options.map((option, idx) => {
                let item = null;
                if (option.element) {
                  item = option.element;
                } else if (option.href) {
                  item = (
                    <a
                      href={option.href}
                      disabled={option.disabled}
                    >
                      {option.text}
                    </a>
                  );
                } else {
                  item = (
                    <button
                      disabled={option.disabled}
                    >
                      {option.text}
                    </button>
                  );
                }
                return (
                  <li
                    key={option.text || option.key}
                    className={`blx-dropdown-item ${option.disabled ? 'blx-disabled' : ''}`}
                    ref={this.optionsRefs[idx]}
                  >
                    {item}
                  </li>
                );
              })
            }
          </ul>
        </div>
      </div>
    );
  }
};

Dropdown.propTypes = {
  isOpen: PropTypes.bool,
  toggle: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired,
  text: PropTypes.string,
  icon: PropTypes.string,
  description: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  options: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    disabled: PropTypes.bool,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    href: PropTypes.string,
    element: PropTypes.node,
    key: PropTypes.string
  })),
  isDisabled: PropTypes.bool,
  onChange: PropTypes.func,
  autoFocus: PropTypes.bool
};

Dropdown.defaultProps = {
  isOpen: false,
  options: [],
  text: 'Choose an option',
  icon: null,
  description: '',
  value: null,
  onChange: () => {},
  autoFocus: false
};


module.exports = closeOnClick(Dropdown);
