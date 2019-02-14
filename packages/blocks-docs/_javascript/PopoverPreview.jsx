const React = require('react');
const ReactDOM = require('react-dom');

const getPreviewComponent = require('./common/getPreviewComponent.jsx');

const PopoverMenu = require('blocks-react').Dropdowns.PopoverMenu;

const exampleOptions = [
  {
    text: 'Action',
    onClick: () => {}
  },
  {
    text: 'Long Named Disabled Action',
    disabled: true,
    onClick: () => {}
  },
  {
    text: 'Correct Action',
    onClick: () => {}
  },
  {
    element: <span>More than text<span className="blx-icon blx-icon-plus" /></span>,
    key: 'customItem',
    onClick: () => {}
  },
  {
    text: 'Another Action',
    onClick: () => {}
  },
  {
    text: 'One More Action',
    onClick: () => {}
  }
];

class PopoverPreview extends React.Component {
  render() {
    return (
      <div className="l-flex-vertical">
        <div className="l-flex-horizontal">
          { getPreviewComponent('Default',
              <PopoverMenu
                text="More Actions"
                options={exampleOptions}
              />
          ) }
          { getPreviewComponent('Default right',
              <PopoverMenu
                text="More Actions"
                isLeft={false}
                options={exampleOptions}
              />
          ) }
        </div>
        <div className="l-flex-horizontal">
          { getPreviewComponent('Arrow icon',
              <PopoverMenu
                text="More Actions"
                icon="down"
                isLeft={false}
                options={exampleOptions}
              />
          ) }
          { getPreviewComponent('Vertical ellipsis',
              <PopoverMenu
                text="More Actions"
                icon="more-vertical"
                isLeft={false}
                options={exampleOptions}
              />
          ) }
        </div>
        <div className="l-flex-horizontal">
          { getPreviewComponent('Default, icon only',
              <PopoverMenu
                isLeft={false}
                options={exampleOptions}
              />
          ) }
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById('react-preview');
ReactDOM.render(<PopoverPreview />, rootElement);
