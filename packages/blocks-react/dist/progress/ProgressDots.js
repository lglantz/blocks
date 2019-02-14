'use strict';

var React = require('react');
var PropTypes = require('prop-types');

var ProgressDots = function ProgressDots(props) {
  var steps = [];
  for (var i = 0; i < props.numSteps; i++) {
    steps.push(i);
  }

  var name = props.name || Math.random();

  return React.createElement(
    'div',
    { className: 'blx-progress-dots' },
    steps.map(function (step) {
      return React.createElement(
        'label',
        {
          className: 'blx-progress-dot-container',
          key: step
        },
        React.createElement('input', {
          type: 'radio',
          value: step,
          name: name,
          checked: step === props.currentStepIdx,
          onChange: props.onClick
        }),
        React.createElement('span', { className: 'blx-progress-dot' })
      );
    })
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
  onClick: function onClick() {}
};

module.exports = ProgressDots;