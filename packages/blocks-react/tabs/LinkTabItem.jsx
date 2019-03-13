const React = require('react');
const PropTypes = require('prop-types');
const ReactLink = require('react-router-dom').Link;


const LinkTabItem = (props) => {
  const classes = `blx-tab-item ${props.isActive ? 'blx-active' : ''}`;
  const link = props.useReactLink ?
    <ReactLink className={classes} to={props.href}>{props.text}</ReactLink> :
    <a className={classes} href={props.href}>{props.text}</a>;

  return <li>{ link }{ props.children }</li>;
};

LinkTabItem.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
  isDisabled: PropTypes.bool,
  useReactLink: PropTypes.bool
};

LinkTabItem.defaultProps = {
  isActive: false,
  isDisabled: false,
  useReactLink: false
};

module.exports = LinkTabItem;

