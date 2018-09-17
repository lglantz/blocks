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
    
    this.optionsNodes = this.props.options.map(() => null);
    
    this.arrowKeyHandler = this.arrowKeyHandler.bind(this);
    this.setOptionNode = this.setOptionNode.bind(this);
    this.moveFocusUsingKey = this.moveFocusUsingKey.bind(this);
    this.getFocusIndexAfterKeyPress = this.getFocusIndexAfterKeyPress.bind(this);
    this.focusOption = this.focusOption.bind(this);
  }

  onSelect(option) {
    if (this.props.onChange) this.props.onChange(option);
    this.props.close();
  }

  setOptionNode(element, idx) {
    this.optionsNodes[idx] = element;
  }

  arrowKeyHandler(e) {
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
      else return this.state.onFocusIdx + 1;
    }
  }

  focusOption(idx) {
    this.optionsNodes[idx].focus();
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
        onKeyDown={this.arrowKeyHandler}
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
                      ref={el => this.setOptionNode(el, idx)}
                    >
                      {option.text}
                    </a>
                  );
                } else {
                  item = (
                    <button
                      disabled={option.disabled}
                      onClick={() => this.onSelect(option)}
                      onKeyDown={e => {
                        if (e.key === 'Enter') e.preventDefault();
                        this.arrowKeyHandler(e);
                      }}
                      onKeyUp={e => { if (e.key === 'Enter') this.onSelect(option) }}
                      ref={el => this.setOptionNode(el, idx)}
                    >
                      {option.text}
                    </button>
                  );
                }
                return (
                  <li className={`blx-dropdown-item ${option.disabled ? 'blx-disabled' : ''}`} key={option.text || option.key}>
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
