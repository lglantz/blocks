import * as React from 'react';
import classnames from 'classnames';
import Link from 'react-router-dom/Link';

class DropdownItem extends React.Component<DropdownItemProps, {}> {
  static defaultProps = {
    className: '',
    style: null,
    selected: false,
    onKeyDown: () => { },
    onKeyUp: () => { },
    onSelect: () => { }
  };
  constructor(props) {
    super(props);
  }

  onClick = (e) => {
    e.stopPropagation();
    this.props.onSelect(e, this.props.option);
  }

  onKeyDown = (e) => {
    this.props.onKeyDown(e, this.props.option);
  }

  onKeyUp = (e) => {
    this.props.onKeyUp(e, this.props.option);
  }

  getLinkItem() {
    if (this.props.option.useReactLink) {
      return (
        //@ts-ignore
        <Link
          to={this.props.option.href}
          disabled={this.props.option.disabled}
          onKeyDown={this.onKeyDown}
          onKeyUp={this.onKeyUp}
          onClick={this.onClick}
        >
          {this.props.option.text || this.props.option.element}
        </Link>
      );
    }

    return (
      <a
        href={this.props.option.href}
        target={this.props.option.newTab ? '_blank' : null}
        //@ts-ignore
        disabled={this.props.option.disabled}
        title={this.props.option.text}
        onKeyDown={this.onKeyDown}
        onKeyUp={this.onKeyUp}
        onClick={this.onClick}
      >
        {this.props.option.text || this.props.option.element}
      </a>
    );
  }

  getButtonItem() {
    return (
      <button
        disabled={this.props.option.disabled}
        title={this.props.option.text}
        onKeyDown={this.onKeyDown}
        onKeyUp={this.onKeyUp}
        onClick={this.onClick}
      >
        {this.props.option.text || this.props.option.element}
      </button>
    );
  }

  render() {
    let item = null;
    if (this.props.option.href) {
      item = this.getLinkItem();
    } else {
      item = this.getButtonItem();
    }

    const classes = classnames('blx-dropdown-item', this.props.className, {
      'blx-disabled': this.props.option.disabled,
      'blx-selected': this.props.selected
    })

    return (
      <li
        style={this.props.style}
        className={classes}
        ref={this.props.forwardedRef}
      >
        {item}
      </li>
    );
  }
}

type DropdownItemProps = {
  className?: string,
  style?: any,//object,
  option?: {
    text: string,
    disabled: boolean,
    value: string | number,
    href: string,
    element: any, //node,
    key: string,
    useReactLink: boolean,
    newTab?: boolean,
  },
  selected?: boolean,
  onKeyDown?: any,//func,
  onKeyUp?: any,//func,
  onSelect?: any,//func
  forwardedRef: any
};

DropdownItem.defaultProps = {
  className: '',
  style: null,
  selected: false,
  onKeyDown: () => { },
  onKeyUp: () => { },
  onSelect: () => { }
};
export default React.forwardRef((props, ref) => (
  <DropdownItem {...props} forwardedRef={ref} />
));
