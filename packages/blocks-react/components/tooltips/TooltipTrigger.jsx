const React = require('react');
const PropTypes = require('prop-types');

const TooltipTrigger = ({ visible, setVisible, children, ...other }) => {
  return (
    <button
      className="blx-tooltip-trigger"
      onClick={(e) => {
        e.target.closest('.blx-tooltip-trigger').focus();
        setVisible(!visible);
      }}
    >
      { children }
    </button>
  );
}

TooltipTrigger.propTypes = {
  visible: PropTypes.bool.isRequired,
  setVisible: PropTypes.func.isRequired
};

module.exports = TooltipTrigger;

