const React = require('react');
const PropTypes = require('prop-types');
const classnames = require('classnames');

const DropdownItem = require('./DropdownItem.jsx');
const MoreIcon = require('../icons/MoreIcon.jsx');
const closeOnClick = require('../wrappers/closeOnClick.jsx');
const keyControlledMenu = require('../wrappers/keyControlledMenu.jsx');


const PopoverMenu = (props) => {
  const classes = classnames('blx-popover-wrapper', props.className);
  const triggerClasses = classnames('blx-popover-trigger', {
    'blx-active': props.isOpen,
    'blx-disabled': props.disabled
  });
  const menuClasses = classnames('blx-popover-menu', {
    'blx-hidden': !props.isOpen,
    'blx-popover-is-left': props.position === 'left',
    'blx-popover-is-right': props.position === 'right',
    'blx-popover-is-center': props.position === 'center'
  });
  return (
    <div
      style={props.style}
      className={classes}
      ref={props.forwardedRef}
    >
      { props.text &&
          <span className="blx-h5">{props.text}</span>
      }
      <div className="blx-dropdown blx-popover">
        <button
          className={triggerClasses}
          disabled={props.disabled}
          onClick={props.toggle}
          title={props.text}
          autoFocus={props.autoFocus}
          onKeyDown={props.onKeyDown}
          onFocus={props.onTriggerFocus}
        >
          { props.icon }
        </button>
        <div className={menuClasses}>
          <div className="blx-popover-menu-wrapper">
            <ul className={`blx-dropdown-list ${props.scrollable ? 'blx-scrollable' : ''}`}>
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
      </div>
    </div>
  );
};

PopoverMenu.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  isOpen: PropTypes.bool,
  scrollable: PropTypes.bool,
  position: PropTypes.string, // 'center', 'left', 'right'
  toggle: PropTypes.func.isRequired,
  text: PropTypes.string,
  icon: PropTypes.node,
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
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  autoFocus: PropTypes.bool,
  // FIXME: PropTypes.instanceOf(Element) breaks under server side rendering b/c Element is not in context
  // See: https://github.com/facebook/prop-types/issues/240#issuecomment-455222878
  // forwardedRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }).isRequired
};

PopoverMenu.defaultProps = {
  className: '',
  style: null,
  isOpen: false,
  scrollable: false,
  position: 'center',
  options: [],
  text: null,
  icon: <MoreIcon />,
  value: null,
  onChange: () => {},
  autoFocus: false
};


module.exports = closeOnClick(keyControlledMenu(PopoverMenu));
