const React = require('react');
const PropTypes = require('prop-types');

const DropdownItem = require('./DropdownItem.jsx');
const closeOnClick = require('../wrappers/closeOnClick.jsx');
const keyControlledMenu = require('../wrappers/keyControlledMenu.jsx');


const PopoverMenu = (props) => {
  let menuClasses = 'blx-dropdown-menu';
  if (!props.isOpen) menuClasses += ' blx-hidden';
  if (props.isLeft) {
    menuClasses += ' blx-popover-is-left';
  } else {
    menuClasses += ' blx-popover-is-right';
  }
  return (
    <div className="blx-dropdown-wrapper">
      { props.text &&
          <span className="blx-subtitle blx-popover-text">{props.text}</span>
      }
      <div className="blx-dropdown blx-popover">
        <button
          className="blx-popover-trigger"
          disabled={props.isDisabled}
          onClick={props.toggle}
          title={props.text}
          autoFocus={props.autoFocus}
          onKeyDown={props.onKeyDown}
          onFocus={props.onTriggerFocus}
        >
          <span className={`blx-icon blx-icon-${props.icon}`} />
        </button>
        <ul className={menuClasses}>
          {
            props.options.map((option, idx) => (
              <DropdownItem
                key={option.text || option.key}
                option={option}
                ref={props.optionsRefs[idx]}
                onKeyDown={props.onKeyDown}
                onKeyUp={props.onKeyUp}
                onSelect={props.onSelect}
              />
            ))
          }
        </ul>
      </div>
    </div>
  );
};

PopoverMenu.propTypes = {
  isOpen: PropTypes.bool,
  isLeft: PropTypes.bool,
  toggle: PropTypes.func.isRequired,
  text: PropTypes.string,
  icon: PropTypes.string,
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

PopoverMenu.defaultProps = {
  isOpen: false,
  isLeft: null,
  options: [],
  text: null,
  icon: 'more-horizontal',
  value: null,
  onChange: () => {},
  autoFocus: false
};


module.exports = closeOnClick(keyControlledMenu(PopoverMenu));
