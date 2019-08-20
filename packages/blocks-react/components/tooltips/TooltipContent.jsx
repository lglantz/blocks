const React = require('react');
const PropTypes = require('prop-types');
const classnames = require('classnames');


const TooltipContent = ({ title, lightBg, position, visible, setVisible, children, ...other }) => {
  const messageClasses = classnames(`blx-tooltip-${position}`, {
    'blx-hidden': !visible,
    'blx-light-bg': lightBg,
    'blx-dark-bg': !lightBg,
    'blx-tooltip-titled-message': title,
    'blx-tooltip-message': !title
  });

  return (
    <div className={messageClasses}>
      { title && <h5 className="blx-tooltip-titled-message-title">{title}</h5> }
      <p>
        {children}
      </p>
    </div>
  );
}

TooltipContent.propTypes = {
  title: PropTypes.string,
  lightBg: PropTypes.bool,
  position: PropTypes.oneOf(['bottom', 'top', 'right', 'left']),
  visible: PropTypes.bool.isRequired
};

TooltipContent.defaultProps = {
  title: '',
  lightBg: false,
  position: 'bottom'
};

module.exports = TooltipContent;
