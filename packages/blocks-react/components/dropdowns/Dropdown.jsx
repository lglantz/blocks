const React = require('react');
const PropTypes = require('prop-types');
const classnames = require('classnames');

const DropdownItem = require('./DropdownItem.jsx');
const DownIcon = require('../icons/DownIcon.jsx');
const closeOnClick = require('../wrappers/closeOnClick.jsx');
const keyControlledMenu = require('../wrappers/keyControlledMenu.jsx');

const DropdownMenu = (props) => {
  let triggerContent = props.text;
  const triggerClassNames = classnames('blx-dropdown-trigger', {
    'blx-active': props.isOpen,
    'blx-disabled': props.disabled,
    'blx-invalid': !props.isValid
  });

  if (props.value) {
    for (let i = 0; i < props.options.length; i++) {
      const option = props.options[i];
      if (option.value === props.value) {
        triggerContent = option.text || option.triggerContent || option.element;
        break;
      }
    }
  }

  return (
    <div
      style={props.style}
      className={classnames('blx-dropdown-wrapper', props.className)}
      ref={props.forwardedRef}
    >
      <div className="blx-dropdown">

        {/* LABEL */}
        { props.label && <label className={`blx-ui-text ${props.disabled ? 'blx-disabled' : ''}`}>
            {props.label}
          </label>
        }

        {/* TRIGGER */}
        <button
          className={triggerClassNames}
          disabled={props.disabled}
          onClick={props.toggle}
          title={triggerContent}
          autoFocus={props.autoFocus}
          onKeyDown={props.onKeyDown}
          onFocus={props.onTriggerFocus}
        >
          { props.icon }
          <span className={props.value ? 'blx-dropdown-text' : 'blx-dropdown-placeholder'}>
            { triggerContent }
          </span>
          <DownIcon className="blx-dropdown-arrow" />
        </button>

        {/* DROPDOWN MENU */}
        <div className={classnames('blx-dropdown-menu', {'blx-hidden': !props.isOpen})}>
          <ul className={classnames('blx-dropdown-list', {'blx-scrollable': props.scrollable})}>
            {
              props.options.map((option, idx) => (
                <DropdownItem
                  key={option.text || option.key}
                  option={option}
                  ref={props.optionsRefs[idx]}
                  selected={props.value === option.value}
                  onKeyDown={props.onKeyDown}
                  onKeyUp={props.onKeyUp}
                  onSelect={props.onSelect}
                />
              ))
            }
          </ul>
        </div>
      </div>
      {/* INVALID MESSAGE */}
      { !props.isValid && <span className="blx-invalid-input-message">{props.invalidErrorMessage}</span> }
    </div>
  );
};

DropdownMenu.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  isOpen: PropTypes.bool,
  scrollable: PropTypes.bool,
  toggle: PropTypes.func.isRequired,
  text: PropTypes.string,
  icon: PropTypes.node,
  label: PropTypes.string,
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
    triggerContent: PropTypes.string,
    href: PropTypes.string,
    element: PropTypes.node,
    key: PropTypes.string
  })),
  disabled: PropTypes.bool,
  onSelect: PropTypes.func,
  autoFocus: PropTypes.bool,
  isValid: PropTypes.bool,
  invalidErrorMessage: PropTypes.string,
  // FIXME: PropTypes.instanceOf(Element) breaks under server side rendering b/c Element is not in context
  // See: https://github.com/facebook/prop-types/issues/240#issuecomment-455222878
  // forwardedRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }).isRequired
};

DropdownMenu.defaultProps = {
  className: '',
  style: null,
  isOpen: false,
  scrollable: false,
  options: [],
  text: 'Choose an option',
  icon: null,
  label: '',
  value: null,
  triggerContent: null,
  onSelect: () => {},
  autoFocus: false,
  isValid: true,
  invalidErrorMessage: null
};


module.exports = closeOnClick(keyControlledMenu(DropdownMenu));
