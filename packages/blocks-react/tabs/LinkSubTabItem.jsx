const React = require('react');
const PropTypes = require('prop-types');


const LinkSubTabItem = (props) => {
  const classes = `blx-sub-tab ${props.isActive ? 'blx-active' : ''} ${props.isVisible ? '' : 'blx-hidden'} ${props.isDisabled ? 'blx-disabled' : ''}`;
  
  return (
    <div
      style={props.style}
      className={props.className}
    >
      <a className={classes} href={props.href}>{props.text}</a>
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

