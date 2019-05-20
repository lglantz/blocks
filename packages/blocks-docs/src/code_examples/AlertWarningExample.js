import React from "react"

const { WarningAlert } = require('blocks-react').Alerts;

const AlertWarningExample = () => (
  <WarningAlert
    title="Warning Alert"
    message="An explanation of the warning goes here."
    closable
  />
);

export default AlertWarningExample;
