const React = require('react');
const PropTypes = require('prop-types');


class DropdownItem extends React.Component {
  constructor(props) {
    super(props);

    this.onSelect = this.onClick.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
  }

  onClick(e) {
    e.stopPropagation();
    this.props.onSelect(e, this.props.option);
  }

  onKeyDown(e) {
    this.props.onKeyDown(e, this.props.option);
  }

  onKeyUp(e) {
    this.props.onKeyUp(e, this.props.option);
  }

  getLinkItem() {
    return (
      <a
        href={this.props.option.href}
        target={this.props.option.newTab ? '_blank' : null}
        disabled={this.props.option.disabled}
        title={this.props.option.text}
        onKeyDown={this.onKeyDown}
        onKeyUp={this.onKeyUp}
        onClick={this.onSelect}
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
        onClick={this.onSelect}
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

    let classes = 'blx-dropdown-item ';
    if (this.props.option.disabled) classes += 'blx-disabled ';
    if (this.props.isSelected) classes += 'blx-selected ';

    return (
      <li
        style={this.props.style}
        className={`${classes} ${this.props.className}`}
        ref={this.props.forwardedRef}
      >
        {item}
      </li>
    );
  }
}

DropdownItem.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  option: PropTypes.shape({
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
  }).isRequired,
  isSelected: PropTypes.bool,
  onKeyDown: PropTypes.func,
  onKeyUp: PropTypes.func,
  onSelect: PropTypes.func
};

DropdownItem.defaultProps = {
  className: '',
  style: null,
  isSelected: false,
  onKeyDown: () => {},
  onKeyUp: () => {},
  onSelect: () => {}
};

module.exports = React.forwardRef((props, ref) => (
  <DropdownItem {...props} forwardedRef={ref} />
));
