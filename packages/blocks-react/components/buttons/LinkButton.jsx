const React = require('react');
const PropTypes = require('prop-types');
const classnames = require('classnames');
const ReactLink = require('react-router-dom').Link;


const LinkButton = React.forwardRef((props, ref) => {
  const { icon, className, leftIcon, text, rightIcon, href, useReactLink, isExternal, ...other } = props;
  const classes = classnames('blx-button', className, {
    'blx-icon-button': !!icon,
    'blx-disabled': other.disabled
  });

  if (useReactLink) {
    return (
      <ReactLink
        className={classes}
        to={href}
        ref={ref}
        {...other}
      >
        { leftIcon }
        { text && <span>{text}</span> }
        { icon }
        { rightIcon }
      </ReactLink>
    );
  }

  return (
    <a
      className={classes}
      href={href}
      target={isExternal ? '_blank' : '_self'}
      ref={ref}
      {...other}
    >
      { leftIcon }
      { text && <span>{text}</span> }
      { icon }
      { rightIcon }
    </a>
  );
});

LinkButton.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string.isRequired,
  text: PropTypes.string,
  isExternal: PropTypes.bool,
  useReactLink: PropTypes.bool,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  icon: PropTypes.node,
  disabled: PropTypes.bool
};

LinkButton.defaultProps = {
  className: 'blx-primary',
  text: '',
  isExternal: false,
  useReactLink: false,
  leftIcon: null,
  rightIcon: null,
  icon: null,
  disabled: false
};

module.exports = LinkButton;
