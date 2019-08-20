const React = require('react');
const PropTypes = require('prop-types');
const classnames = require('classnames');

const DropdownItem = require('./DropdownItem.jsx');
const MoreIcon = require('../icons/MoreIcon.jsx');
const useComponentVisible = require('../hooks/useComponentVisible.jsx');


const PopoverMenu = ({ className, style, trigger, disabled, position, scrollable, children, ...other }) => {
  const ref = React.useRef(null);
  const { visible, setVisible } = useComponentVisible({ ref });

  const classes = classnames('blx-popover-wrapper', className);
  const menuClasses = classnames('blx-popover-menu', {
    'blx-hidden': !visible,
    'blx-popover-is-left': position === 'left',
    'blx-popover-is-right': position === 'right',
    'blx-popover-is-center': position === 'center'
  });
  return (
    <div
      style={style}
      className={classes}
      ref={ref}
    >
      <div className="blx-dropdown blx-popover">
        { React.cloneElement(trigger, { visible, setVisible, disabled }) }
        <div className={menuClasses}>
          <div className="blx-popover-menu-wrapper">
            <ul className={`blx-dropdown-list ${scrollable ? 'blx-scrollable' : ''}`}>
              {
                React.Children.map(children, child => (
                  React.cloneElement(child, { setVisible })
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

PopoverMenu.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  trigger: PropTypes.node.isRequired,
  scrollable: PropTypes.bool,
  position: PropTypes.oneOf([ 'center', 'left', 'right' ]),
  disabled: PropTypes.bool,
  autoFocus: PropTypes.bool
};

PopoverMenu.defaultProps = {
  className: '',
  style: null,
  scrollable: false,
  position: 'center',
  disabled: false,
  autoFocus: false
};


module.exports = PopoverMenu;
