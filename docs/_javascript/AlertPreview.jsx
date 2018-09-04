const React = require('react');
const ReactDOM = require('react-dom');

const SuccessAlert = require('../../react/alerts/SuccessAlert.jsx');
const InformationalAlert = require('../../react/alerts/InformationalAlert.jsx');
const WarningAlert = require('../../react/alerts/WarningAlert.jsx');
const ErrorAlert = require('../../react/alerts/ErrorAlert.jsx');

const AlertPreview = () => (
  <div>
    <SuccessAlert
      message="Additional information or directions go here. Brevity is the soul of wit, however, text may wrap to another line in the off chance that we want the user hooked on phonics."
    />
    <InformationalAlert
      message="Additional information or directions go here. We may decide this particular information is very important and remove the option to close it. If users can’t get rid of it, maybe they’ll read it."
    />
    <WarningAlert
      message="An explanation of the warning goes here."
    />
    <ErrorAlert
      message="An explanation of the error goes here. This should be the scariest looking banner — but not too scary. Maybe we’ll choose to add a button on this banner."
    />
  </div>
);

const rootElement = document.getElementById('react-preview');
ReactDOM.render(<AlertPreview />, rootElement);
