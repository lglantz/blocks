import * as React from 'react';
import classnames from 'classnames';
import TextField from './TextField';
import Dropdown from '../dropdowns/Dropdown';
import { number } from '../../../../../../Library/Caches/typescript/3.7/node_modules/@types/prop-types';

const TextFieldWithDropdown: React.FunctionComponent<TextFieldWithDropdownProps> = (props) => {
  const classes = classnames('blx-text-field-with-dropdown', props.className, {
    'blx-disabled': props.disabled
  });
  return (
    <div
      style={props.style}
      className={classes}
    >
      {
        //@ts-ignore 
        <TextField {...props.textField} />
      }
      {
        //@ts-ignore 
        <Dropdown {...props.dropdown} />
      }
    </div>
  );
}

type TextFieldWithDropdownProps = {
  className?: string,
  style?: any,//object,
  disabled?: boolean,
  textField?: {
    label: string,
    onChange: any,//func,
    name: string,
    type: string,
    placeholder: string,
    invalidErrorMessage: string,
    value: string,
    isValid: boolean
  },
  dropdown?: {
    text: string,
    onChange: any, //func,
    options: {
      text: string | number,
      value: string | number,
      href: string,
      disabled: boolean
    }[],
    value?: string | number,
  }
};

TextFieldWithDropdown.defaultProps = {
  className: '',
  style: null,
  disabled: false,
  textField: {
    label: null,
    onChange: () => { },
    name: '',
    type: 'text',
    placeholder: 'Text input',
    invalidErrorMessage: '',
    value: '',
    isValid: true
  },
  dropdown: {
    text: 'Choose an option',
    onChange: () => { },
    options: [],
    value: null
  }
};

export default TextFieldWithDropdown;

