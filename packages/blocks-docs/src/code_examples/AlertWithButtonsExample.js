import React from "react"

const { Alerts } = require('blocks-react');
const Button = require('blocks-react').Buttons.Button;

const AlertWithButtonsExample = () => (
  <div className="blx-alert-wide-container">
    <Alerts.Banner type="success" title="Success Title" closable>
      <p>Success explanation</p>
      <div className="blx-h-button-group blx-modal-buttons">
        <Button color="secondary" onClick={() => {}}>
          Default Button
        </Button>
        <Button color="primary" onClick={() => {}}>
          Primary Button
        </Button>
      </div>
    </Alerts.Banner>

    <Alerts.Banner type="information" title="Information Title">
      <p>Information explanation</p>
      <div className="blx-h-button-group blx-modal-buttons">
        <Button color="secondary" onClick={() => {}}>
          Default Button
        </Button>
        <Button color="primary" onClick={() => {}}>
          Primary Button
        </Button>
      </div>
    </Alerts.Banner>

    <Alerts.Banner type="warning" title="Warning Title" closable>
      <p>Warning explanation</p>
      <div className="blx-h-button-group blx-modal-buttons">
        <Button color="secondary" onClick={() => {}}>
          Default Button
        </Button>
        <Button color="primary" onClick={() => {}}>
          Primary Button
        </Button>
      </div>
    </Alerts.Banner>

    <Alerts.Banner type="error" title="Error Title" closable>
      <p>Error explanation</p>
      <div className="blx-h-button-group blx-modal-buttons">
        <Button color="secondary" onClick={() => {}}>
          Default Button
        </Button>
        <Button color="danger" onClick={() => {}}>
          Danger Button
        </Button>
      </div>
    </Alerts.Banner>
  </div>
);

export default AlertWithButtonsExample;
