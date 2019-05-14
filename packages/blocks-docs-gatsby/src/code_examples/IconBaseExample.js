import React from "react"

const { AddIcon,
        CloseIcon,
        MoreIcon,
        MoreVerticalIcon} = require('blocks-react').Icons;

const IconBaseExamples = () => (
  <div>
    <AddIcon />
    <CloseIcon fill="var(--focus)" />
    <MoreIcon fill="var(--dark-01)" />
    <MoreVerticalIcon fill="var(--warning)" />
  </div>
);

export default IconBaseExamples;
