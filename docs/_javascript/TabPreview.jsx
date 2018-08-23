const React = require('react');
const ReactDOM = require('react-dom');

const getPreviewComponent = require('./getPreviewComponent.jsx');

const BlocksReactTabs = require('../../react-index.js').Tabs;
const RadioTabs = BlocksReactTabs.RadioTabs;
const LinkTabs = BlocksReactTabs.LinkTabs;

const TabPreview = () => (
  <div>
    { getPreviewComponent('Horizontal',
        <RadioTabs
          tabs={
            [
              'Tab 1', 'Tab 2', 'Tab 3', 'Tab 4'
            ]
          }
          onChange={() => {}}
        />
    ) }
    { getPreviewComponent('Horizontal disabled',
        <RadioTabs
          tabs={
            [
              'Disabled Tab 1', 'Disabled Tab 2', 'Disabled Tab 3', 'Disabled Tab 4'
            ]
          }
          isDisabled
          onChange={() => {}}
        />
    ) }
    { getPreviewComponent('Link Tabs',
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
    ) }
    { getPreviewComponent('Vertical',
        <RadioTabs
          tabs={
            [
              'Tab 1', 'Tab 2', 'Tab 3', 'Tab 4'
            ]
          }
          isVertical
          onChange={() => {}}
        />
    ) }
  </div>
);

const rootElement = document.getElementById('react-preview');
ReactDOM.render(<TabPreview />, rootElement);
