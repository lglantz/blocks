const React = require('react');

const BlocksReact = require('../../react-index.js');
const Breadcrumbs = BlocksReact.Progress.Breadcrumbs;
const ProgressDots = BlocksReact.Progress.ProgressDots;

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
