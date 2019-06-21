import React from "react"

const { Alerts } = require('blocks-react');

const AlertExample = () => (
  <div className="blx-alert-wide-container">
    <Alerts.Banner type="success" closable title="Success Title">
      <p>Success explanation</p>
    </Alerts.Banner>

    <Alerts.Banner type="information" title="Information Title">
      <p>Information explanation</p>
    </Alerts.Banner>

    <Alerts.Banner type="warning" closable title="Warning Title">
      <p>Warning explanation</p>
    </Alerts.Banner>

    <Alerts.Banner type="error" closable title="Error Title">
      <p>Error explanation</p>
    </Alerts.Banner>
  </div>
);

export default AlertExample;
