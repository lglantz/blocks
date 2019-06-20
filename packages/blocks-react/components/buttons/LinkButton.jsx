const React = require('react');
const PropTypes = require('prop-types');
const classnames = require('classnames');
const ReactLink = require('react-router-dom').Link;


const LinkButton = React.forwardRef((props, ref) => {
  const classes = classnames('blx-button', props.className, {
    'blx-icon-button': !!props.icon,
    'blx-disabled': props.isDisabled
  });

  if (props.useReactLink) {
    return (
      <ReactLink
        style={props.style}
        className={classes}
        to={props.href}
        disabled={props.isDisabled}
        ref={ref}
      >
        { props.leftIcon }
        { props.text && <span>{props.text}</span> }
        { props.icon }
        { props.rightIcon }
      </ReactLink>
    );
  }

  return (
    <a
      style={props.style}
      className={classes}
      href={props.href}
      disabled={props.isDisabled}
      target={props.isExternal ? '_blank' : '_self'}
      ref={ref}
    >
      { props.leftIcon }
      { props.text && <span>{props.text}</span> }
      { props.icon }
      { props.rightIcon }
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
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  icon: PropTypes.node
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
  icon: null
};

module.exports = LinkButton;
