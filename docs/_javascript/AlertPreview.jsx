const React = require('react');

const BlocksReactAlerts = require('../../react-index.js').Alerts;
const SuccessAlert = BlocksReactAlerts.SuccessAlert;
const InformationalAlert = BlocksReactAlerts.InformationalAlert;
const WarningAlert = BlocksReactAlerts.WarningAlert;
const ErrorAlert = BlocksReactAlerts.ErrorAlert;

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
