const React = require('react');
const PropTypes = require('prop-types');
const ReactLink = require('react-router-dom').Link;


const LinkButton = React.forwardRef((props, ref) => {
  let classes = 'blx-button ';
  if (props.iconName) classes += 'blx-icon-button ';
  if (props.isDisabled) classes += 'blx-disabled ';

  if (props.useReactLink) {
    return (
      <ReactLink
        style={props.style}
        className={`${classes} ${props.className}`}
        to={props.href}
        disabled={props.isDisabled}
        ref={ref}
      >
        { props.leftIcon && <span className={`blx-icon blx-icon-${props.leftIcon}`} /> }
        { props.text && <span>{props.text}</span> }
        { props.iconName && <span className={`blx-icon blx-icon-${props.iconName}`} /> }
        { props.rightIcon && <span className={`blx-icon blx-icon-${props.rightIcon}`} /> }
      </ReactLink>
    );
  }

  return (
    <a
      style={props.style}
      className={`${classes} ${props.className}`}
      href={props.href}
      disabled={props.isDisabled}
      target={props.isExternal ? '_blank' : '_self'}
      ref={ref}
    >
      { props.leftIcon && <span className={`blx-icon blx-icon-${props.leftIcon}`} /> }
      { props.text && <span>{props.text}</span> }
      { props.iconName && <span className={`blx-icon blx-icon-${props.iconName}`} /> }
      { props.rightIcon && <span className={`blx-icon blx-icon-${props.rightIcon}`} /> }
    </a>
  );
});

LinkButton.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  href: PropTypes.string.isRequired,
  text: PropTypes.string,
  isDisabled: PropTypes.bool,
  isExternal: PropTypes.bool,
  useReactLink: PropTypes.bool,
  leftIcon: PropTypes.string,
  rightIcon: PropTypes.string,
  iconName: PropTypes.string
};

LinkButton.defaultProps = {
  className: 'blx-primary',
  style: null,
  text: '',
  isDisabled: false,
  isExternal: false,
  useReactLink: false,
  leftIcon: null,
  rightIcon: null,
  iconName: null
};

module.exports = LinkButton;
