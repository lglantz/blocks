const React = require('react');
const PropTypes = require('prop-types');
const ReactLink = require('react-router-dom').Link;


const LinkTabs = (props) => {
  const links = props.tabs.map((tab, idx) => {
    const classes = `blx-tab-item ${idx === props.activeTabIdx ? 'blx-active' : 'blx-inactive'}`;
    const link = props.useReactLink ?
      <ReactLink className={classes} to={tab.href}>{tab.name}</ReactLink> :
      <a className={classes} href={tab.href}>{tab.name}</a>;

    return <li key={`${props.name}-${tab.name}`}>{ link }</li>;
  });

  return (
    <ul className={`${props.isVertical ? 'blx-vertical-tabs' : 'blx-horizontal-tabs'} ${props.isDisabled ? 'blx-disabled' : ''}`}>
      { links }
    </ul>
  );
};

LinkTabs.propTypes = {
  name: PropTypes.string.isRequired,
  tabs: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    href: PropTypes.string
  })).isRequired,
  activeTabIdx: PropTypes.number,
  isDisabled: PropTypes.bool,
  isVertical: PropTypes.bool,
  useReactLink: PropTypes.bool
};

LinkTabs.defaultProps = {
  activeTabIdx: null,
  isDisabled: false,
  isVertical: false,
  useReactLink: false
};

module.exports = LinkTabs;

