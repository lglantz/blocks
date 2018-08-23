const React = require('react');

const getPreviewComponent = require('./getPreviewComponent.jsx');

const BlocksReactTabs = require('../../react-index.js').Tabs;
const RadioTabs = BlocksReactTabs.RadioTabs;
const LinkTabs = BlocksReactTabs.LinkTabs;

const TabPreview = () => (
  <div className="l-flex-vertical doc-section">
    <h4>Tabs</h4>
    <div>
      <p>Horizontal tabs</p>
      <RadioTabs
        tabs={
          [
            'Tab 1', 'Tab 2', 'Tab 3', 'Tab 4'
          ]
        }
        onChange={() => {}}
      />
    </div>
    <div>
      <p>Disabled horizontal tabs</p>
      <RadioTabs
        tabs={
          [
            'Disabled Tab 1', 'Disabled Tab 2', 'Disabled Tab 3', 'Disabled Tab 4'
          ]
        }
        isDisabled
        onChange={() => {}}
      />
    </div>
    <div>
      <p>Vertical tabs</p>
      <RadioTabs
        tabs={
          [
            'Tab 1', 'Tab 2', 'Tab 3', 'Tab 4'
          ]
        }
        isVertical
        onChange={() => {}}
      />
    </div>
    <div>
      <p>Link tabs</p>
      <LinkTabs
        tabs={
          [
            { name: 'Tab 1', href: '#' },
            { name: 'Tab 2', href: '#' },
            { name: 'Tab 3', href: '#' },
            { name: 'Tab 4', href: '#' }
          ]
        }
      />
    </div>
  </div>
);

module.exports = TabPreview;
