const React = require('react');
const PropTypes = require('prop-types');
const classnames = require('classnames');

const useComponentVisible = require('../hooks/useComponentVisible.jsx');


const Dropdown = ({
  className,
  scrollable,
  trigger,
  label,
  valid,
  invalidErrorMessage,
  afterCloseOnClick,
  children,
  ...other }) => {
  const ref = React.useRef(null);
  const { visible, setVisible } = useComponentVisible({ ref });
  return (
    <div
      className={classnames('blx-dropdown-wrapper', className)}
      ref={ref}
      {...other}
    > 
      { label &&
          <label className={classnames('blx-ui-text', { 'blx-disabled': other.disabled })}>
            {label}
          </label>
      }
      { !valid && invalidErrorMessage &&
          <span className="blx-invalid-input-message">{invalidErrorMessage}</span>
      }
      { React.cloneElement(trigger, { visible, setVisible }) }
      <div className={classnames('blx-dropdown-menu', { 'blx-hidden': !visible })}>
        <ul className={classnames('blx-dropdown-list', { 'blx-scrollable': scrollable })}>
          {
            React.Children.map(children, child => (
              React.cloneElement(child, { setVisible })
            ))
          }
        </ul>
      </div>
    </div>
  );
};

Dropdown.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  scrollable: PropTypes.bool,
  label: PropTypes.string,
  trigger: PropTypes.node.isRequired,
  afterCloseOnClick: PropTypes.func,
  valid: PropTypes.bool,
  invalidErrorMessage: PropTypes.string
};

Dropdown.defaultProps = {
  className: '',
  style: null,
  scrollable: false,
  label: null,
  afterCloseOnClick: () => {},
  valid: true,
  invalidErrorMessage: ''
};

module.exports = Dropdown;
