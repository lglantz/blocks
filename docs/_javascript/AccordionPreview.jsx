const React = require('react');

const BlocksReact = require('../../react-index.js');
const AccordionSection = BlocksReact.Accordion;

const AccordionPreview = () => (
  <div className="l-flex-vertical doc-section">
    <h4>Accordions</h4>
    <div>
      <AccordionSection
        trigger={<span className="blx-subtitle">Item 1</span>}
      >
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, architecto, explicabo perferendis nostrum, maxime impedit atque odit sunt pariatur illo obcaecati soluta molestias iure facere dolorum adipisci eum? Saepe, itaque.</p>
      </AccordionSection>
      <AccordionSection
        trigger={<span className="blx-subtitle">Item 2</span>}
      >
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, architecto, explicabo perferendis nostrum, maxime impedit atque odit sunt pariatur illo obcaecati soluta molestias iure facere dolorum adipisci eum? Saepe, itaque.</p>
      </AccordionSection>
      <AccordionSection
        trigger={<span className="blx-subtitle">Item 3</span>}
      >
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, architecto, explicabo perferendis nostrum, maxime impedit atque odit sunt pariatur illo obcaecati soluta molestias iure facere dolorum adipisci eum? Saepe, itaque.</p>
      </AccordionSection>
    </div>
  </div>
);

module.exports = AccordionPreview;
