const m = require('mithril');

const ButtonPrimary = require('blocks-mithril').Buttons.ButtonPrimary;
const ButtonSecondary = require('blocks-mithril').Buttons.ButtonSecondary;
const ButtonDanger = require('blocks-mithril').Buttons.ButtonDanger;

const getPreviewComponent = require('../common/getMithrilPreviewComponent.jsx');

const ButtonPreview = {
  view: () => (
    <div className="l-flex-vertical">
      <div className="l-flex-horizontal">
        { getPreviewComponent('Primary Button', <ButtonPrimary text="Primary button" onClick={() => {}} />) }
        { getPreviewComponent('Secondary Button', <ButtonSecondary text="Secondary button" onClick={() => {}} />) }
      </div>
      <div className="l-flex-horizontal">
        { getPreviewComponent('Primary Button Disabled', <ButtonPrimary text="Primary button disabled" onClick={() => {}} isDisabled={true} />) }
        { getPreviewComponent('Secondary Button Disabled', <ButtonSecondary text="Secondary button disabled" onClick={() => {}} isDisabled={true} />) }
      </div>
      <div className="l-flex-horizontal">
        { getPreviewComponent('Link Button Primary, External', <ButtonPrimary text="Go to Google" href="https://www.google.com" isExternal={true} />) }
        { getPreviewComponent('Link Button Secondary, Internal', <ButtonSecondary text="Go to Blocks" href="/" />) }
      </div>
      <div className="l-flex-horizontal">
        { getPreviewComponent('Primary Button with icon', <ButtonPrimary text="Primary button" onClick={() => {}} leftIcon="plus" />) }
        { getPreviewComponent('Secondary Button with icon', <ButtonSecondary text="Secondary button" onClick={() => {}} leftIcon="plus" />) }
      </div>
      <div className="l-flex-horizontal">
        { getPreviewComponent('Primary Button with icon', <ButtonPrimary text="Primary button" onClick={() => {}} rightIcon="plus" />) }
        { getPreviewComponent('Secondary Button with icon', <ButtonSecondary text="Secondary button" onClick={() => {}} rightIcon="plus" />) }
      </div>
      <div className="l-flex-horizontal">
        { getPreviewComponent('Primary icon button', <ButtonPrimary onClick={() => {}} iconName="plus" />) }
        { getPreviewComponent('Secondary icon button', <ButtonSecondary onClick={() => {}} iconName="plus" />) }
      </div>
      <div className="l-flex-horizontal">
        { getPreviewComponent('Danger button', <ButtonDanger text="Danger button" onClick={() => {}} />)}
      </div>
    </div>
  )
};

const rootElement = document.getElementById('mithril-preview');
m.mount(rootElement, ButtonPreview);
