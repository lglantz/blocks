const React = require('react');
const ReactDOM = require('react-dom');

const getPreviewComponent = require('./common/getPreviewComponent.jsx');

const AddIcon = require('blocks-react').Icons.AddIcon;
const BackIcon = require('blocks-react').Icons.BackIcon;
const CloseIcon = require('blocks-react').Icons.CloseIcon;
const DownIcon = require('blocks-react').Icons.DownIcon;
const NextIcon = require('blocks-react').Icons.NextIcon;
const UpIcon = require('blocks-react').Icons.UpIcon;

const IconPreview = () => (
  <div className="l-flex-vertical">
    <div className="l-flex-horizontal">
      { getPreviewComponent('Add', <AddIcon />) }
    </div>
    <div className="l-flex-horizontal">
      { getPreviewComponent('Back', <BackIcon />) }
    </div>
    <div className="l-flex-horizontal">
      { getPreviewComponent('Down', <DownIcon />) }
    </div>
    <div className="l-flex-horizontal">
      { getPreviewComponent('Next', <NextIcon />) }
    </div>
    <div className="l-flex-horizontal">
      { getPreviewComponent('Up', <UpIcon />) }
    </div>
    <div className="l-flex-horizontal">
      { getPreviewComponent('Close', <CloseIcon />) }
    </div>
  </div>
);

const rootElement = document.getElementById('react-preview');
ReactDOM.render(<IconPreview />, rootElement);
