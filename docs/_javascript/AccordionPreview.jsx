const React = require('react');
const ReactDOM = require('react-dom'); 

const AccordionSection = require('../../react/accordion/AccordionSection.jsx');

const AccordionPreview = () => (
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
);

const rootElement = document.getElementById('react-preview');
ReactDOM.render(<AccordionPreview />, rootElement);
