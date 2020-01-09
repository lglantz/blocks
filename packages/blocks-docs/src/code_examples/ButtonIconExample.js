import React from "react"
import ButtonPrimary from 'blocks-react/dist/buttons/ButtonPrimary';
import ButtonSecondary from 'blocks-react/dist/buttons/ButtonSecondary';
import ButtonDanger from 'blocks-react/dist/buttons/ButtonDanger';
import ButtonDark from 'blocks-react/dist/buttons/ButtonDark';
import UpIcon from 'blocks-react/dist/icons/UpIcon';
import MoreIcon from 'blocks-react/dist/icons/MoreIcon';
import SuccessIcon from 'blocks-react/dist/icons/SuccessIcon';
import CloseIcon from 'blocks-react/dist/icons/CloseIcon';
import AddIcon from 'blocks-react/dist/icons/AddIcon';
import BackIcon from 'blocks-react/dist/icons/BackIcon';
import NextIcon from 'blocks-react/dist/icons/NextIcon';
import DownIcon from 'blocks-react/dist/icons/DownIcon';

const { Colors } = require('blocks-base');

const ButtonIconExample = () => (
  <div className="blx-h-button-group">
    <ButtonPrimary
      onClick={() => {}}
      icon={<SuccessIcon />}
    />
    <ButtonSecondary
      onClick={() => {}}
      icon={<MoreIcon />}
    />
    <ButtonDanger
      onClick={() => {}}
      icon={<UpIcon />}
    />
    <ButtonDark
      onClick={() => {}}
      icon={<CloseIcon fill={Colors.SECONDARY_00} />}
    />
    <ButtonPrimary
      disabled
      onClick={() => {}}
      icon={<AddIcon />}
    />
    <ButtonSecondary
      disabled
      onClick={() => {}}
      icon={<BackIcon />}
    />
    <ButtonDanger
      disabled
      onClick={() => {}}
      icon={<NextIcon />}
    />
    <ButtonDark
      disabled
      onClick={() => {}}
      icon={<DownIcon fill={Colors.SECONDARY_00} />}
    />
  </div>
);

export default ButtonIconExample;
