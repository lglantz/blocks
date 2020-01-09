import * as React from 'react';
import classnames from 'classnames';
import closeOnClick from '../wrappers/closeOnClick';

const Tooltip: React.FunctionComponent<TooltipPropTypes> = (props) => {
  const messageClasses = classnames(`blx-tooltip-${props.position}`, {
    'blx-hidden': !props.isOpen,
    'blx-light-bg': props.lightBg,
    'blx-dark-bg': !props.lightBg,
    'blx-tooltip-titled-message': props.title,
    'blx-tooltip-message': !props.title
  });

  return (
    <div
      style={props.style}
      className={classnames('blx-tooltip', props.className)}
      ref={props.forwardedRef}
    >
      <button
        className="blx-tooltip-trigger"
        onClick={(e) => {
          e.currentTarget.focus();
          props.toggle(e);
        }}
      >
        {props.trigger}
      </button>
      <div className={messageClasses}>
        {props.title && <h5 className="blx-tooltip-titled-message-title">{props.title}</h5>}
        <p>
          {props.text}
        </p>
      </div>
    </div>
  );
}

type TooltipPropTypes = {
  style?: any,
  className?: string,
  title?: string,
  toggle: any, //function
  trigger?: any,
  lightBg?: boolean,
  position?: 'bottom', 'top', 'right', 'left'
  text?: string | any,
  isOpen?: boolean,
  forwardedRef: any,
};

Tooltip.defaultProps = {
  style: null,
  className: '',
  title: '',
  trigger: null,
  lightBg: false,
  position: 'bottom',
  text: '',
  isOpen: false
};
export default closeOnClick(Tooltip);

