const React = require('react');
const PropTypes = require('prop-types');

const DropdownItem = require('./DropdownItem.jsx');
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

    this.onSelect = this.onSelect.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);

    this.moveFocusUsingKey = this.moveFocusUsingKey.bind(this);
    this.getFocusIndexAfterKeyPress = this.getFocusIndexAfterKeyPress.bind(this);
    this.focusOption = this.focusOption.bind(this);
  }

  onSelect(e, option) {
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

  onKeyUp(e, option) {
    if (['Enter', ' '].indexOf(e.key) > -1) {
      this.onSelect(e, option);
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

  getTrigger() {
    let triggerButtonContent = null;
    let content = this.props.text;
    let triggerClassNames = '';
    if (this.props.isPopover) {
      triggerClassNames += 'blx-popover-trigger';
      triggerButtonContent = (
        <span className={`blx-icon blx-icon-${this.props.popoverIcon}`} />
      );
    } else {
      triggerClassNames += 'blx-dropdown-trigger';
      if (this.props.isOpen) triggerClassNames += ' blx-active';
      if (this.props.isDisabled) triggerClassNames += ' blx-disabled';
      if (this.props.value) triggerClassNames += ' blx-dropdown-trigger-placeholder';

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
      triggerButtonContent = (
        <span className={`blx-dropdown-text`}>{ content }</span>
      );
    }

    return (
      <button
        className={triggerClassNames}
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
        {triggerButtonContent}
      </button>
    );
  }

  getDropdownDescription() {
    if (this.props.description) {
      return (
        <div>
          <label className="blx-ui-text">{this.props.description}</label>
        </div>
      );
    }
  }

  getPopoverText() {
    if (this.props.isPopover) {
      return (
        <span className="blx-subtitle blx-popover-text">{this.props.text}</span>
      );
    }
  }

  render() {
    let menuClasses = 'blx-dropdown-menu';
    if (!this.props.isOpen) menuClasses += ' blx-hidden';
    if (this.props.isPopover) {
      if (this.props.isLeft) {
        menuClasses += ' blx-popover-is-left';
      } else {
        menuClasses += ' blx-popover-is-right';
      }
    }
    return (
      <div className="blx-dropdown-wrapper">
        {this.getPopoverText()}
        <div className={`blx-dropdown ${this.props.isPopover ? 'blx-popover': ''}`}>
          {this.getDropdownDescription()}
          {this.getTrigger()}
          <ul className={menuClasses}>
            {
              this.props.options.map((option, idx) => (
                <DropdownItem
                  key={option.text || option.key}
                  option={option}
                  ref={this.optionsRefs[idx]}
                  onKeyDown={this.onKeyDown}
                  onKeyUp={this.onKeyUp}
                  onSelect={this.onSelect}
                />
              ))
            }
          </ul>
        </div>
      </div>
    );
  }
};

Dropdown.propTypes = {
  isOpen: PropTypes.bool,
  isLeft: PropTypes.bool,
  isPopover: PropTypes.bool,
  toggle: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired,
  text: PropTypes.string,
  icon: PropTypes.string,
  popoverIcon: PropTypes.string,
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
  isLeft: null,
  isPopover: false,
  options: [],
  text: 'Choose an option',
  icon: null,
  popoverIcon: 'more-horizontal',
  description: '',
  value: null,
  onChange: () => {},
  autoFocus: false
};


module.exports = closeOnClick(Dropdown);
