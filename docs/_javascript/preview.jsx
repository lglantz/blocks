const React = require('react');
const ReactDOM = require('react-dom');

const BlocksReact = require('../../react-index.js');

const ButtonPrimary = BlocksReact.Buttons.ButtonPrimary;
const ButtonSmallPrimary = BlocksReact.Buttons.ButtonSmallPrimary;
const ButtonSecondary = BlocksReact.Buttons.ButtonSecondary;
const ButtonSmallSecondary = BlocksReact.Buttons.ButtonSmallSecondary;

const Checkbox = BlocksReact.Input.Checkbox;
const RadioButtonGroup = BlocksReact.Input.RadioButtonGroup;
const TextField = BlocksReact.Input.TextField;
const TextFieldWithDropdown = BlocksReact.Input.TextFieldWithDropdown;
const Toggle = BlocksReact.Input.Toggle;

const Dropdown = BlocksReact.Dropdowns.Dropdown;

const SuccessAlert = BlocksReact.Alerts.SuccessAlert;
const InformationalAlert = BlocksReact.Alerts.InformationalAlert;
const WarningAlert = BlocksReact.Alerts.WarningAlert;
const ErrorAlert = BlocksReact.Alerts.ErrorAlert;

const AccordionSection = BlocksReact.Accordion;

const Breadcrumbs = BlocksReact.Progress.Breadcrumbs;
const ProgressDots = BlocksReact.Progress.ProgressDots;

const RadioTabs = BlocksReact.Tabs.RadioTabs;
const LinkTabs = BlocksReact.Tabs.LinkTabs;

const SortableList = BlocksReact.SortableList;

const BaseModal = BlocksReact.Modals.BaseModal;

const INVALID_VALUE = 'Wrong';


function getPreviewComponent(caption, component) {
  return [
    <span className="doc-state-title blx-caption">
      {caption}
    </span>,

    <div className="doc-state-content">
      {component}
    </div>
  ]
}


class Preview extends React.Component {
  constructor() {
    super();

    this.state = {
      invalidInputValue: INVALID_VALUE,
      isBaseModalHidden: true
    };
  }

  render() {
    return (
      <div>
        { /* BUTTONS */ }
        <div className="l-flex-vertical doc-section">
          <h4>Buttons</h4>
          <div className="l-flex-vertical">
            <div className="l-flex-horizontal">
              { getPreviewComponent('Primary Button', <ButtonPrimary text="Primary button" onClick={() => {}} />) }
              { getPreviewComponent('Secondary Button', <ButtonSecondary text="Secondary button" onClick={() => {}} />) }
            </div>
            <div className="l-flex-horizontal">
              { getPreviewComponent('Primary Button Disabled', <ButtonPrimary text="Primary button disabled" onClick={() => {}} isDisabled />) }
              { getPreviewComponent('Secondary Button Disabled', <ButtonSecondary text="Secondary button disabled" onClick={() => {}} isDisabled />) }
            </div>
            <div className="l-flex-horizontal">
              { getPreviewComponent('Primary Button Small', <ButtonSmallPrimary text="Primary button small" onClick={() => {}} />) }
              { getPreviewComponent('Secondary Button Small', <ButtonSmallSecondary text="Secondary button small" onClick={() => {}} />) }
            </div>
            <div className="l-flex-horizontal">
              { getPreviewComponent('Link Button Primary, External', <ButtonPrimary text="Go to Google" href="https://www.google.com" isExternal />) }
              { getPreviewComponent('Link Button Secondary, Internal', <ButtonSecondary text="Go to Blocks" href="/" />) }
            </div>
          </div>
        </div>

        { /* CHECKBOXES */ }
        <div className="l-flex-vertical doc-section">
          <h4>Checkboxes</h4>
          <div className="l-flex-vertical">
            <div className="l-flex-horizontal">
              { getPreviewComponent('Unselected', <Checkbox text="Unselected" />) }
            </div>
            <div className="l-flex-horizontal">
              { getPreviewComponent('Selected', <Checkbox text="Selected" isChecked />) }
            </div>
            <div className="l-flex-horizontal">
              { getPreviewComponent('Unselected, Disabled', <Checkbox text="Unselected" isDisabled />) }
            </div>
            <div className="l-flex-horizontal">
              { getPreviewComponent('Selected, Disabled', <Checkbox text="Selected, Disabled" isDisabled isChecked />) }
            </div>
          </div>
        </div>

        { /* RADIO BUTTONS */ }
        <div className="l-flex-vertical doc-section">
          <h4>Radio Buttons</h4>
          <div className="l-flex-vertical">
            <div className="l-flex-horizontal">
              { getPreviewComponent('Unselected',
                  <RadioButtonGroup
                    name="radio-1"
                    options={['Unselected', 'Unselected 2']}
                    onChange={() => {}}
                  />
              )}
            </div>
            <div className="l-flex-horizontal">
              { getPreviewComponent('Selected',
                  <RadioButtonGroup
                    name="radio-2"
                    options={['Selected', 'Selected 2']}
                    checkedIndex={0}
                    onChange={() => {}}
                  />
              )}
            </div>
            <div className="l-flex-horizontal">
              { getPreviewComponent('Unselected, Disabled',
                  <RadioButtonGroup
                    name="radio-3"
                    options={['Unselected, Disabled']}
                    isDisabled
                    onChange={() => {}}
                  />
              ) }
            </div>
            <div className="l-flex-horizontal">
              { getPreviewComponent('Selected, Disabled',
                  <RadioButtonGroup
                    name="radio-4"
                    options={['Selected, Disabled']}
                    isDisabled
                    checkedIndex={0}
                    onChange={() => {}}
                  />
              ) }
            </div>
          </div>
        </div>

        { /* TEXT FIELDS */ }
        <div className="l-flex-vertical doc-section">
          <h4>Text Fields</h4>
          <div className="l-flex-vertical">
            <div className="l-flex-horizontal">
              { getPreviewComponent('Default', <TextField label="Text input label" placeholder="e.g. Text input" />) }
            </div>
            <div className="l-flex-horizontal">
              { getPreviewComponent('Disabled', <TextField label="Text input label" placeholder="e.g. Text input" isDisabled />) }
            </div>
            <div className="l-flex-horizontal">
              { getPreviewComponent('Idle, Filled', <TextField label="Text input label" value="More than a placeholder" onChange={() => {}} />) }
            </div>
            <div className="l-flex-horizontal">
              { getPreviewComponent('Validation',
                  <TextField
                    label="Text input label"
                    isValid={value => { return value !== INVALID_VALUE; }}
                    invalidErrorMessage={`This text is invalid. Enter any value other than ${INVALID_VALUE} to make it valid.`}
                    value={this.state.invalidInputValue}
                    onChange={evt => this.setState({ invalidInputValue: evt.target.value })}
                  />
              ) }
            </div>
            <div className="l-flex-horizontal">
              { getPreviewComponent('Prefix/Suffix', <TextField label="Text input label" prefix="$" suffix="USD" />) }
            </div>
            <div className="l-flex-horizontal">
              { getPreviewComponent('Text Field with Dropdown',
                  <TextFieldWithDropdown
                    textField={{
                      label: "Text input label",
                      placeholder: "100,000"
                    }}
                    dropdown={{
                      options: [{text: 'ft', value: 'ft'}, {text: 'cm', value: 'cm'}, {text: 'm', value: 'm'}],
                      value: "ft"
                    }}
                  />
              ) }
            </div>
          </div>
        </div>

        { /* DROPDOWNS */ }
        <div className="l-flex-vertical doc-section">
          <h4>Dropdowns</h4>
          <div className="l-flex-vertical">
            <div className="l-flex-horizontal">
              { getPreviewComponent('Default',
                  <Dropdown
                    text="Choose an option"
                    options={
                      [
                        { value: 'option1', text: 'One option' },
                        { value: 'option2', text: 'Another option' },
                        { value: 'option3', text: 'Best option' }
                      ]
                    }
                  />
              ) }
            </div>
            <div className="l-flex-horizontal">
              { getPreviewComponent('Disabled',
                  <Dropdown
                    text="Choose an option"
                    isDisabled
                    options={
                      [
                        { value: 'option1', text: 'One option' },
                        { value: 'option2', text: 'Another option' },
                        { value: 'option3', text: 'Best option' }
                      ]
                    }
                  />
              ) }
            </div>
          </div>
        </div>

        { /* ALERTS */ }
        <div className="l-flex-vertical doc-section">
          <h4>Alerts</h4>
          <SuccessAlert
            message="Additional information or directions go here. Brevity is the soul of wit, however, text may wrap to another line in the off chance that we want the user hooked on phonics."
          />
          <InformationalAlert
            message="Additional information or directions go here. We may decide this particular information is very important and remove the option to close it. If users can’t get rid of it, maybe they’ll read it."
          />
          <WarningAlert
            message="An explanation of the warning goes here."
          />
          <ErrorAlert
            message="An explanation of the error goes here. This should be the scariest looking banner — but not too scary. Maybe we’ll choose to add a button on this banner."
          />
        </div>

        <p>NOTE: The following components are less complete but are included here for preview purposes.</p>

        { /* ACCORDIONS */ }
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

        { /* PROGRESS */ }
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

        { /* TOGGLES */ }
        <div className="l-flex-vertical doc-section">
          <h4>Toggles</h4>
          <div>
            <Toggle
              name="design-page-toggle"
              options={
                [
                  { text: 'Option 1', isChecked: true },
                  { text: 'Option 2' },
                  { text: 'Option 3' }
                ]
              }
            />
            <Toggle
              name="design-page-toggle-disabled"
              options={
                [
                  { text: 'I am', isChecked: true },
                  { text: 'a disabled' },
                  { text: 'toggle' }
                ]
              }
              isDisabled
            />
          </div>
        </div>

        { /* TABS */ }
        <div className="l-flex-vertical doc-section">
          <h4>Tabs</h4>
          <div>
            <p>Horizontal tabs</p>
            <RadioTabs
              tabs={
                [
                  'Tab 1', 'Tab 2', 'Tab 3', 'Tab 4'
                ]
              }
              onChange={() => {}}
            />
          </div>
          <div>
            <p>Disabled horizontal tabs</p>
            <RadioTabs
              tabs={
                [
                  'Disabled Tab 1', 'Disabled Tab 2', 'Disabled Tab 3', 'Disabled Tab 4'
                ]
              }
              isDisabled
              onChange={() => {}}
            />
          </div>
          <div>
            <p>Vertical tabs</p>
            <RadioTabs
              tabs={
                [
                  'Tab 1', 'Tab 2', 'Tab 3', 'Tab 4'
                ]
              }
              isVertical
              onChange={() => {}}
            />
          </div>
          <div>
            <p>Link tabs</p>
            <LinkTabs
              tabs={
                [
                  { name: 'Tab 1', href: '#' },
                  { name: 'Tab 2', href: '#' },
                  { name: 'Tab 3', href: '#' },
                  { name: 'Tab 4', href: '#' }
                ]
              }
            />
          </div>
        </div>

        { /* SORTABLE LIST */ }
        <div className="l-flex-vertical doc-section">
          <h4>Sortable List</h4>
          <div>
            <SortableList>
              <span>Item 1</span>
              <span>Item 2</span>
              <span>Item 3</span>
              <span>Item 4</span>
              <span>Item 5</span>
              <span>Item 6</span>
              <span>Item 7</span>
            </SortableList>
          </div>
        </div>

        { /* MODALS */ }
        <div className="l-flex-vertical doc-section">
          <h4>Modals</h4>
          <div>
            <BaseModal
              isHidden={this.state.isBaseModalHidden}
              onClose={() => this.setState(prevState => ({ isBaseModalHidden: !prevState.isBaseModalHidden })) }
            >
              <h4>Base Modal</h4>
              <p>Hello! This is a base modal.</p>
            </BaseModal>

            <ButtonPrimary
              text="Open Base Modal"
              onClick={() => this.setState(prevState => ({ isBaseModalHidden: !prevState.isBaseModalHidden })) }
            />
          </div>
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById('root');

ReactDOM.render(<Preview />, rootElement);
