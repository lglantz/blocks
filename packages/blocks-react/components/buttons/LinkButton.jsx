const React = require('react');
const PropTypes = require('prop-types');
const classnames = require('classnames');
const ReactLink = require('react-router-dom').Link;


const LinkButton = React.forwardRef((props, ref) => {
  const classes = classnames('blx-button', props.className, {
    'blx-disabled': props.disabled
  });

  if (props.useReactLink) {
    return (
      <ReactLink
        style={props.style}
        className={classes}
        to={props.href}
        disabled={props.disabled}
        ref={ref}
      >
        { props.children }
      </ReactLink>
    );
  }

  return (
    <a
      style={props.style}
      className={classes}
      href={props.href}
      target={props.isExternal ? '_blank' : '_self'}
      ref={ref}
    >
      { props.children }
    </a>
  );
});

LinkButton.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  href: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  isExternal: PropTypes.bool,
  useReactLink: PropTypes.bool
};

LinkButton.defaultProps = {
  className: 'blx-primary',
  style: null,
  disabled: false,
  isExternal: false,
  useReactLink: false
};

module.exports = LinkButton;
