const React = require('react');
const PropTypes = require('prop-types');
const classnames = require('classnames');
const ReactLink = require('react-router-dom').Link;


const DropdownItem = (props) => {
  const { forwardedRef, className, style, children, href, selected, setVisible, onClick, ...other } = props;
  const classes = classnames('blx-dropdown-item', className, {
    'blx-disabled': other.disabled,
    'blx-selected': selected
  });

  function clickWrapper(e) {
    onClick(e);
    setVisible(false);
  }

  return (
    <li
      ref={forwardedRef}
      style={style}
      className={classes}
    >
      { href ?
          (<a {...other} href={href}>{children}</a>) :
          (<button onClick={clickWrapper} {...other}>{children}</button>)
      }
    </li>
  );
};

DropdownItem.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  selected: PropTypes.bool,
  href: PropTypes.string
};

DropdownItem.defaultProps = {
  className: '',
  style: null,
  selected: false,
  href: null
};

module.exports = React.forwardRef((props, ref) => (
  <DropdownItem {...props} forwardedRef={ref} />
));
