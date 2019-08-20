const React = require('react');
const PropTypes = require('prop-types');
const classnames = require('classnames');

const useComponentVisible = require('../hooks/useComponentVisible');


const Tooltip = ({ style, className, children, ...other }) => {
  const ref = React.useRef(null);
  const { visible, setVisible } = useComponentVisible({ ref });
  return (
    <div
      style={style}
      className={classnames('blx-tooltip', className)}
      ref={ref}
    >
      {
        React.Children.map(children, child => (
          React.cloneElement(child, { visible, setVisible, ...other }) // to pass closeOnClick props
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

module.exports = Tooltip;

