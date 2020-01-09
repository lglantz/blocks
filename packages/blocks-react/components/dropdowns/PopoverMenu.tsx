import * as React from 'react';
import classnames from 'classnames';

import DropdownItem from './DropdownItem';
import MoreIcon from '../icons/MoreIcon';
import closeOnClick from '../wrappers/closeOnClick';
import keyControlledMenu from '../wrappers/keyControlledMenu';


const PopoverMenu: React.FunctionComponent<PopoverMenuTypes> = (props) => {
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
      //@ts-ignore
      ref={props.forwardedRef}
    >
      {props.text &&
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
          {props.icon}
        </button>
        <div className={menuClasses}>
          <div className="blx-popover-menu-wrapper">
            <ul className={`blx-dropdown-list ${props.scrollable ? 'blx-scrollable' : ''}`}>
              {
                props.options.map((option, idx) => (
                  <DropdownItem
                    key={option.text || option.key}
                    //@ts-ignore
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

type PopoverMenuTypes = {
  className?: string,
  style?: any,
  isOpen?: boolean,
  scrollable?: boolean,
  position: 'center' | 'left'| 'right',
  toggle: any,
  text?: string,
  icon?: any,
  value?: string | number,
  options?: {
    text: string | number,
    disabled: boolean,
    value: string | number,
    href: string,
    element: any,
    key: string
  }[],
  disabled?: boolean,
  onChange?: any,
  autoFocus?: boolean,
  onSelect?: any,
  onKeyDown?: any,
  onKeyUp?: any,
  onTriggerFocus?: any,
  optionsRefs: any[]
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
  onChange: () => { },
  autoFocus: false
};


export default closeOnClick(keyControlledMenu(PopoverMenu));
