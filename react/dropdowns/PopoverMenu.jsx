const React = require('react');
const PropTypes = require('prop-types');
const ReactDOM = require('react-dom');

const closeOnClick = require('../wrappers/closeOnClick.jsx');


const PopoverMenu = props => (
  <div className="blx-dropdown-wrapper">
    {
      props.text && <span className="blx-subtitle blx-popover-text">{props.text}</span>
    }
    <div className="blx-dropdown blx-popover">
      <button
        className="blx-popover-trigger"
        onClick={props.toggle}
      >
        <span className={`blx-icon blx-icon-${props.icon}`} />
      </button>
      <ul className={`blx-dropdown-menu ${props.isOpen ? '' : 'blx-hidden'} ${props.isLeft ? 'blx-popover-is-left' : 'blx-popover-is-right'}`}>
        {
          props.options.map((option) => {
            let item = null;
            if (option.element) {
              item = option.element;
            } else if (option.href) {
              item = (
                <a
                  href={option.href}
                  target={option.newTab ? '_blank' : null}
                >
                  {option.text}
                </a>
              );
            } else {
              item = (
                <button
                  onClick={option.onClick}
                >
                  {option.text}
                </button>
              );
            }
            return (
              <li className={`blx-dropdown-item ${option.disabled ? 'blx-disabled' : ''}`} key={option.text}>
                {item}
              </li>
            );
          })
        }
      </ul>
    </div>
  </div>
);

PopoverMenu.propTypes = {
  text: PropTypes.string,
  isOpen: PropTypes.bool,
  isLeft: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string,
    onClick: PropTypes.func,
    href: PropTypes.string,
    newTab: PropTypes.bool,
    element: PropTypes.object
  })),
  toggle: PropTypes.func.isRequired,
  icon: PropTypes.string
};

PopoverMenu.defaultProps = {
  text: null,
  isOpen: false,
  isLeft: true,
  options: [],
  icon: 'more'
};


module.exports = closeOnClick(PopoverMenu);
