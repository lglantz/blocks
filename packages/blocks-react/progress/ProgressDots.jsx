const React = require('react');
const PropTypes = require('prop-types');


const ProgressDots = (props) => {
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


ProgressDots.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  name: PropTypes.string,
  numSteps: PropTypes.number,
  currentStepIdx: PropTypes.number,
  onClick: PropTypes.func
};

ProgressDots.defaultProps = {
  className: '',
  style: null,
  name: '',
  numSteps: 0,
  currentStepIdx: 0,
  onClick: () => {}
};

module.exports = ProgressDots;
