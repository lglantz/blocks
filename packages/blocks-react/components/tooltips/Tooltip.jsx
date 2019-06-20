const React = require('react');
const PropTypes = require('prop-types');
const classnames = require('classnames');

const closeOnClick = require('../wrappers/closeOnClick.jsx');


const Tooltip = ({ style, className, forwardedRef, children, ...other }) => {
  return (
    <div
      style={style}
      className={classnames('blx-tooltip', className)}
      ref={forwardedRef}
    >
      {
        React.Children.map(children, child => (
          React.cloneElement(child, { ...other }) // to pass closeOnClick props
        ))
      }
    </div>
  );
}

Tooltip.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string
};

Tooltip.defaultProps = {
  style: null,
  className: ''
};

module.exports = closeOnClick(Tooltip);

