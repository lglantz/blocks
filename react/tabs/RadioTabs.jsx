const React = require('react');
const PropTypes = require('prop-types');


const RadioTabs = (props) => {
  const name = Math.random().toString();
  return (
    <div className={`${props.isVertical ? 'blx-vertical-tabs' : 'blx-horizontal-tabs'} ${props.isDisabled ? 'blx-disabled' : ''}`}>
      {
        props.tabs.map((tab, idx) => (
          <label
            key={tab}
          >
            <input
              type="radio"
              value={tab}
              name={name}
              defaultChecked={idx === props.activeTabIdx}
              disabled={props.isDisabled}
              onChange={props.onChange}
            />
            <span className="blx-tab-item">
              {tab}
            </span>
          </label>
        ))
      }
    </div>
  );
}

RadioTabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
  activeTabIdx: PropTypes.number,
  isDisabled: PropTypes.bool,
  isVertical: PropTypes.bool
};

RadioTabs.defaultProps = {
  activeTabIdx: 0,
  isDisabled: false,
  isVertical: false
};

module.exports = RadioTabs;

