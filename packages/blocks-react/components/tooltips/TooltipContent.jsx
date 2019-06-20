const React = require('react');
const PropTypes = require('prop-types');
const classnames = require('classnames');


const TooltipContent = (props) => {
  const messageClasses = classnames(`blx-tooltip-${props.position}`, {
    'blx-hidden': !props.isOpen,
    'blx-light-bg': props.lightBg,
    'blx-dark-bg': !props.lightBg,
    'blx-tooltip-titled-message': props.title,
    'blx-tooltip-message': !props.title
  });

  return (
    <div className={messageClasses}>
      { props.title && <h5 className="blx-tooltip-titled-message-title">{props.title}</h5> }
      <p>
        {props.children}
      </p>
    </div>
  );
}

TooltipContent.propTypes = {
  title: PropTypes.string,
  lightBg: PropTypes.bool,
  position: PropTypes.string, // 'bottom', 'top', 'right', 'left'
  isOpen: PropTypes.bool
};

TooltipContent.defaultProps = {
  title: '',
  lightBg: false,
  position: 'bottom',
  isOpen: false
};

module.exports = TooltipContent;

