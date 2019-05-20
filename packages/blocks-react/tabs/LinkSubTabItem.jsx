const React = require('react');
const PropTypes = require('prop-types');


const LinkSubTabItem = (props) => {
  const classes = `blx-sub-tab ${props.isActive ? 'blx-active' : ''} ${props.isVisible ? '' : 'blx-hidden'} ${props.isDisabled ? 'blx-disabled' : ''}`;
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
  isVisible: PropTypes.bool,
  isActive: PropTypes.bool,
  isDisabled: PropTypes.bool
};

LinkSubTabItem.defaultProps = {
  className: '',
  style: null,
  isVisible: true,
  isActive: false,
  isDisabled: false
};

module.exports = LinkSubTabItem;

