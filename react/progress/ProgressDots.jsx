const React = require('react');
const PropTypes = require('prop-types');


const ProgressDots = (props) => {
  const steps = [];
  for (let i = 0; i < props.numSteps; i++) {
    steps.push(i);
  }

  const name = props.name || Math.random();

  return (
    <div className="progress-dots">
      {
        steps.map(step => (
          <label
            className="progress-dot-container"
            key={step}
          >
            <input
              type="radio"
              value={step}
              name={name}
              checked={step === props.currentStepIdx}
              onChange={props.onClick}
            />
            <span className="progress-dot" />
          </label>
        ))
      }
    </div>
  );
};


ProgressDots.propTypes = {
  name: PropTypes.string,
  numSteps: PropTypes.number,
  currentStepIdx: PropTypes.number,
  onClick: PropTypes.func
};

ProgressDots.defaultProps = {
  name: '',
  numSteps: 0,
  currentStepIdx: 0,
  onClick: () => {}
};

module.exports = ProgressDots;
