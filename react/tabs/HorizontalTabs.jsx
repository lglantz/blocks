const React = require('react');
const PropTypes = require('prop-types');


const HorizontalTabs = props => (
  <div className={`horizontal-tabs ${props.isDisabled ? 'disabled' : ''}`}>
    {
      props.tabs.map((tab, idx) => (
        <label
          className="horizontal-tab"
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
          <span className="tab tab-title">
            {tab}
          </span>
        </label>
      ))
    }
  </div>
);

HorizontalTabs.propTypes = {
  name: PropTypes.string,
  tabs: PropTypes.arrayOf(PropTypes.string),
  activeTabIdx: PropTypes.number,
  isDisabled: PropTypes.bool,
  onChange: PropTypes.func
};

HorizontalTabs.defaultProps = {
  name: '',
  tabs: [],
  activeTabIdx: 0,
  isDisabled: false,
  onChange: () => {}
};

module.exports = HorizontalTabs;

