import * as React from 'react';

export default function keyControlledMenu(WrappedComponent): any {
  class GenericDropdown extends React.Component<GenericDropdownPropTypes, GenericDropdownState> {
    static defaultProps = {
      isOpen: false,
      options: [],
      onChange: () => { }
    };
    constructor(props) {
      super(props);

      const optionsRefs = [];
      for (let i = 0; i < this.props.options.length; i++) {
        optionsRefs[i] = React.createRef();
      }

      this.state = {
        onFocusIdx: -1,
        optionsRefs
      };

      this.onSelect = this.onSelect.bind(this);
      this.onKeyDown = this.onKeyDown.bind(this);
      this.onKeyUp = this.onKeyUp.bind(this);
      this.onTriggerFocus = this.onTriggerFocus.bind(this);
    }

    componentDidUpdate(prevProps) {
      if (prevProps.options !== this.props.options) {
        const optionsRefs = [];
        for (let i = 0; i < this.props.options.length; i++) {
          optionsRefs[i] = React.createRef();
        }
        this.setState({ optionsRefs });
      }
    }

    onSelect(e, option) {
      if (option.onClick) {
        option.onClick(e);
      } else if (this.props.onChange) {
        this.props.onChange(option);
      }
      this.props.close(e);
    }

    onKeyDown(e) {
      if (e.key === 'Tab' && this.props.isOpen) {
        this.props.close(e);
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
        this.props.close(e);
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
      const optionRef = this.state.optionsRefs[idx].current;
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
          optionsRefs={this.state.optionsRefs}
          onKeyDown={this.onKeyDown}
          onKeyUp={this.onKeyUp}
          onSelect={this.onSelect}
          onTriggerFocus={this.onTriggerFocus}
        />
      );
    }
  }

  type GenericDropdownPropTypes = {
    isOpen?: boolean,
    close: any,
    open: any,
    options?: {
      text: string | number,
      disabled: boolean,
      value: string | number,
      href: string,
      element: any,
      key: string
    }[],
    onChange: any
  };

  type GenericDropdownState = {
    optionsRefs: any[],
    onFocusIdx: number,
  }

  return GenericDropdown;
}

// export default keyControlledMenu;
