const React = require('react');
const PropTypes = require('prop-types');

const TooltipTrigger = (props) => {
  return (
    <button
      className="blx-tooltip-trigger"
      onClick={(e) => {
        e.target.closest('.blx-tooltip-trigger').focus();
        props.toggle(e);
      }}
    >
      {props.children}
    </button>
  );
}

TooltipTrigger.propTypes = {
  toggle: PropTypes.func
};

TooltipTrigger.defaultProps = {
  toggle: () => {}
};

module.exports = TooltipTrigger;

