const React = require('react');
const PropTypes = require('prop-types');
const classnames = require('classnames');
const ReactLink = require('react-router-dom').Link;


const LinkSubTabItem = (props) => {
  const classes = classnames('blx-sub-tab', {
    'blx-active': props.active,
    'blx-hidden': !props.visible,
    'blx-disabled': props.disabled
  });
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

