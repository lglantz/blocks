const React = require('react');
const PropTypes = require('prop-types');
const ReactLink = require('react-router-dom').Link;


const LinkButton = React.forwardRef((props, ref) => {
  let classes = 'blx-button ';
  if (props.disabled) classes += 'blx-disabled ';

  if (props.useReactLink) {
    return (
      <ReactLink
        style={props.style}
        className={`${classes} ${props.className}`}
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
      className={`${classes} ${props.className}`}
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
