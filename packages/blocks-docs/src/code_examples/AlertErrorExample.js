import React from "react"
import ErrorAlert from 'blocks-react/dist/alerts/ErrorAlert';

const AlertErrorExample = () => (
  <ErrorAlert
    title="Error Alert"
    message="An explanation of the error goes here. This should be the scariest looking banner — but not too scary. Maybe we’ll choose to add a button on this banner."
    closable
  />
);

export default AlertErrorExample;
