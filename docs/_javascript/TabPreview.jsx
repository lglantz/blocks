const React = require('react');
const ReactDOM = require('react-dom');

const getPreviewComponent = require('./common/getPreviewComponent.jsx');

const RadioTabs = require('../../react/tabs/RadioTabs.jsx');
const LinkTabs = require('../../react/tabs/LinkTabs.jsx');

class TabPreview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTabHorizontal: null,
      activeTabVertical: null
    };
  }


  render() {
    return(
      <div>
        { getPreviewComponent('Horizontal',
            <RadioTabs
              tabs={
                [
                  'Tab 1', 'Tab 2', 'Tab 3', 'Tab 4'
                ]
              }
              activeTabIdx={this.state.activeTabHorizontal}
              onChange={(evt, idx) => this.setState({ activeTabHorizontal: idx })}
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
              activeTabIdx={0}
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
              activeTabIdx={this.state.activeTabVertical}
              onChange={(evt, idx) => this.setState({ activeTabVertical: idx })}
            />
        ) }
      </div>
  )};
}

const rootElement = document.getElementById('react-preview');
ReactDOM.render(<TabPreview />, rootElement);
