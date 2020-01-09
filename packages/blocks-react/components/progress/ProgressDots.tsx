import * as React from 'react';

const ProgressDots: React.FunctionComponent<ProgressDotsProps> = (props) => {
  const steps = [];
  for (let i = 0; i < props.numSteps; i++) {
    steps.push(i);
  }

  const name = props.name || Math.random();

  return (
    <div
      style={props.style}
      className={`blx-progress-dots ${props.className}`}
    >
      {
        steps.map(step => (
          <label
            className="blx-progress-dot-container"
            key={step}
          >
            <input
              type="radio"
              value={step}
              //@ts-ignore
              name={name}
              checked={step === props.currentStepIdx}
              onChange={props.onClick}
            />
            <span className="blx-progress-dot" />
          </label>
        ))
      }
    </div>
  );
};


type ProgressDotsProps = {
  className?: string,
  style?: any,//object
  name?: string,
  numSteps?: number,
  currentStepIdx?: number,
  onClick?: any, //func
};

ProgressDots.defaultProps = {
  className: '',
  style: null,
  name: '',
  numSteps: 0,
  currentStepIdx: 0,
  onClick: () => { }
};

export default ProgressDots;
