const React = require('react');
const PropTypes = require('prop-types');
const ReactDOM = require('react-dom');

const closeOnClick = require('../wrappers/closeOnClick.jsx');


class Dropdown extends React.Component {
  onSelect(option) {
    if (this.props.onChange) this.props.onChange(option);
    this.props.close();
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
        className={`blx-dropdown-trigger ${this.props.isOpen ? 'active' : ''} ${this.props.isDisabled ? 'blx-disabled' : ''}`}
        disabled={this.props.isDisabled}
        onClick={this.props.toggle}
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
              <label className="blx-dropdown-description">{this.props.description}</label>
            </div>
          )}
          {this.getOptionTrigger() }
          <ul className={`blx-dropdown-menu ${this.props.isOpen ? '' : 'blx-hidden'}`}>
            {
              this.props.options.map(option => {
                let item = null;
                if (option.href) {
                  item = (
                    <a
                      href={option.href}
                    >
                      {option.text}
                    </a>
                  );
                } else {
                  item = (
                    <button
                      onClick={() => this.onSelect(option)}
                    >
                      {option.text}
                    </button>
                  );
                }
                return (
                  <li className="blx-dropdown-item" key={option.text}>
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
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    href: PropTypes.string
  })),
  isDisabled: PropTypes.bool,
  onChange: PropTypes.func
};

Dropdown.defaultProps = {
  isOpen: false,
  options: [],
  text: 'Choose an option',
  description: '',
  value: null,
  onChange: () => {}
};


module.exports = closeOnClick(Dropdown);
