import React from "react"

const { Alert } = require('blocks-react').Alerts;

const AlertExample = () => (
  <div>
    <Alert
      type="success"
      title="Success Title"
      message="Additional information or directions go here. Brevity is the soul of wit, however, text may wrap to another line in the off chance that we want the user hooked on phonics."
      closable
    />
    <Alert
      type="information"
      title="Information Title"
      message="Information Explanation - also displaying what an alert that cannot be closed looks like"
    />
    <Alert
      type="warning"
      title="Warning Title"
      message="Warning explanation"
      closable
    />
    <Alert
      type="error"
      title="Error Title"
      message="Error explanation"
      closable
    />
  </div>
);

export default AlertExample;
