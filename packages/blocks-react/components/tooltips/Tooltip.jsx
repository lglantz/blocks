const React = require('react');
const PropTypes = require('prop-types');

const closeOnClick = require('../wrappers/closeOnClick.jsx');

const Tooltip = (props) => {
  let messageClasses = `blx-tooltip-${props.position} `;
  messageClasses += props.lightBg ? 'blx-light-bg ' : 'blx-dark-bg ';
  messageClasses += props.title ? 'blx-tooltip-titled-message ' : 'blx-tooltip-message ';
  if (!props.isOpen) messageClasses += 'blx-hidden ';

  return (
    <div
      style={props.style}
      className={`blx-tooltip ${props.className}`}
      ref={props.forwardedRef}
    >
      <button
        className="blx-tooltip-trigger"
        onClick={(e) => {
          e.target.closest('.blx-tooltip-trigger').focus();
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
  text: PropTypes.string,
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

