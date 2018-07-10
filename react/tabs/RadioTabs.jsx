const React = require('react');
const PropTypes = require('prop-types');


const RadioTabs = props => (
  <div className={`${props.isVertical ? 'vertical-tabs' : 'horizontal-tabs'} ${props.isDisabled ? 'disabled' : ''}`}>
    {
      props.tabs.map((tab, idx) => (
        <label
          key={tab}
        >
          <input
            type="radio"
            value={tab}
            name={props.name}
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

RadioTabs.propTypes = {
  name: PropTypes.string,
  tabs: PropTypes.arrayOf(PropTypes.string),
  activeTabIdx: PropTypes.number,
  isDisabled: PropTypes.bool,
  isVertical: PropTypes.bool,
  onChange: PropTypes.func
};

RadioTabs.defaultProps = {
  name: Math.random().toString(),
  tabs: [],
  activeTabIdx: 0,
  isDisabled: false,
  isVertical: false,
  onChange: () => {}
};

module.exports = RadioTabs;

