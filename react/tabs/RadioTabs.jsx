const React = require('react');
const PropTypes = require('prop-types');


const RadioTabs = (props) => {
  const name = Math.random().toString();
  return (
    <div className={`${props.isVertical ? 'vertical-tabs' : 'horizontal-tabs'} ${props.isDisabled ? 'disabled' : ''}`}>
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
            <span className="tab-item">
              {tab}
            </span>
          </label>
        ))
      }
    </div>
  );
}

RadioTabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string),
  activeTabIdx: PropTypes.number,
  isDisabled: PropTypes.bool,
  isVertical: PropTypes.bool,
  onChange: PropTypes.func
};

RadioTabs.defaultProps = {
  tabs: [],
  activeTabIdx: 0,
  isDisabled: false,
  isVertical: false,
  onChange: () => {}
};

module.exports = RadioTabs;

