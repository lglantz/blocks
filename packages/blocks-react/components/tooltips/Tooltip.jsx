const React = require('react');
const PropTypes = require('prop-types');
const classnames = require('classnames');

const closeOnClick = require('../wrappers/closeOnClick.jsx');

const Tooltip = (props) => {
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
        { props.title && <h5 className="blx-tooltip-titled-message-title">{props.title}</h5> }
        <p>
          {props.text}
        </p>
      </div>
    </div>
  );
}

Tooltip.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  title: PropTypes.string,
  toggle: PropTypes.func.isRequired,
  trigger: PropTypes.object,
  lightBg: PropTypes.bool,
  position: PropTypes.string, // 'bottom', 'top', 'right', 'left'
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
  isOpen: PropTypes.bool
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

module.exports = closeOnClick(Tooltip);

