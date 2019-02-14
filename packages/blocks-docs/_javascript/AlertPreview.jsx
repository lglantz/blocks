const React = require('react');
const ReactDOM = require('react-dom');

const SuccessAlert = require('blocks-react').Alerts.SuccessAlert;
const InformationalAlert = require('blocks-react').Alerts.InformationalAlert;
const WarningAlert = require('blocks-react').Alerts.WarningAlert;
const ErrorAlert = require('blocks-react').Alerts.ErrorAlert;

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
