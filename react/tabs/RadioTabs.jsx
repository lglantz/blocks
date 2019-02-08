const React = require('react');
const PropTypes = require('prop-types');


const RadioTabs = (props) => {
  return (
    <div className={`${props.isVertical ? 'blx-vertical-tabs' : 'blx-horizontal-tabs'} ${props.isDisabled ? 'blx-disabled' : ''}`}>
      {
        props.tabs.map((tab, idx) => (
          <label
            key={tab}
          >
            <input
              type="radio"
              name={props.name}
              value={tab}
              checked={idx === props.activeTabIdx}
              disabled={props.isDisabled}
              onChange={evt => props.onChange(evt, idx)}
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
  name: PropTypes.string.isRequired, // needs to be unique for each tab group
  isDisabled: PropTypes.bool,
  isVertical: PropTypes.bool
};

RadioTabs.defaultProps = {
  activeTabIdx: null,
  isDisabled: false,
  isVertical: false
};

module.exports = RadioTabs;

