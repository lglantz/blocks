const React = require('react');
const ReactDOM = require('react-dom');

const getPreviewComponent = require('./common/getPreviewComponent.jsx');
const HelpIcon = require('blocks-react').Icons.HelpIcon;

const Tooltip = require('blocks-react').Tooltip;

const TooltipPreview = () => {
  return (
    <div className="l-flex-vertical">
      <div className="l-flex-horizontal">
        <span className="doc-state-title h5">Default</span>
        { getPreviewComponent('Minimum width', <Tooltip position="right" text="X" trigger={<HelpIcon />}/>) }
        { getPreviewComponent('Maximum width', <Tooltip position="right" text="In the late summer of that year we lived in a house in a village that looked across the river and the plain. In the late summer of that year we lived in a house in a village that" trigger={<HelpIcon />}/>) }
      </div>
      <div className="l-flex-horizontal">
        <span className="doc-state-title h5">With title</span>
        { getPreviewComponent('Minimum width', <Tooltip position="right" title="Title" text="Tooltip text tooltip text tooltip text" trigger={<HelpIcon />}/>) }
        { getPreviewComponent('Maximum width', <Tooltip position="right" title="Title" text="In the late summer of that year we lived in a house in a village that looked across the river and the plain. In the late summer of that year we lived in a house in a village that" trigger={<HelpIcon />}/>) }
      </div>
      <div className="l-flex-horizontal blx-dark-bg">
        { getPreviewComponent('Light default', <Tooltip lightBg position="right" text="X" trigger={<HelpIcon />}/>) }
      </div>
      <div className="l-flex-horizontal blx-dark-bg">
        { getPreviewComponent('Light with title', <Tooltip lightBg position="right" title="Title" text="Tooltip text tooltip text tooltip text" trigger={<HelpIcon />}/>) }
      </div>
    </div>
  );
}

const rootElement = document.getElementById('react-preview');
ReactDOM.render(<TooltipPreview />, rootElement);
