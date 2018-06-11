const React = require('react');
const PropTypes = require('prop-types');


const VerticalTabs = props => (
  <div className={`vertical-tabs ${props.isDisabled ? 'disabled' : ''}`}>
    {
      props.tabs.map((tab, idx) => (
        <label
          className="vertical-tab"
          key={tab}
        >
          <input
            type="radio"
            value={tab}
            name={props.name}
            checked={idx === props.activeTabIdx}
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

VerticalTabs.propTypes = {
  name: PropTypes.string,
  tabs: PropTypes.arrayOf(PropTypes.string),
  activeTabIdx: PropTypes.number,
  isDisabled: PropTypes.bool,
  onChange: PropTypes.func
};

VerticalTabs.defaultProps = {
  name: '',
  tabs: [],
  activeTabIdx: 0,
  isDisabled: false,
  onChange: () => {}
};

module.exports = VerticalTabs;
