const React = require('react');
const PropTypes = require('prop-types');
const ReactLink = require('react-router-dom').Link;


const LinkSubTabItem = (props) => {
  const classes = `blx-sub-tab ${props.active ? 'blx-active' : ''} ${props.visible ? '' : 'blx-hidden'} ${props.disabled ? 'blx-disabled' : ''}`;
  const link = props.useReactLink ?
    <ReactLink className={classes} to={props.href}>{props.text}</ReactLink> :
    <a className={classes} href={props.href}>{props.text}</a>;
    
  return (
    <div
      style={props.style}
      className={props.className}
    >
      { link }
      { props.children }
    </div>
  );
}

LinkSubTabItem.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  text: PropTypes.string.isRequired,
  visible: PropTypes.bool,
  active: PropTypes.bool,
  disabled: PropTypes.bool
};

LinkSubTabItem.defaultProps = {
  className: '',
  style: null,
  visible: true,
  active: false,
  disabled: false
};

module.exports = LinkSubTabItem;

