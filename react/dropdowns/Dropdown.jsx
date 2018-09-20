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
    
    this.optionsRefs = this.props.options.map(() => null);

    this.onKeyDown = this.onKeyDown.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
    
    this.keyHandler = this.keyHandler.bind(this);
    this.setOptionNode = this.setOptionNode.bind(this);
    this.moveFocusUsingKey = this.moveFocusUsingKey.bind(this);
    this.getFocusIndexAfterKeyPress = this.getFocusIndexAfterKeyPress.bind(this);
    this.focusOption = this.focusOption.bind(this);
  }

  onSelect(option) {
    if (this.props.onChange) this.props.onChange(option);
    this.props.close();
  }

  onKeyDown(e) {
    if (e.key === 'Enter') e.preventDefault();
    this.keyHandler(e);
  }

  onKeyUp(e) {
    if (e.key === 'Enter') {
      this.onSelect(option);
    } else if (e.key === 'Escape') {
      this.props.close();
    }
  }

  setOptionNode(element, idx) {
    if (element) {
      this.optionsRefs[idx] = element;
      // add key listeners to first focusable child element in the menu item
      for (let i = 0; i < this.optionsRefs[idx].childNodes.length; i++) {
        const child = this.optionsRefs[idx].childNodes[i];
        if (typeof child.focus === 'function') {
          child.addEventListener('keydown', this.onKeyDown);
          child.addEventListener('keyup', this.onKeyUp);
          break;
        }
      }
      
    }
  }

  keyHandler(e) {
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp' || e.key === 'Tab') e.preventDefault();
    if (e.key === 'ArrowDown' && !this.props.isOpen) this.props.open();
    this.moveFocusUsingKey(e.key);
  }

  moveFocusUsingKey(keyName) {
    this.setState({
      onFocusIdx: this.getFocusIndexAfterKeyPress(keyName)
    }, () => this.focusOption(this.state.onFocusIdx))
  }

  getFocusIndexAfterKeyPress(keyName) {
    if (keyName === 'ArrowDown') return Math.min(this.state.onFocusIdx + 1, this.props.options.length - 1);
    if (keyName === 'ArrowUp') return Math.max(this.state.onFocusIdx - 1, 0);
    if (keyName === 'Tab') {
      const focusIsAtTheEndAndShouldWrapToBeginning = this.state.onFocusIdx === this.props.options.length - 1;
      if (focusIsAtTheEndAndShouldWrapToBeginning) return 0;
      return this.state.onFocusIdx + 1;
    }
    return this.state.onFocusIdx;
  }

  focusOption(idx) {
    const optionRef = this.optionsRefs[idx];
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
          content = option.text;
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
        onKeyDown={this.keyHandler}
        onFocus={() => this.setState({ onFocusIdx: -1 })}
      >
        { content }
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
                      onClick={() => this.onSelect(option)}
                    >
                      {option.text}
                    </button>
                  );
                }
                return (
                  <li
                    key={option.text || option.key}
                    className={`blx-dropdown-item ${option.disabled ? 'blx-disabled' : ''}`}
                    ref={el => this.setOptionNode(el, idx)}
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
  description: '',
  value: null,
  onChange: () => {},
  autoFocus: false
};


module.exports = closeOnClick(Dropdown);
