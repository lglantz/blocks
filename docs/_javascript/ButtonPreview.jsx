const React = require('react');
const ReactDOM = require('react-dom');

const getPreviewComponent = require('./getPreviewComponent.jsx');

const ButtonPrimary = require('../../react/buttons/ButtonPrimary.jsx');
const ButtonSecondary = require('../../react/buttons/ButtonSecondary.jsx');

const ButtonPreview = () => (
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
      { getPreviewComponent('Link Button Primary, External', <ButtonPrimary text="Go to Google" href="https://www.google.com" isExternal />) }
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
  </div>
);

const rootElement = document.getElementById('react-preview');
ReactDOM.render(<ButtonPreview />, rootElement);
