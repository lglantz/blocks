import React from "react"
import ButtonPrimary from 'blocks-react/dist/buttons/ButtonPrimary';
import ButtonSecondary from 'blocks-react/dist/buttons/ButtonSecondary';
import ButtonDanger from 'blocks-react/dist/buttons/ButtonDanger';
import ButtonDark from 'blocks-react/dist/buttons/ButtonDark';
import CloseIcon from 'blocks-react/dist/icons/CloseIcon';
import AddIcon from 'blocks-react/dist/icons/AddIcon';
import BackIcon from 'blocks-react/dist/icons/BackIcon';
import ErrorIcon from 'blocks-react/dist/icons/ErrorIcon';
const { Colors } = require('blocks-base');

const ButtonTextIconExample = () => (
  <div className="blx-h-button-group">
    <ButtonPrimary
      text="Add something"
      onClick={() => {}}
      rightIcon={<AddIcon />}
    />
    <ButtonSecondary
      text="Go back"
      onClick={() => {}}
      leftIcon={<BackIcon />}
    />
    <ButtonDanger
      text="Oh no"
      onClick={() => {}}
      rightIcon={<ErrorIcon />}
    />
    <ButtonDark
      text="Exit"
      onClick={() => {}}
      leftIcon={<CloseIcon fill={Colors.SECONDARY_00} />}
    />
  </div>
);

export default ButtonTextIconExample;
