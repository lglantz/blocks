import React from "react"

const { ErrorAlert } = require('blocks-react').Alerts;

const AlertErrorExample = () => (
  <ErrorAlert
    title="Error Alert"
    message="An explanation of the error goes here. This should be the scariest looking banner — but not too scary. Maybe we’ll choose to add a button on this banner."
    closable
  />
);

export default AlertErrorExample;
