const React = require('react');

const BlocksReactProgress = require('../../react-index.js').Progress;
const Breadcrumbs = BlocksReactProgress.Breadcrumbs;
const ProgressDots = BlocksReactProgress.ProgressDots;

const ProgressPreview = () => (
  <div className="l-flex-vertical doc-section">
    <h4>Progress</h4>
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

module.exports = ProgressPreview;
