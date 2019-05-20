import React from "react"

const { SuccessAlert } = require('blocks-react').Alerts;

const AlertSuccessExample = () => (
  <SuccessAlert
    title="Success Alert"
    message="Additional information or directions go here. Brevity is the soul of wit, however, text may wrap to another line in the off chance that we want the user hooked on phonics."
    closable
  />
);

export default AlertSuccessExample;
