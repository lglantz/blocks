const React = require('react');
const ReactDOM = require('react-dom');

const ButtonPreview = require('./ButtonPreview.jsx');
const CheckboxPreview = require('./CheckboxPreview.jsx');
const RadioButtonPreview = require('./RadioButtonPreview.jsx');
const TextFieldPreview = require('./TextFieldPreview.jsx');
const DropdownPreview = require('./DropdownPreview.jsx');
const AlertPreview = require('./AlertPreview.jsx');
const AccordionPreview = require('./AccordionPreview.jsx');
const ProgressPreview = require('./ProgressPreview.jsx');
const TabPreview = require('./TabPreview.jsx');
const SortableListPreview = require('./SortableListPreview.jsx');
const ModalPreview = require('./ModalPreview.jsx');


const Preview = () => (
  <div>
    <ButtonPreview />
    <CheckboxPreview />
    <RadioButtonPreview />
    <TextFieldPreview />
    <DropdownPreview />
    <AlertPreview />

    <p>NOTE: The following components are less complete but are included here for preview purposes.</p>

    <AccordionPreview />
    <ProgressPreview />
    <TabPreview />
    <SortableListPreview />
    <ModalPreview />
  </div>
);

const rootElement = document.getElementById('root');

ReactDOM.render(<Preview />, rootElement);
