const React = require('react');

const getPreviewComponent = require('./getPreviewComponent.jsx');

const BlocksReact = require('../../react-index.js');
const ButtonPrimary = BlocksReact.Buttons.ButtonPrimary;
const ButtonSmallPrimary = BlocksReact.Buttons.ButtonSmallPrimary;
const ButtonSecondary = BlocksReact.Buttons.ButtonSecondary;
const ButtonSmallSecondary = BlocksReact.Buttons.ButtonSmallSecondary;

const ButtonPreview = () => (
  <div className="l-flex-vertical doc-section">
    <h4>Buttons</h4>
    <div className="l-flex-vertical">
      <div className="l-flex-horizontal">
        { getPreviewComponent('Primary Button', <ButtonPrimary text="Primary button" onClick={() => {}} />) }
        { getPreviewComponent('Secondary Button', <ButtonSecondary text="Secondary button" onClick={() => {}} />) }
      </div>
      <div className="l-flex-horizontal">
        { getPreviewComponent('Primary Button Disabled', <ButtonPrimary text="Primary button disabled" onClick={() => {}} isDisabled />) }
        { getPreviewComponent('Secondary Button Disabled', <ButtonSecondary text="Secondary button disabled" onClick={() => {}} isDisabled />) }
      </div>
      <div className="l-flex-horizontal">
        { getPreviewComponent('Primary Button Small', <ButtonSmallPrimary text="Primary button small" onClick={() => {}} />) }
        { getPreviewComponent('Secondary Button Small', <ButtonSmallSecondary text="Secondary button small" onClick={() => {}} />) }
      </div>
      <div className="l-flex-horizontal">
        { getPreviewComponent('Link Button Primary, External', <ButtonPrimary text="Go to Google" href="https://www.google.com" isExternal />) }
        { getPreviewComponent('Link Button Secondary, Internal', <ButtonSecondary text="Go to Blocks" href="/" />) }
      </div>
    </div>
  </div>
);

module.exports = ButtonPreview;
