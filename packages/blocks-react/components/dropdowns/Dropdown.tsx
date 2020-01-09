import * as React from 'react';
import classnames from 'classnames';

import DropdownItem from './DropdownItem';
import DownIcon from '../icons/DownIcon';
import closeOnClick from '../wrappers/closeOnClick';
import keyControlledMenu from '../wrappers/keyControlledMenu';

const DropdownMenu = (props:DropdownMenuPropTypes) => {
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
      //@ts-ignore
      ref={props.forwardedRef}
    >
      <div className="blx-dropdown">

        {/* LABEL */}
        {props.label && <label className={`blx-ui-text ${props.disabled ? 'blx-disabled' : ''}`}>
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
          {props.icon}
          <span className={props.value ? 'blx-dropdown-text' : 'blx-dropdown-placeholder'}>
            {triggerContent}
          </span>
          <DownIcon className="blx-dropdown-arrow" />
        </button>

        {/* DROPDOWN MENU */}
        <div className={classnames('blx-dropdown-menu', { 'blx-hidden': !props.isOpen })}>
          <ul className={classnames('blx-dropdown-list', { 'blx-scrollable': props.scrollable })}>
            {
              props.options.map((option, idx) => (
                <DropdownItem
                  key={option.text || option.key}
                  //@ts-ignore
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
      {!props.isValid && <span className="blx-invalid-input-message">{props.invalidErrorMessage}</span>}
    </div>
  );
};

type DropdownMenuPropTypes = {
  className?: string,
  style?: any,
  isOpen?: boolean,
  scrollable?: boolean,
  toggle: any,
  text?: string,
  icon?: any,
  label?: string,
  value?: string | number,
  options?: {
    text: string | number,
    disabled: boolean,
    value: string | number,
    triggerContent: string,
    href: string,
    element:any,
    key: string
  }[],
  disabled?: boolean,
  onSelect?: any,
  autoFocus?: boolean,
  isValid?: boolean,
  invalidErrorMessage?: string,
  onKeyDown?: any,
  onKeyUp?: any,
  onTriggerFocus?: any,
  optionsRefs: any[]
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
  onSelect: () => { },
  autoFocus: false,
  isValid: true,
  invalidErrorMessage: null
};

export default closeOnClick(keyControlledMenu(DropdownMenu)) as React.FunctionComponent<DropdownMenuPropTypes>;
