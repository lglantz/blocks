import * as React from 'react';
import RadioButton from './RadioButton';

const RadioButtonGroup: React.FunctionComponent<RadioButtonGroupProps> = props => (
  <div
    style={props.style}
    className={props.className}
  >
    {
      props.options.map((option, idx) => (
        <RadioButton
          key={option.text}
          //@ts-ignore
          name={props.name}
          text={option.text}
          value={option.text}
          disabled={props.disabled}
          onChange={props.onChange}
          checked={idx === props.checkedIndex}
          isValid={option.isValid === false ? option.isValid : true}
        />
      ))
    }
  </div>
);

type RadioButtonGroupProps = {
  className?: string,
  style?: any, //object,
  name: string,
  onChange: any,//func,
  options?: {
    text: string,
    isValid: boolean,
  }[],
  disabled?: boolean,
  checkedIndex?: number
};

RadioButtonGroup.defaultProps = {
  className: '',
  style: null,
  options: [],
  disabled: false,
  checkedIndex: -1
};

export default RadioButtonGroup;
