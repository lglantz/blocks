const m = require('mithril');

const ButtonPrimary = require('blocks-mithril').Buttons.ButtonPrimary;

const getPreviewComponent = require('../common/getMithrilPreviewComponent.jsx');

const ButtonPreview = {
  view: () => (
    <div className="l-flex-vertical">
      <div className="l-flex-horizontal">
        { getPreviewComponent('Primary Button', <ButtonPrimary text="Primary button" onClick={() => {}} />) }
      </div>
    </div>
  )
};

const rootElement = document.getElementById('mithril-preview');
m.mount(rootElement, ButtonPreview);
