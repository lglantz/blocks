import React from "react"
import SuccessAlert from 'blocks-react/dist/alerts/SuccessAlert';

const AlertSuccessExample = () => (
  <SuccessAlert
    className="fun"
    title="Success Alert"
    message="Additional information or directions go here. Brevity is the soul of wit, however, text may wrap to another line in the off chance that we want the user hooked on phonics."
    closable
  />
);

export default AlertSuccessExample;
