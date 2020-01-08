import React from "react"
import InformationalAlert from 'blocks-react/dist/alerts/InformationalAlert';

const AlertInformationalExample = () => (
  <InformationalAlert
    title="Informational Alert"
    message="Additional information or directions go here. We may decide this particular information is very important and remove the option to close it. If users can’t get rid of it, maybe they’ll read it."
    closable
  />
);

export default AlertInformationalExample;
