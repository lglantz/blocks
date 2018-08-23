const React = require('react');
const ReactDOM = require('react-dom');

const BlocksReactProgress = require('../../react-index.js').Progress;
const Breadcrumbs = BlocksReactProgress.Breadcrumbs;
const ProgressDots = BlocksReactProgress.ProgressDots;

const ProgressPreview = () => (
  <div>
    <ProgressDots
      name="design-page-progress"
      numSteps={7}
      currentStepIdx={4}
    />
    <Breadcrumbs
      breadcrumbs={
        [
          {
            text: 'Breadcrumb 1',
            href: '#'
          },
          {
            text: 'Breadcrumb 2',
            href: '#'
          },
          {
            text: 'Breadcrumb 3',
            href: '#'
          },
          {
            text: 'Breadcrumb 4',
            href: '#'
          },
          {
            text: 'Breadcrumb 5',
            href: '#'
          }
        ]
      }
    />
  </div>
);

const rootElement = document.getElementById('react-preview');
ReactDOM.render(<ProgressPreview />, rootElement);
