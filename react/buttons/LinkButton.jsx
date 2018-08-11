const React = require('react');
const PropTypes = require('prop-types');
const ReactLink = require('react-router-dom').Link;


function LinkButton(props) {
  const classes = `blx-button ${props.classes} ${props.isDisabled ? 'blx-disabled' : ''}`;

  if (props.useReactLink) {
    return (
      <ReactLink
        className={classes}
        to={props.href}
        disabled={props.isDisabled}
      >
        {props.text}
      </ReactLink>
    );
  }

  return (
    <a
      className={classes}
      href={props.href}
      disabled={props.isDisabled}
      target={props.isExternal ? '_blank' : '_self'}
    >
      {props.text}
    </a>
  );
}

LinkButton.propTypes = {
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  classes: PropTypes.string,
  isDisabled: PropTypes.bool,
  isExternal: PropTypes.bool,
  useReactLink: PropTypes.bool
};

LinkButton.defaultProps = {
  classes: 'blx-primary',
  isDisabled: false,
  isExternal: false,
  useReactLink: false
};

module.exports = LinkButton;
