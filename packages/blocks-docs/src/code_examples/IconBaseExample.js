import React from "react"

const { AddIcon,
        CloseIcon,
        MoreIcon,
        MoreVerticalIcon} = require('blocks-react').Icons;
const { Colors } = require('blocks-base');

const IconBaseExamples = () => (
  <div>
    <AddIcon />
    <CloseIcon fill={Colors.FOCUS} />
    <MoreIcon fill={Colors.DARK_01} />
    <MoreVerticalIcon fill={Colors.WARNING} />
  </div>
);

export default IconBaseExamples;
