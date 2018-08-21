const React = require('react');

const BlocksReact = require('../../react-index.js');
const SuccessAlert = BlocksReact.Alerts.SuccessAlert;
const InformationalAlert = BlocksReact.Alerts.InformationalAlert;
const WarningAlert = BlocksReact.Alerts.WarningAlert;
const ErrorAlert = BlocksReact.Alerts.ErrorAlert;

const AlertPreview = () => (
  <div className="l-flex-vertical doc-section">
    <h4>Alerts</h4>
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

module.exports = AlertPreview;
