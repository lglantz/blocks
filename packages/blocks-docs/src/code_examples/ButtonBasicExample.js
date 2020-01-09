import React from "react"
import ButtonPrimary from 'blocks-react/dist/buttons/ButtonPrimary';
import ButtonSecondary from 'blocks-react/dist/buttons/ButtonSecondary';
import ButtonDanger from 'blocks-react/dist/buttons/ButtonDanger';
import ButtonDark from 'blocks-react/dist/buttons/ButtonDark';

const ButtonBasicExample = () => (
  <div className="blx-v-button-group">
    <ButtonPrimary
      text="Primary Button"
      onClick={() => { }}
    />
    <ButtonSecondary
      text="Secondary Button"
      onClick={() => { }}
    />
    <ButtonDanger
      text="Danger Button"
      onClick={() => { }}
    />
    <ButtonDark
      text="Dark Button"
      onClick={() => { }}
    />
  </div>
);

export default ButtonBasicExample;
