import React from "react"
import AddIcon from 'blocks-react/dist/icons/AddIcon';
import CloseIcon from 'blocks-react/dist/icons/CloseIcon';
import MoreIcon from 'blocks-react/dist/icons/MoreIcon';
import MoreVerticalIcon from 'blocks-react/dist/icons/MoreVerticalIcon';
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
