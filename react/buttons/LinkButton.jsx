const React = require('react');
const PropTypes = require('prop-types');
const ReactLink = require('react-router-dom').Link;


const LinkButton = React.forwardRef((props, ref) => {
  const classes = `blx-button ${props.classes} ${props.isDisabled ? 'blx-disabled' : ''}`;

  if (props.useReactLink) {
    return (
      <ReactLink
        className={classes}
        to={props.href}
        disabled={props.isDisabled}
        ref={ref}
      >
        { props.leftIcon && <span className={`blx-icon blx-icon-${props.leftIcon}`} /> }
        <span>{props.text}</span>
        { props.rightIcon && <span className={`blx-icon blx-icon-${props.rightIcon}`} /> }
      </ReactLink>
    );
  }

  return (
    <a
      className={classes}
      href={props.href}
      disabled={props.isDisabled}
      target={props.isExternal ? '_blank' : '_self'}
      ref={ref}
    >
      { props.leftIcon && <span className={`blx-icon blx-icon-${props.leftIcon}`} /> }
      <span>{props.text}</span>
      { props.rightIcon && <span className={`blx-icon blx-icon-${props.rightIcon}`} /> }
    </a>
  );
});

LinkButton.propTypes = {
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  classes: PropTypes.string,
  isDisabled: PropTypes.bool,
  isExternal: PropTypes.bool,
  useReactLink: PropTypes.bool,
  leftIcon: PropTypes.string,
  rightIcon: PropTypes.string
};

LinkButton.defaultProps = {
  classes: 'blx-primary',
  isDisabled: false,
  isExternal: false,
  useReactLink: false,
  leftIcon: null,
  rightIcon: null
};

module.exports = LinkButton;
