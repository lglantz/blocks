const React = require('react');
const PropTypes = require('prop-types');

function keyControlledMenu(WrappedComponent) {
  class GenericDropdown extends React.Component {
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
      this.onTriggerFocus = this.onTriggerFocus.bind(this);
    }

    onSelect(e, option) {
      if (option.onClick) {
        option.onClick(e);
      } else if (this.props.onChange) {
        this.props.onChange(option);
      }
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

    onTriggerFocus() {
      this.setState({
        onFocusIdx: -1
      });
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

    render() {
      return (
        <WrappedComponent
          {...this.props}
          optionsRefs={this.optionsRefs}
          onKeyDown={this.onKeyDown}
          onKeyUp={this.onKeyUp}
          onSelect={this.onSelect}
          onTriggerFocus={this.onTriggerFocus}
        />
      );
    }
  }

  GenericDropdown.propTypes = {
    isOpen: PropTypes.bool,
    close: PropTypes.func.isRequired,
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
    onChange: PropTypes.func
  };

  GenericDropdown.defaultProps = {
    isOpen: false,
    options: [],
    onChange: () => {}
  };

  return GenericDropdown;
}

module.exports = keyControlledMenu;
